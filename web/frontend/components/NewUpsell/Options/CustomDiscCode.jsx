import { Stack, TextField } from "@shopify/polaris";
import React from "react";

function CustomDiscCode({ handleChange, newUpsell }) {
  return (
    <Stack vertical>
      <div style={{ margin: "44px 0 0 5px" }}>
        <TextField
          label="Custom discount code (optional)"
          disabled={!newUpsell.discount_available}
          value={newUpsell.discount_code}
          placeholder="Text"
          onChange={handleChange("discount_code")}
          autoComplete="off"
          maxLength={50}
          showCharacterCount
        />
      </div>
      <div>
        <p style={{ width: "60%", marginLeft: "5px" }}>
          Please make sure it exists in your Discounts page.
        </p>
      </div>
    </Stack>
  );
}

export default CustomDiscCode;
