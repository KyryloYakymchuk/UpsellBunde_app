import { Stack, TextField } from "@shopify/polaris";
import React from "react";

function Description({ handleChange, newUpsell }) {
  return (
    <Stack vertical>
      <div>
        <TextField
          label="Description"
          placeholder="Text"
          value={newUpsell.description}
          onChange={handleChange("description")}
          autoComplete="off"
          maxLength={55}
          showCharacterCount
        />
      </div>
      <div>
        <p style={{ width: "60%" }}>
          Describe your offer to motivate customers to accept it.
        </p>
      </div>
    </Stack>
  );
}

export default Description;
