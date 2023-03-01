import { Checkbox, Stack, TextField } from "@shopify/polaris";
import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import { Spasing } from "../../style";

function ColorSelect({
  color,
  handleChangeColor,
  index,
  showColorPicker,
  handleSelectColorBox,
}) {
  return (
    <div>
      <label>Button color</label>
      <Spasing />
      <div style={{ position: "relative" }}>
        <Stack>
          <ColorBox
            onClick={handleSelectColorBox("background", index)}
            color={color.background}
          />
          <TextField
            disabled
            value={color.background.replace("#", "")}
            prefix="#"
          />
        </Stack>
        <Spasing />

        <div style={{ position: "absolute", zIndex: "21" }}>
          {showColorPicker.state &&
            showColorPicker.index === index &&
            showColorPicker.flag === "background" && (
              <SketchPicker
                onChangeComplete={(e) =>
                  handleChangeColor("background", index, e.hex)
                }
                color={color}
              />
            )}
        </div>
      </div>
      <label>Text color</label>
      <Spasing />
      <div style={{ position: "relative" }}>
        <Stack>
          <ColorBox
            onClick={handleSelectColorBox("text", index)}
            color={color.text}
          />
          <TextField disabled value={color.text.replace("#", "")} prefix="#" />
        </Stack>
        <Spasing />
        <div style={{ position: "absolute", zIndex: "21" }}>
          {showColorPicker.state &&
            showColorPicker.index === index &&
            showColorPicker.flag === "text" && (
              <SketchPicker
                onChangeComplete={(e) =>
                  handleChangeColor("text", index, e.hex)
                }
                color={color}
              />
            )}{" "}
        </div>
      </div>
      <Spasing />
      <Checkbox
        label="Enable border"
        checked={color.border}
        onChange={(e) => handleChangeColor("border", index, e)}
      />
      <Spasing />
      {color.border && (
        <div>
          <label>Eneble border</label>
          <Spasing />

          <div style={{ position: "relative" }}>
            <Stack>
              <ColorBox
                onClick={handleSelectColorBox("border", index)}
                color={color.borderColor}
              />
              <TextField
                disabled
                value={color.borderColor.replace("#", "")}
                prefix="#"
              />
            </Stack>
            <Spasing />

            <TextField
              label="Width"
              type="number"
              value={color.borderWidth}
              onChange={(e) => handleChangeColor("borderWidth", index, e)}
              autoComplete="off"
            />
            <Spasing />
            <div style={{ position: "absolute", zIndex: "21" }}>
              {showColorPicker.state &&
                showColorPicker.index === index &&
                showColorPicker.flag === "border" && (
                  <SketchPicker
                    onChangeComplete={(e) =>
                      handleChangeColor("borderColor", index, e.hex)
                    }
                    color={color}
                  />
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorSelect;

const ColorBox = styled.div`
  cursor: pointer;
  width: 36px;
  height: 100%;
  background-color: ${({ color }) => `${color}`};
  border-radius: 5px;
  transition: 0.3s;
  border: 1px solid #babfc4;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
