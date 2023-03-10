import React from "react";
import { IndexTable, useIndexResourceState } from "@shopify/polaris";
import { headings, resourceName } from "../../utils/constants/list";
import ListRows from "./ListRows";
import ListFilters from "./ListFilters";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../index";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEditId } from "../../redux/actions/upsell";
import { useNavigate } from "react-router-dom";

function List() {
  const [upsellFromDb, setUpsellFromDb] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    selectedResources,
    allResourcesSelected,
    handleSelectionChange,
    clearSelection,
  } = useIndexResourceState(upsellFromDb);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const promotedBulkActions = [
    {
      content: "Set as active",
      onAction: () => bulkStatus("Active"),
    },
    {
      content: "Set as draft",
      onAction: () => bulkStatus("Draft"),
    },
    {
      content: "Delete",
      onAction: () => bulkDelete(),
    },
  ];
  const { db } = useContext(Context);

  useEffect(() => {
    getListData();
  }, []);

  const bulkDelete = () => {
    selectedResources.map((id) => {
      handleDelete(id);
    });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, window.location.hostname, id));
    setTimeout(() => {
      getListData();
    }, 500);
    clearSelection();
  };
  const bulkStatus = (status) => {
    selectedResources.map((selectedId) => {
      updateDoc(doc(db, window.location.hostname, selectedId), {
        "newUpsell.status": status,
      });
    });
    clearSelection();
    setTimeout(() => {
      getListData();
    }, 500);
  };
  const getListData = async () => {
    setLoading(true);
    const docSnap = await getDocs(collection(db, window.location.hostname));
    let productArr = [];
    docSnap.forEach((upsells) => {
      if (upsells.data()?.newUpsell) {
        productArr.push({
          upsellSettings: upsells.data()?.newUpsell,
          selectedProductObj: upsells.data()?.selectedProductObj,
          id:
            upsells.data()?.selectedProductObj?.specificProduct[0]?.id ||
            "all_products-" + upsells.data()?.selectedProductObj.id,
        });
      }
    });
    setUpsellFromDb(productArr);
    setLoading(false);
  };
  const handleEdit = (id) => {
    dispatch(setEditId(id));
    navigate("/newupsell", { replace: true, reloadDocument: true });
  };

  return (
    <>
      <ListFilters
        getListData={getListData}
        upsellFromDb={upsellFromDb}
        setUpsellFromDb={setUpsellFromDb}
      />
      <IndexTable
        loading={loading}
        resourceName={resourceName}
        itemCount={upsellFromDb.length}
        selectedItemsCount={
          allResourcesSelected ? "All" : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        hasMoreItems
        selectable
        promotedBulkActions={promotedBulkActions}
        lastColumnSticky
        headings={headings}
      >
        <ListRows
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={upsellFromDb}
          selectedResources={selectedResources}
        />
      </IndexTable>
    </>
  );
}
export default List;
