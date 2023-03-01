import { Card, TextField } from "@shopify/polaris";
import React from "react";

function Name({ handleChange, newUpsell }) {
  return (
    <Card title="Upsell name" sectioned>
      <p style={{ marginBottom: "10px" }}>
        For your own internal reference. Only you can see it.
      </p>
      <TextField
        placeholder="Additional Product"
        value={newUpsell.name}
        onChange={handleChange("name")}
        autoComplete="off"
      />
    </Card>
  );
}

export default Name;
