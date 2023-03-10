import React from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Filters, Select } from "@shopify/polaris";

import { sortOptions } from "../../utils/constants/list";
import { useEffect } from "react";

function ListFilters({ getListData, upsellFromDb, setUpsellFromDb }) {
  const [sortValue, setSortValue] = useState("all");
  const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
  const handleSortChange = useCallback((value) => setSortValue(value), []);
  const handleClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [handleQueryValueRemove]);
  console.log(sortValue);
  const [queryValue, setQueryValue] = useState(null);
  useEffect(() => {
    if (queryValue) {
      if (!upsellFromDb.length) {
        getListData();
      }
      const filteredUpsells = upsellFromDb.filter(({ upsellSettings }) => {
        for (const key in upsellSettings) {
          if (
            upsellSettings.hasOwnProperty(key) &&
            String(upsellSettings[key])
              .toLowerCase()
              .includes(queryValue.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });
      setUpsellFromDb(filteredUpsells);
    } else {
      getListData();
    }
  }, [queryValue]);

  useEffect(() => {
    // getListData();

    console.log(upsellFromDb);

    if (!upsellFromDb.length) {
      getListData();
    }
    if (sortValue === "all") {
      getListData();
    } else {
      const sorderUpsells = upsellFromDb.filter(({ upsellSettings }) => {
        return (
          upsellSettings.status === sortValue ||
          upsellSettings.display_for === sortValue
        );
      });
      setUpsellFromDb(sorderUpsells);
    }
  }, [sortValue, upsellFromDb.length]);

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
