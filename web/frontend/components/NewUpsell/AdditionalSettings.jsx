import { Card, Checkbox, Select, Stack } from "@shopify/polaris";
import React from "react";
import { upsell_position } from "../../utils/constants/newUpsell";

function AdditionalSettings({ handleChange, newUpsell }) {
  return (
    <Card sectioned title="Additional settings">
      <Select
        label="Upsell position"
        options={upsell_position}
        onChange={handleChange("upsell_position")}
        value={newUpsell.upsell_position}
        helpText="Upsell with the lowest number will be displayed as the first one."
      />
      <br />
      <Stack vertical>
        <Checkbox
          label="True upsell (upgrade): Remove parent product when upsell product is added"
          checked={newUpsell.remove_parent_when_ups_add}
          onChange={handleChange("remove_parent_when_ups_add")}
        />{" "}
        {/* <Checkbox
          label="Remove upsell product when parent product is removed"
          checked={newUpsell.remove_ups_when_parent_removed}
          onChange={handleChange("remove_ups_when_parent_removed")}
        />{" "} */}
        <Checkbox
          label="Don't display if the product is already in the cart"
          checked={newUpsell.dont_display_if_product_is_alredy}
          onChange={handleChange("dont_display_if_product_is_alredy")}
        />
        <Checkbox
          label="Display custom note field"
          checked={newUpsell.display_custom_note}
          onChange={handleChange("display_custom_note")}
        />
      </Stack>
      <br />
      <Stack vertical>
        <strong>Quantuty options</strong>
        {/* <Checkbox
          label="Match parent product's quantity"
          checked={newUpsell.match_product_qty}
          onChange={handleChange("match_product_qty")}
        />{" "} */}
        <Checkbox
          label="Enable quantity selector on the pop-up"
          checked={newUpsell.qty_selector_on_popup}
          onChange={handleChange("qty_selector_on_popup")}
        />{" "}
      </Stack>
      <br />
    </Card>
  );
}

export default AdditionalSettings;
