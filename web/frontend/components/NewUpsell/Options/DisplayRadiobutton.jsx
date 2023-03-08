import { RadioButton, Stack } from "@shopify/polaris";
import React from "react";

function DisplayRadiobutton({
  handleChange,
  newUpsell,
  radiobutton_data,
  selectedProduct,
}) {
  return (
      <Stack>
        {radiobutton_data.map(({ label, id, name }) => (
          <RadioButton
            key={id}
            label={label}
            checked={newUpsell === id}
            id={id}
            disabled={!selectedProduct}
            name={name}
            onChange={handleChange(name, id)}
          />
        ))}
      </Stack>
  );
}

export default DisplayRadiobutton;
