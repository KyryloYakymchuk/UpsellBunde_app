import { Checkbox, Select, Stack, TextField } from "@shopify/polaris";
import React from "react";
import { discount_type } from "../../../utils/constants/newUpsell";

function ApplyDiscount({ handleChange, newUpsell }) {
  return (
    <Stack vertical>
      <div>
        <Stack alignment="trailing">
          <TextField
            label="Discount"
            type="number"
            disabled={!newUpsell.discount_available}
            value={newUpsell.discount_value}
            onChange={handleChange("discount_value")}
            autoComplete="off"
          />
          <Select
            options={discount_type}
            onChange={handleChange("discount_type")}
            value={newUpsell.discount_type}
          />
        </Stack>
      </div>

      <div>
        <p style={{ width: "60%" }}>Discounts are applied in the checkout.</p>
      </div>
      <div>
        <Checkbox
          label="Apply discount"
          checked={newUpsell.discount_available}
          onChange={handleChange("discount_available")}
        />
      </div>
    </Stack>
  );
}

export default ApplyDiscount;
