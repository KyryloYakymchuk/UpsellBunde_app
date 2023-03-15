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
  let colorSettings = [
    {
      label: "Button color",
      change: "background",
    },
    {
      label: "Text color",
      change: "text",
    },
    {
      label: "Hover - background",
      change: "hoverBackground",
    },
    {
      label: "Hover - text color",
      change: "hoverText",
    },
  ];
  return (
    <div>
      {colorSettings.map(({ label, change }) => (
        <React.Fragment key={label}>
          <label>{label}</label>
          <Spasing />
          <div style={{ position: "relative" }}>
            <Stack>
              <ColorBox
                onClick={handleSelectColorBox(change, index)}
                color={color[change]}
              />
              <TextField
                onChange={(e) => handleChangeColor(change, index, "#" + e)}
                value={color[change].replace("#", "")}
                prefix="#"
              />
            </Stack>
            <Spasing />

            <div style={{ position: "absolute", zIndex: "21" }}>
              {showColorPicker.state &&
                showColorPicker.index === index &&
                showColorPicker.flag === change && (
                  <SketchPicker
                    onChangeComplete={(e) =>
                      handleChangeColor(change, index, e.hex)
                    }
                    color={color}
                  />
                )}
            </div>
          </div>
        </React.Fragment>
      ))}
      <Checkbox
        label="Enable border"
        checked={color.border}
        onChange={(e) => handleChangeColor("border", index, e)}
      />
      <Spasing />
      {color.border && (
        <div>
          <label>Border color</label>
          <Spasing />

          <div style={{ position: "relative" }}>
            <Stack>
              <ColorBox
                onClick={handleSelectColorBox("border", index)}
                color={color.borderColor}
              />
              <TextField
                onChange={(e) =>
                  handleChangeColor("borderColor", index, "#" + e)
                }
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
          <label>Hover - Border color</label>
          <Spasing />

          <div style={{ position: "relative" }}>
            <Stack>
              <ColorBox
                onClick={handleSelectColorBox("hoverBorder", index)}
                color={color.hoverBorder}
              />
              <TextField
                onChange={(e) =>
                  handleChangeColor("hoverBorder", index, "#" + e)
                }
                value={color.hoverBorder.replace("#", "")}
                prefix="#"
              />
            </Stack>
            <Spasing />
            <div style={{ position: "absolute", zIndex: "21" }}>
              {showColorPicker.state &&
                showColorPicker.index === index &&
                showColorPicker.flag === "hoverBorder" && (
                  <SketchPicker
                    onChangeComplete={(e) =>
                      handleChangeColor("hoverBorder", index, e.hex)
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
