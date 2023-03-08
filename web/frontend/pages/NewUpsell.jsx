import React, { useState } from "react";

import { Page, Badge } from "@shopify/polaris";
import { useNavigate } from "react-router-dom";
import Name from "../components/NewUpsell/Name";
import Product from "../components/NewUpsell/Product";
import DisplaysFor from "../components/NewUpsell/DisplaysFor";
import AdditionalSettings from "../components/NewUpsell/AdditionalSettings";
import { useContext } from "react";
import { Context } from "../index";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEditId } from "../redux/actions/upsell";

export default function NewUpsell() {
  const [newUpsell, setNewUpsell] = useState({
    name: "",
    description: "",
    discount_available: false,
    discount_value: "",
    discount_type: "",
    // discount_code: "",
    display_for: "all_products",
    additional_conditions: false,
    mustMutch_condition: "all_conditions",
    upsell_position: "5",
    remove_parent_when_ups_add: false,
    // remove_ups_when_parent_removed: false,
    dont_display_if_product_is_alredy: false,
    display_custom_note: false,
    // match_product_qty: false,
    qty_selector_on_popup: false,
    status: "Active",
  });

  const [conditions, setConditions] = useState([
    {
      first: "product_title",
      second: "equal_to",
      value: "",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState();
  const { db } = useContext(Context);
  const { editId } = useSelector((state) => state.upsellReducer);
  const dispatch = useDispatch();
console.log(selectedProduct);
  const saveChanges = () => {
    let selectedProductObj = {
      id: selectedProduct.variants.map(
        ({ id }) => id.split("/").slice(-1)[0]
      )[0],
      title: selectedProduct.title,
      handle: selectedProduct.handle,
      description: selectedProduct.descriptionHtml || "",
      totalInventory: selectedProduct.totalInventory,
      images: selectedProduct.images[0]?.originalSrc || "",
      options: selectedProduct.options,
      specificProduct:
        newUpsell.display_for !== "all_products"
          ? selectedProduct.specificProduct?.map((spec) => ({
              id: spec.id.split("/").slice(-1)[0],
              title: spec.title,
              handle: spec.handle,
              totalInventory: spec.totalInventory,
              images: spec.images[0]?.originalSrc || "",
              options: spec.options,
              description: spec.descriptionHtml || "",
              variants: spec.variants.map((variant) => ({
                availableForSale: variant.availableForSale,
                compareAtPrice: variant.compareAtPrice || "",
                price: variant.price,
                inventoryQuantity: variant.inventoryQuantity,
                description: spec.descriptionHtml || "",
                displayName: variant.title || "",
                title: spec.title,
                image: variant.image?.originalSrc || "",
                id: variant.id.split("/").slice(-1)[0],
              })),
            }))
          : "all_products",
      variants: selectedProduct.variants.map((variant) => ({
        availableForSale: variant.availableForSale,
        compareAtPrice: variant.compareAtPrice || "",
        price: variant.price,
        description: selectedProduct.descriptionHtml || "",
        inventoryQuantity: variant.inventoryQuantity,
        displayName: variant.title || "",
        image: variant.image?.originalSrc || "",
        id: variant.id.split("/").slice(-1)[0],
      })),
    };

    if (newUpsell.display_for !== "all_products") {
      if (editId) {
        selectedProduct.specificProduct.map(({ id }, index) => {
          const docRef = doc(
            db,
            window.location.hostname,
            id.split("/").slice(-1)[0]
          );
          updateDoc(docRef, {
            newUpsell,
            conditions,
            selectedProductObj: {
              ...selectedProductObj,
              specificProduct: [selectedProductObj.specificProduct[index]],
            },
          });
        });
      } else {
        selectedProduct.specificProduct.map(({ id }, index) => {
          setDoc(
            doc(db, window.location.hostname, id.split("/").slice(-1)[0]),
            {
              newUpsell,
              conditions,
              selectedProductObj: {
                ...selectedProductObj,
                specificProduct: [selectedProductObj.specificProduct[index]],
              },
            }
          );
        });
      }
    } else {
      if (editId) {
        const docRef = doc(
          db,
          window.location.hostname,
          newUpsell.display_for +
            `-${selectedProductObj.id.split("/").slice(-1)[0]}`
        );
        updateDoc(docRef, {
          newUpsell,
          conditions,
          selectedProductObj,
        });
      } else {
        setDoc(
          doc(
            db,
            window.location.hostname,
            newUpsell.display_for +
              `-${selectedProductObj.id.split("/").slice(-1)[0]}`
          ),
          {
            newUpsell,
            conditions,
            selectedProductObj,
          }
        );
      }
    }
    goBackClick();
    dispatch(setEditId(""));
  };

  const navigate = useNavigate();
  const goBackClick = () => {
    navigate("/dashboard", { replace: true, reloadDocument: true });
  };

  const handleChange = (flag, specific) => (e) => {
    setNewUpsell((state) => ({ ...state, [flag]: specific || e }));
  };

  useEffect(async () => {
    if (editId) {
      const docRef = doc(db, window.location.hostname, editId);

      const docSnap = await getDoc(docRef);
      setConditions(docSnap.data().conditions);
      setNewUpsell(docSnap.data().newUpsell);
      setSelectedProduct(docSnap.data().selectedProductObj);
    }
  }, [editId]);

  useEffect(() => {
    if(selectedProduct?.specificProduct?.length){
      setSelectedProduct((state) => ({ ...state, specificProduct:'all_products' }));
    }
  }, [newUpsell.display_for]);
  return (
    <Page
      breadcrumbs={[{ onAction: goBackClick }]}
      secondaryActions={[{ content: "Cancel", onAction: goBackClick }]}
      primaryAction={{
        content: "Save",
        onAction: saveChanges,
        disabled:
          !selectedProduct ||
          (newUpsell.display_for === "Product" &&
            !selectedProduct.specificProduct?.length),
      }}
      title="Additional Product"
      titleMetadata={
        <Badge status={newUpsell.status === "Active" ? "success" : "info"}>
          {newUpsell.status}
        </Badge>
      }
      compactTitle
      fullWidth
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <div>
          <Name handleChange={handleChange} newUpsell={newUpsell} />
          <Product
            handleChange={handleChange}
            newUpsell={newUpsell}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <DisplaysFor
            handleChange={handleChange}
            newUpsell={newUpsell}
            conditions={conditions}
            setConditions={setConditions}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            editId={editId}
          />
          <AdditionalSettings
            handleChange={handleChange}
            newUpsell={newUpsell}
          />
        </div>
        {/* <Spasing margin={"10px"} />
        <div
          style={{
            minWidth: "700px",
            width: "50vw",
            position: "sticky",
            top: "30px",
          }}
        >
          <Card title="Upsell preview">
            <Spasing margin={"15px"} />
          </Card>
        </div> */}
      </div>
    </Page>
  );
}
