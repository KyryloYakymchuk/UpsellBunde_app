import {
  Button,
  Checkbox,
  Icon,
  Select,
  Stack,
  TextField,
} from "@shopify/polaris";
import React, { useState } from "react";
import DisplayRadiobutton from "./DisplayRadiobutton";
import { DeleteMajor } from "@shopify/polaris-icons";
import {
  conditions_options,
  mustMutch_radiobutton,
} from "../../../utils/constants/newUpsell";

function AdditionalConditions({
  handleChange,
  newUpsell,
  conditions,
  setConditions,
}) {
  const handleSetConditions = (flag, index) => (e) => {
    const newArray = conditions.map((item, i) => {
      if (index === i) {
        return { ...item, [flag]: e };
      } else {
        return item;
      }
    });
    setConditions(newArray);
    disabledConditionValue();
  };
  const handleNewCondition = () => {
    setConditions((state) => [
      ...state,
      { first: "product_title", second: "equal_to", value: "" },
    ]);
  };
  const handleDeleteCondition = (index) => () => {
    const newArray = conditions.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    setConditions(newArray);
  };

  const findDisabledValue = (first) => {
    let disabledVal;
    switch (first) {
      case "product_title":
        disabledVal = [
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
        ];
        break;
      case "product_type":
        disabledVal = [
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
        ];
        break;
      case "product_vendor":
        disabledVal = [
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
        ];
        break;
      case "product_price":
        disabledVal = [
          false,
          false,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
        ];
        break;
      case "product_tag":
        disabledVal = [
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ];
        break;
      case "collection_title":
        disabledVal = [
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
        ];
        break;
      case "weight":
        disabledVal = [
          false,
          false,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
        ];
        break;
      case "inventory_stock":
        disabledVal = [
          false,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
        ];
        break;
      case "variant's_title":
        disabledVal = [
          false,
          false,
          true,
          true,
          false,
          false,
          false,
          false,
          true,
          true,
        ];
      default:
        break;
    }
    return disabledVal;
  };
  const disabledConditionValue = (first) => {
    for (let index = 0; index < findDisabledValue(first)?.length; index++) {
      conditions_options[1][index].disabled = findDisabledValue(first)[index];
    }
    return conditions_options[1];
  };

  return (
    <Stack vertical>
      <div>
        <Checkbox
          label="Additional conditions"
          checked={newUpsell.additional_conditions}
          onChange={handleChange("additional_conditions")}
        />
      </div>
      {newUpsell.additional_conditions && (
        <>
          <div>
            <p>Target your offer with greater precision.</p>
          </div>
          <br />
          <div>
            <Stack alignment="center">
              <span>Must match:</span>
              <DisplayRadiobutton
                handleChange={handleChange}
                newUpsell={newUpsell.mustMutch_condition}
                radiobutton_data={mustMutch_radiobutton}
              />
            </Stack>
            <br />
            {conditions.map(({ first, second, value }, index) => (
              <div key={index}>
                <Stack>
                  <Select
                    options={conditions_options[0]}
                    onChange={handleSetConditions("first", index)}
                    value={first}
                  />{" "}
                  <Select
                    options={disabledConditionValue(first)}
                    onChange={handleSetConditions("second", index)}
                    value={second}
                  />
                  <TextField
                    value={value}
                    onChange={handleSetConditions("value", index)}
                    autoComplete="off"
                  />
                  {conditions.length > 1 && (
                    <Button onClick={handleDeleteCondition(index)}>
                      <Icon source={DeleteMajor} color="base" />
                    </Button>
                  )}
                </Stack>
                <br />
              </div>
            ))}

            <br />
            <Button disabled onClick={handleNewCondition}>
              Add another condition
            </Button>
          </div>
        </>
      )}
    </Stack>
  );
}

export default AdditionalConditions;
