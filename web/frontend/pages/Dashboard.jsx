import React from "react";
import { Page, Card } from "@shopify/polaris";

import List from "../components/List/List";
import ListTabs from "../components/List/ListTabs";
import { useNavigate } from "react-router-dom";
import { setEditId } from "../redux/actions/upsell";
import { useDispatch } from "react-redux";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createNewUpsell = () => {
    navigate("/newupsell", { replace: true, reloadDocument: true });
    dispatch(setEditId(""));
  };
  const customizePopup = () => {
    navigate("/customizePopup", { replace: true, reloadDocument: true });
  };
  return (
    <Page
      fullWidth={true}
      divider={true}
      title="Dashboard"
      compactTitle
      secondaryActions={[
        { content: "New upsell", onAction: createNewUpsell },
        { content: "Customize Popup", onAction: customizePopup },
      ]}
    >
      <Card title="Upsells overview">
        <ListTabs />
        <List />
      </Card>
    </Page>
  );
}
