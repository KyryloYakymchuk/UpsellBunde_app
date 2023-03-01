import { Card, Stack, TextField } from "@shopify/polaris";
import React from "react";
import { Spasing } from "../style";

function CustomWording({ customTextWording, setCustomTextWording }) {
  const handleChangeTextFields = (index, e) => {
    setCustomTextWording((state) =>
      state.map((value, i) => {
        if (i === index) {
          return { ...value, ["value"]: e };
        }
        return value;
      })
    );
  };
  return (
    <Card title="Custom wording" sectioned>
      <p>Customize or translate the wording of the pop-up window.</p>
      <Spasing margin={"0 0 20px 0"} />
      <strong>Pop-Up</strong>
      <Spasing />

      <Stack distribution="fillEvenly">
        {customTextWording.map((field, index) => (
          <React.Fragment key={field.label}>
            <TextField
              label={field.label}
              onChange={(e) => handleChangeTextFields(index, e)}
              helpText={field.helpText}
              value={field.value}
              showCharacterCount
              maxLength={field.maxLength}
              multiline={field.multiline}
            />
          </React.Fragment>
        ))}
      </Stack>
    </Card>
  );
}

export default CustomWording;
