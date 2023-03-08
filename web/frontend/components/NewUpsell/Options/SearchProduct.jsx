import React, { useState } from "react";

import { Button, Stack } from "@shopify/polaris";

import { ResourcePicker } from "@shopify/app-bridge-react";
import { Spasing } from "../../style";

function SearchProduct({
  newUpsell,
  setSelectedProduct,
  openPickerProduct,
  setOpenPickerProduct,
  selectedProduct,
  editId,
}) {
  let specificProduct = [];

  if (selectedProduct?.specificProduct !== 'all_productsweb') {
    selectedProduct?.specificProduct?.map((product) => {
      specificProduct.push(product);
    });
  }

  const handleSelectProduct = (resources) => {
    resources.selection.forEach((product) => {
      const exists = specificProduct.some((item) => item.id === product.id);
      if (!exists) {
        specificProduct.push(product);
      }
    });
    setSelectedProduct((state) => ({ ...state, specificProduct }));
    setOpenPickerProduct(false);
  };
  return (
    newUpsell.display_for === "Product" && (
      <Stack>
        <Spasing margin={"10px"}>
          {!editId && (
            <Button
              disabled={!selectedProduct}
              primary
              onClick={() => setOpenPickerProduct(true)}
            >
              Select {newUpsell.display_for}
            </Button>
          )}
        </Spasing>
        <ResourcePicker
          initialSelectionIds={specificProduct}
          resourceType="Product"
          showVariants={false}
          open={openPickerProduct}
          onSelection={(resources) => handleSelectProduct(resources)}
          onCancel={() => setOpenPickerProduct(false)}
          selectMultiple={true}
        />
      </Stack>
    )
  );
}

export default SearchProduct;
