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
}) {
  const handleSelectProduct = (resources) => {
    let specificProduct = [];
    resources.selection.map((product) => {
      specificProduct.push(product);
      setSelectedProduct((state) => ({ ...state, specificProduct }));
    });
    setOpenPickerProduct(false);
  };
  return (
    newUpsell.display_for === "Product" && (
      <Stack>
        <Spasing margin={"10px"}>
          <Button
            disabled={!selectedProduct}
            primary
            onClick={() => setOpenPickerProduct(true)}
          >
            Select {newUpsell.display_for}
          </Button>
        </Spasing>
        <ResourcePicker
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
