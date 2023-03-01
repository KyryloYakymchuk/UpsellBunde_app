import { ResourcePicker } from "@shopify/app-bridge-react";
import { Button, Stack } from "@shopify/polaris";
import React from "react";
import { useState } from "react";
import { ProductBox, ProductImage } from "../../style";

function SelectUpsellProduct({ selectedProduct, setSelectedProduct }) {
  const [openProduct, setOpenProduct] = useState(false);
  const handleSelectProduct = (resources) => {
    resources.selection.map((product) => setSelectedProduct(product));
    setOpenProduct(false);
  };
  return (
    <Stack vertical>
      <div>
        <p style={{ width: "60%" }}>
          Choose which product will be offered in the upsell.
        </p>
      </div>
      <div>
        {selectedProduct ? (
          <ProductBox>
            <ProductImage src={selectedProduct?.images[0]?.originalSrc} alt="" />
            {selectedProduct.title}
            <span onClick={() => (setSelectedProduct(), setOpenProduct(true))}>
              Change
            </span>
          </ProductBox>
        ) : (
          <Button primary onClick={() => setOpenProduct(true)}>
            Select product
          </Button>
        )}
      </div>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={openProduct}
        onSelection={(resources) => handleSelectProduct(resources)}
        onCancel={() => setOpenProduct(false)}
        selectMultiple={false}
      />
    </Stack>
  );
}

export default SelectUpsellProduct;
