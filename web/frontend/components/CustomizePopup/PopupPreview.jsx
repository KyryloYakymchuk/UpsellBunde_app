import { Card, Icon, Select } from "@shopify/polaris";
import { CircleTickMajor } from "@shopify/polaris-icons";
import React from "react";
import styled from "styled-components";
import { Spasing } from "../style";
import productIcon from "../../assets/product_icon.png";

function PopupPreview({ settings, color, customTextWording }) {
  return (
    <Card title="Pop-up preview">
      <Spasing margin={"15px"} />
      <PreviewBox>
        <PopupContent>
          <PopupTitle>{customTextWording[0].value}</PopupTitle>
          {settings.showSubtitle && (
            <PopupSubTitile>{customTextWording[1].value}</PopupSubTitile>
          )}
          <Spasing margin={"25px"} />
          <PopupProduct backgroundMain={true}>
            <div style={{ position: "relative" }}>
              <ProductImage
                imageSize={
                  (settings.imageSize === "imageSizeL" && "50px") ||
                  (settings.imageSize === "imageSizeM" && "50px") ||
                  (settings.imageSize === "imageSizeS" && "40px")
                }
                src={productIcon}
                alt="product image"
              />
              <CheckedImage>
                <Icon source={CircleTickMajor} color="primary" />
              </CheckedImage>
            </div>
            <ProductInfo>
              <strong>Product name</strong>
              <p>39,99 $</p>
            </ProductInfo>
          </PopupProduct>
          <UpsellItems>
            <PopupProduct>
              <ProductImage
                imageSize={
                  (settings.imageSize === "imageSizeL" && "70px") ||
                  (settings.imageSize === "imageSizeM" && "50px") ||
                  (settings.imageSize === "imageSizeS" && "40px")
                }
                src={productIcon}
                alt="product image"
              />
              <ProductInfo>
                <strong>Product name</strong>
                <p>39,99 $</p>
                <p>Upgrade your life and become digital</p>
              </ProductInfo>
              <CustomizeButton
                buttonStyles={`background-color:${color[0].background}; color:${
                  color[0].text
                }; ${
                  color[0].border
                    ? `border: ${color[0].borderWidth}px solid ${color[0].borderColor}`
                    : `border:none`
                } `}
              >
                {customTextWording[4].value}
              </CustomizeButton>
            </PopupProduct>
            <PopupProduct>
              <ProductImage
                imageSize={
                  (settings.imageSize === "imageSizeL" && "70px") ||
                  (settings.imageSize === "imageSizeM" && "50px") ||
                  (settings.imageSize === "imageSizeS" && "40px")
                }
                src={productIcon}
                alt="product image"
              />
              <ProductInfo>
                <strong>Product name</strong>
                <p>39,99 $</p>
                <p>You will need them, sooner or later</p>
                <Select
                  options={[{ label: "Product variant", value: "today" }]}
                  value={"Today"}
                />
              </ProductInfo>
              <CustomizeButton
                buttonStyles={`background-color:${color[0].background}; color:${
                  color[0].text
                }; ${
                  color[0].border
                    ? `border: ${color[0].borderWidth}px solid ${color[0].borderColor}`
                    : `border:none`
                } `}
              >
                {customTextWording[2].value}
              </CustomizeButton>
            </PopupProduct>
            <PopupProduct>
              <div style={{ position: "relative" }}>
                <ProductImage
                  imageSize={
                    (settings.imageSize === "imageSizeL" && "70px") ||
                    (settings.imageSize === "imageSizeM" && "50px") ||
                    (settings.imageSize === "imageSizeS" && "40px")
                  }
                  src={productIcon}
                  alt="product image"
                />{" "}
                <CheckedImage>
                  <Icon source={CircleTickMajor} color="primary" />
                </CheckedImage>
              </div>
              <ProductInfo>
                <strong>Product name</strong>
                <p>39,99 $</p>
                <p>Upgrade your life and become digital</p>
              </ProductInfo>
              <CustomizeButton
                disabled
                buttonStyles={`background-color:${color[0].background}; color:${
                  color[0].text
                }; ${
                  color[0].border
                    ? `border: ${color[0].borderWidth}px solid ${color[0].borderColor}`
                    : `border:none`
                } `}
              >
                {customTextWording[3].value}
              </CustomizeButton>
            </PopupProduct>
          </UpsellItems>
          <Spasing />
          <FooterContainer>
            <ButtonGroup>
              {settings.showNothx && (
                <CustomizeButton
                  buttonStyles={`background-color:${
                    color[2].background
                  }; color:${color[2].text}; ${
                    color[2].border
                      ? `border: ${color[2].borderWidth}px solid ${color[2].borderColor}`
                      : `border:none`
                  } `}
                >
                  {customTextWording[7].value}
                </CustomizeButton>
              )}
              <CustomizeButton
                buttonStyles={`background-color:${color[1].background}; color:${
                  color[1].text
                }; ${
                  color[1].border
                    ? `border: ${color[1].borderWidth}px solid ${color[1].borderColor}`
                    : `border:none`
                } `}
              >
                {customTextWording[6].value}
              </CustomizeButton>
            </ButtonGroup>
          </FooterContainer>
        </PopupContent>
      </PreviewBox>
    </Card>
  );
}

export default PopupPreview;
const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding: 30px 30px 0;
  button {
    margin: 0;
  }
`;
const FooterContainer = styled.div`
  border-top: 1px solid #ededed;
`;
const UpsellItems = styled.div`
  margin: auto;
  width: 80%;
`;
const CustomizeButton = styled.button`
  ${({ buttonStyles }) => buttonStyles};
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  margin-left: auto;
  cursor: pointer;
  &:disabled {
    filter: opacity(0.5);
  }
`;
const ProductImage = styled.img`
  width: ${({ imageSize }) => `${imageSize}`};
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const PopupProduct = styled.div`
  background: ${({ backgroundMain }) =>
    backgroundMain ? "#ededed;" : "white;"};
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 20px;
`;

const CheckedImage = styled.div`
  span {
    position: absolute;
    width: 20px;
    top: -12px;
    right: -10px;
    background: white;
    border-radius: 50%;
    margin: 0;
  }
`;
const PreviewBox = styled.div`
  background-color: #4a4a4a;
  padding: 30px 0;
`;

const PopupContent = styled.div`
  width: 80%;
  margin: auto;
  padding: 30px 0;
  background-color: white;
`;

const PopupTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  margin-bottom: 6px;
`;
const PopupSubTitile = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #202223;
  text-align: center;
`;
