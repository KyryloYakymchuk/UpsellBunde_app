import { Card, Stack } from "@shopify/polaris";
import React from "react";
import { useState } from "react";
import ColorSelect from "./Options/ColorSelect";

function Colors({ color, setColor }) {
  const [showColorPicker, setShowColorPicker] = useState({
    state: false,
    flag: "",
    index: 0,
  });
  const handleChangeColor = (flag, index, e) => {
    setColor((state) =>
      state.map((color, i) => {
        if (i === index) {
          return { ...color, [flag]: e };
        }
        return color;
      })
    );
  };
  const handleSelectColorBox = (flag, index) => () => {
    setShowColorPicker({
      state:
        index === showColorPicker.index && flag !== showColorPicker.flag
          ? true
          : !showColorPicker.state,
      flag,
      index,
    });
  };
  return (
    <Card title="Colors" sectioned>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {color.map((colorData, index) => (
          <Stack key={colorData.title} vertical>
            <strong>{colorData.title}</strong>
            <ColorSelect
              color={colorData}
              handleChangeColor={handleChangeColor}
              index={index}
              showColorPicker={showColorPicker}
              setShowColorPicker={setShowColorPicker}
              handleSelectColorBox={handleSelectColorBox}
            />
          </Stack>
        ))}
      </div>
    </Card>
  );
}

export default Colors;
