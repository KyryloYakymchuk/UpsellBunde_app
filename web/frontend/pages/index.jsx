import {
  Button,
  Card,
  Heading,
  SkeletonBodyText,
  SkeletonThumbnail,
} from "@shopify/polaris";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function  HomePage() {
  const navigate = useNavigate();
  const RedirectToDashboard = () => {
    navigate("/dashboard", { replace: true, reloadDocument: true });
  };
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      <Card sectioned>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", margin: "10px" }}>
            <Heading>Product Upsell</Heading>
            <div
              style={{ display: "flex", marginTop: "30px", flexWrap: "wrap" }}
            >
              <p style={{ marginRight: "10px", marginBottom: "10px" }}>
                Offer existing products from your store and define upsells or
                cross-sells manually.
              </p>
              <Button onClick={RedirectToDashboard} primary>
                Select
              </Button>
            </div>
          </div>
          <div style={{ width: "50%", margin: "10px" }}>
            <Heading>Preview</Heading>
            <div style={{ display: "flex", marginTop: "30px" }}>
              <SkeletonThumbnail size="medium" />
              <div style={{ width: "100%", margin: "10px" }}>
                <SkeletonBodyText lines={2} />
              </div>
            </div>
            <div
              style={{ display: "flex", marginTop: "27px", marginLeft: "67px" }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  backgroundColor: "rgba(225, 225, 225, 0.2)",
                  marginRight: "10px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "12px",
                }}
              >
                <strong>Product name</strong>
                <span>39,99 грн</span>
                <div>Upgrade your life and become digital</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

