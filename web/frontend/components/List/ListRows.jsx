import { Badge, Button, Icon, IndexTable } from "@shopify/polaris";
import { EditMajor, DeleteMajor } from "@shopify/polaris-icons";

import React from "react";

function ListRows({ handleEdit, handleDelete, data, selectedResources }) {
  return data?.map(({ upsellSettings, id, selectedProductObj }, index) => (
    <IndexTable.Row
      id={id}
      key={index}
      selected={selectedResources.includes(id)}
      position={index}
    >
      <IndexTable.Cell>
        <div variant="bodyMd" fontWeight="bold" as="span">
          {upsellSettings?.name}
        </div>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Badge
          status={upsellSettings?.status === "Active" ? "success" : "info"}
        >
          {upsellSettings?.status}
        </Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>Add to cart</IndexTable.Cell>
      <IndexTable.Cell>
        {upsellSettings?.display_for.replace("_", " ")} -{" "}
        {selectedProductObj.handle}{" "}
        {selectedProductObj.specificProduct[0].handle &&
          "- " + selectedProductObj.specificProduct[0].handle}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Button onClick={() => handleEdit(id)}>
          <Icon source={EditMajor} color="base" />
        </Button>

        <Button onClick={() => handleDelete(id)}>
          <Icon source={DeleteMajor} color="base" />
        </Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));
}

export default ListRows;
