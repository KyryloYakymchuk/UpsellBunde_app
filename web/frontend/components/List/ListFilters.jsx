import React from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Filters, Select } from "@shopify/polaris";

import { sortOptions } from "../../utils/constants/list";

function ListFilters() {
  const [queryValue, setQueryValue] = useState(null);
  const [sortValue, setSortValue] = useState("today");
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleSortChange = useCallback((value) => setSortValue(value), []);
  const handleClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [handleQueryValueRemove]);



  return (
    <div style={{ padding: "16px", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Filters
          queryValue={queryValue}
          filters={[]}
          onQueryChange={setQueryValue}
          onQueryClear={handleQueryValueRemove}
          onClearAll={handleClearAll}
        />
      </div>
      <div style={{ paddingLeft: "0.25rem" }}>
        <Select
          labelInline
          label="Sort by"
          options={sortOptions}
          value={sortValue}
          onChange={handleSortChange}
        />
      </div>
    </div>
  );
}

export default ListFilters;
