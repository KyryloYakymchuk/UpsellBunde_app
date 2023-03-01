import { Card, Stack } from "@shopify/polaris";
import React from "react";

import ApplyDiscount from "./Options/ApplyDiscount";
import CustomDiscCode from "./Options/CustomDiscCode";
import Description from "./Options/Description";
import SelectUpsellProduct from "./Options/SelectUpsellProduct";

function Product({
  handleChange,
  newUpsell,
  selectedProduct,
  setSelectedProduct,
}) {
  return (
    <Card sectioned title="Upsell product">
      <Stack distribution="fill">
        <SelectUpsellProduct
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <Description handleChange={handleChange} newUpsell={newUpsell} />
        <ApplyDiscount handleChange={handleChange} newUpsell={newUpsell} />
        {/* <CustomDiscCode handleChange={handleChange} newUpsell={newUpsell} /> */}
      </Stack>
    </Card>
  );
}

export default Product;
