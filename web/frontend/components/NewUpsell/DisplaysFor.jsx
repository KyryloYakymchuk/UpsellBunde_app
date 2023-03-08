import React from "react";

import { Card } from "@shopify/polaris";

import DisplayRadiobutton from "./Options/DisplayRadiobutton";
import SearchProduct from "./Options/SearchProduct";
import { display_radiobutton } from "../../utils/constants/newUpsell";
import AdditionalConditions from "./Options/AdditionalConditions";
import { ProductBox, ProductImage } from "../style";
import { useState } from "react";

function DisplaysFor({
  handleChange,
  newUpsell,
  conditions,
  setConditions,
  selectedProduct,
  setSelectedProduct,
  editId
}) {
  const [openPickerProduct, setOpenPickerProduct] = useState(false);
  return (
    <Card title="Displays for" sectioned>
      <p style={{ marginBottom: "12px", color: "rgb(255,255,255)" }}>
        Choose which products will trigger the upsell offer.
      </p>
      <DisplayRadiobutton
        handleChange={handleChange}
        newUpsell={newUpsell.display_for}
        radiobutton_data={display_radiobutton}
        selectedProduct={selectedProduct && !editId}
      />
      <SearchProduct
        newUpsell={newUpsell}
        setSelectedProduct={setSelectedProduct}
        openPickerProduct={openPickerProduct}
        setOpenPickerProduct={setOpenPickerProduct}
        selectedProduct={selectedProduct}
        editId={editId}
      />

      {selectedProduct?.specificProduct !== 'all_products'  &&
        selectedProduct?.specificProduct?.map((data, index) => (
          <ProductBox key={index}>
            <ProductImage src={data?.images[0]?.originalSrc} alt="" />
            {data.title}
            
            {!editId && index === 0 && (
              <span
                onClick={() => (
                  setSelectedProduct((state) => ({
                    ...state,
                    specificProduct: [],
                  })),
                  setOpenPickerProduct(true)
                )}
              >
                Change
              </span>
            )}
          </ProductBox>
        ))}
      {/* <AdditionalConditions
        handleChange={handleChange}
        newUpsell={newUpsell}
        conditions={conditions}
        setConditions={setConditions}
      /> */}
    </Card>
  );
}

export default DisplaysFor;
