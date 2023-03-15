import { Card, Checkbox, Select, Stack, TextField } from "@shopify/polaris";
import React from "react";
import {
  btnCloseOptions,
  btnContinueOptions,
  btnNothx,
  imageSizeOptions,
  mustMutch_radiobutton,
} from "../../utils/constants/customizePopup";
import DisplayRadiobutton from "../NewUpsell/Options/DisplayRadiobutton";
import { Spasing } from "../style";

function Settings({ settings, setSettings }) {
  const handleChange = (flag, specific) => (e) => {
    setSettings((state) => ({ ...state, [flag]: specific || e }));
  };
  return (
    <Card title="Settings" sectioned>
      <Stack>
        <Stack vertical>
          <strong>Design</strong>
          <Select
            label="Upsell image size"
            options={imageSizeOptions}
            onChange={handleChange("imageSize")}
            value={settings.imageSize}
          />
          <Spasing margin={"0 0 20px 0"} />
          <strong>Button Actions</strong>

          <Select
            label="Button action — Continue"
            options={btnContinueOptions}
            onChange={handleChange("btnContinue")}
            value={settings.btnContinue}
          />
          <Select
            label="Button action — Close"
            options={btnCloseOptions}
            onChange={handleChange("btnClose")}
            value={settings.btnClose}
          />
          <Select
            label="Button action — No, thank you"
            options={btnNothx}
            onChange={handleChange("btnNothx")}
            value={settings.btnNothx}
          />
        </Stack>
        <Stack vertical>
          <strong>Extra Elements</strong>
          <Checkbox
            label="Show subtitle"
            checked={settings.showSubtitle}
            onChange={handleChange("showSubtitle")}
          />{" "}
          <Checkbox
            label="Show “No, thank you” button"
            checked={settings.showNothx}
            onChange={handleChange("showNothx")}
          />
          <Spasing margin={"0 0 20px 0"} />
          <strong>Pop-Up Views</strong>
          <p>Set the maximum number of pop-up views per browsing session.</p>
          <Stack>
            <DisplayRadiobutton
              handleChange={handleChange}
              newUpsell={settings.popupViews}
              radiobutton_data={mustMutch_radiobutton}
              selectedProduct={true}
            />
          </Stack>
          <Spasing />
          {settings.popupViews === "limited" && (
            <TextField
              onChange={handleChange("popupViewLimitCount")}
              type="number"
              value={settings.popupViewLimitCount}
            />
          )}
        </Stack>
      </Stack>
    </Card>
  );
}

export default Settings;
