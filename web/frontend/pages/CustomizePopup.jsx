import { Page } from "@shopify/polaris";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Settings from "../components/CustomizePopup/Settings";
import Colors from "../components/CustomizePopup/Colors";
import CustomWording from "../components/CustomizePopup/CustomWording";
import PopupPreview from "../components/CustomizePopup/PopupPreview";
import { Spasing } from "../components/style";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../index";

import { doc, getDoc, setDoc } from "firebase/firestore";
import styled from "styled-components";

export default function CustomizePopup() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    imageSize: "imageSizeL",
    btnContinue: "cart",
    btnClose: "page",
    btnNothx: "page",
    popupViews: "unlimited",
    showSubtitle: true,
    showNothx: true,
  });
  const [color, setColor] = useState([
    {
      title: "Add / Upgrade",
      background: "#008060",
      text: "#FFFFFF",
      border: false,
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
    {
      title: "Continue",
      background: "#008060",
      text: "#FFFFFF",
      border: false,
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
    {
      title: "No, Thank You",
      background: "#008060",
      text: "#FFFFFF",
      border: false,
      borderColor: "#FFFFFF",
      borderWidth: 1,
    },
  ]);
  const [customTextWording, setCustomTextWording] = useState([
    {
      label: "Title",
      value: "Get extras for your product",
      helpText: "Title that appears on the top of the pop-up.",
      change: "popupTitleText",
      multiline: 4,
      maxLength: 100,
      showCharacterCount: true,
    },
    {
      label: "Subtitle",
      value: "The offer is valid for a limit time only!",
      helpText: "Subtitle that appears below the title on the pop-up.",
      change: "popupSubTitleText",
      multiline: 4,
      maxLength: 100,
    },
    {
      label: "Button — Add",
      value: "Add",
      helpText: "",
      change: "popupAddText",
      multiline: 0,
      maxLength: 20,
    },
    {
      label: "Button — Added",
      value: "Added",
      helpText: "Appears when upsell product is added to cart.",
      change: "popupAddedText",
      multiline: 0,
      maxLength: 20,
    },
    {
      label: "Button — Upgrade",
      value: "Upgrade",
      helpText: "",
      change: "popupUpgradeText",
      multiline: 0,
      maxLength: 30,
    },
    {
      label: "Button — Upgraded",
      value: "Upgraded",
      helpText: "Appears when upsell product is added to cart.",
      change: "popupUpgradedText",
      multiline: 0,
      maxLength: 30,
    },
    {
      label: "Button — Continue",
      value: "Continue",
      helpText: "Main button on the pop-up.",
      change: "popupContinueText",
      multiline: 0,
      maxLength: 30,
    },
    {
      label: "Button — No, thank you",
      value: "No, Thank You",
      helpText: "Secondary button on the pop-up.",
      change: "popupNoThxText",
      multiline: 0,
      maxLength: 30,
    },
    {
      label: "Button — Back",
      value: "Back",
      helpText: "Back button displayed on the upsell detail page.",
      change: "popupBackText",
      multiline: 0,
      maxLength: 50,
    },
  ]);

  const [upsellFromDb, setUpsellFromDb] = useState([]);

  const [disabledSave, setDisabledSave] = useState(false);

  const { db } = useContext(Context);
  const docRef = doc(db, window.location.hostname, "upsellCustomization");
  const goBackClick = () => {
    navigate("/dashboard", { replace: true, reloadDocument: true });
  };

  const saveChanges = () => {
    setDoc(doc(db, window.location.hostname, "upsellCustomization"), {
      settings,
      color,
      customTextWording,
    });
    window.location.reload();
  };

  useEffect(async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.data().settings) {
      setUpsellFromDb(docSnap.data());
      setSettings(docSnap.data()?.settings);
      setColor(docSnap.data()?.color);
      setCustomTextWording(docSnap.data()?.customTextWording);
    }
  }, []);

  useEffect(() => {
    if (
      JSON.stringify(upsellFromDb?.settings) !== JSON.stringify(settings) ||
      JSON.stringify(upsellFromDb?.color) !== JSON.stringify(color) ||
      JSON.stringify(upsellFromDb?.customTextWording) !==
        JSON.stringify(customTextWording)
    ) {
      setDisabledSave(false);
    } else {
      setDisabledSave(true);
    }
  }, [settings, color, customTextWording]);

  return (
    <Page
      title="Customize pop-up"
      primaryAction={{
        content: "Save",
        onAction: saveChanges,
        disabled: disabledSave,
      }}
      secondaryActions={[{ content: "Cancel", onAction: goBackClick }]}
      breadcrumbs={[{ onAction: goBackClick }]}
      compactTitle
      fullWidth
    >
      <CustomizePopupContainer>
        <PopupSettingsBox>
          <Settings settings={settings} setSettings={setSettings} />
          <Colors color={color} setColor={setColor} />
          <CustomWording
            customTextWording={customTextWording}
            setCustomTextWording={setCustomTextWording}
          />
        </PopupSettingsBox>
        <Spasing margin={"10px"} />
        <PreviewBox>
          <PopupPreview
            settings={settings}
            color={color}
            customTextWording={customTextWording}
          />
        </PreviewBox>
      </CustomizePopupContainer>
    </Page>
  );
}



const CustomizePopupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media(max-width:1440px){
    flex-direction: column-reverse;
    align-items: center;
  }
`

const PopupSettingsBox = styled.div`
max-width: 675px;
`
const PreviewBox = styled.div`
    max-width: 675px;
    width: 100%;
  position: sticky;
  top: 30px;
  @media(max-width:1440px){
    position: static;
  }

`