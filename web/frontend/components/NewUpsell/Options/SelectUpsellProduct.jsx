import { ResourcePicker } from "@shopify/app-bridge-react";
import { Button, Stack } from "@shopify/polaris";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ProductBox, ProductImage } from "../../style";

function SelectUpsellProduct({
  selectedProduct,
  setSelectedProduct,
  handleChange,
  newUpsell,
}) {
  const [openProduct, setOpenProduct] = useState(false);

  const { editId } = useSelector((state) => state.upsellReducer);

  const handleSelectProduct = (resources) => {
    resources.selection.map((product) => {
      setSelectedProduct(product);
      if (newUpsell.name.includes('Upsell')) {
        handleChange("name", 'Upsell' + " - " + product.handle)();
      }
    });
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
            <ProductImage
              src={
                selectedProduct?.images[0]?.originalSrc ||
                selectedProduct.images
              }
              alt=""
            />
            {selectedProduct.title}
            {!editId && (
              <span onClick={() => setOpenProduct(true)}>Change</span>
            )}
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
