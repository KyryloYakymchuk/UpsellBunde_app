import { Card, Icon, Select } from "@shopify/polaris";
import { CircleTickMajor } from "@shopify/polaris-icons";
import React from "react";
import styled from "styled-components";
import { Spasing } from "../style";
import productIcon from "../../assets/product_icon.png";

function PopupPreview({ settings, color, customTextWording }) {
  const findButtonsStyle = (index) => {
    let buttonStyles = `background-color:${color[index].background}; color:${
      color[index].text
    }; ${
      color[index].border
        ? `border: ${color[index].borderWidth}px solid ${color[index].borderColor}`
        : `border:none`
    }`;
    let hoverButtonStyles = `color:${color[index].hoverText};background-color:${
      color[index].hoverBackground
    };${
      color[index].border
        ? `border: ${color[index].borderWidth}px solid ${color[index].hoverBorder};`
        : "border:none;"
    }
  `;

    return { buttonStyles, hoverButtonStyles };
  };

  const findImageSize = () => {
    return (
      (settings.imageSize === "imageSizeL" && "70px") ||
      (settings.imageSize === "imageSizeM" && "50px") ||
      (settings.imageSize === "imageSizeS" && "40px")
    );
  };
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
                imageSize={findImageSize()}
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
                imageSize={findImageSize()}
                src={productIcon}
                alt="product image"
              />
              <ProductInfo>
                <strong>Product name</strong>
                <p>39,99 $</p>
                <p>Upgrade your life and become digital</p>
              </ProductInfo>
              <ProductButtonWrapper>
                <CustomizeButton
                  buttonStyles={findButtonsStyle(0).buttonStyles}
                  hoverButtonStyles={findButtonsStyle(0).hoverButtonStyles}
                >
                  {customTextWording[4].value}
                </CustomizeButton>
              </ProductButtonWrapper>
            </PopupProduct>
            <PopupProduct>
              <ProductImage
                imageSize={findImageSize()}
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
              <ProductButtonWrapper>
                <CustomizeButton
                  buttonStyles={findButtonsStyle(0).buttonStyles}
                  hoverButtonStyles={findButtonsStyle(0).hoverButtonStyles}
                >
                  {customTextWording[2].value}
                </CustomizeButton>
              </ProductButtonWrapper>
            </PopupProduct>
            <PopupProduct>
              <div style={{ position: "relative" }}>
                <ProductImage
                  imageSize={findImageSize()}
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
              <ProductButtonWrapper>
                <CustomizeButton
                  disabled
                  buttonStyles={`background-color:${
                    color[0].background
                  }; color:${color[0].text}; ${
                    color[0].border
                      ? `border: ${color[0].borderWidth}px solid ${color[0].borderColor}`
                      : `border:none`
                  } `}
                >
                  {customTextWording[3].value}
                </CustomizeButton>
              </ProductButtonWrapper>
            </PopupProduct>
          </UpsellItems>
          <Spasing />
          <FooterContainer>
            <ButtonGroup>
              {settings.showNothx && (
                <CustomizeButton
                  buttonStyles={findButtonsStyle(2).buttonStyles}
                  hoverButtonStyles={findButtonsStyle(2).hoverButtonStyles}
                >
                  {customTextWording[7].value}
                </CustomizeButton>
              )}
              <CustomizeButton
                buttonStyles={findButtonsStyle(1).buttonStyles}
                hoverButtonStyles={findButtonsStyle(1).hoverButtonStyles}
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

const ProductButtonWrapper = styled.div`
  max-width: 200px;
`;
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
  width: 100%;
  &:disabled {
    filter: opacity(0.5);
  }
  transition: 0.4s;
  &:hover {
    transition: 0.4s;
    transform: scale(1.1);
    ${({ hoverButtonStyles }) => hoverButtonStyles};
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
