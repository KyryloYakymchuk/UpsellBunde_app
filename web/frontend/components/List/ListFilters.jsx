import React from "react";
import { useState } from "react";
import { useCallback } from "react";

import { Filters, Select } from "@shopify/polaris";

import { sortOptions } from "../../utils/constants/list";
import { useEffect } from "react";

function ListFilters({ getListData, upsellFromDb, setUpsellFromDb }) {
  const [sortValue, setSortValue] = useState("all");
  const [queryValue, setQueryValue] = useState(null);

  const handleQueryValueRemove = useCallback(() => clearSearchValue(), []);
  const handleSortChange = useCallback((value) => sortingUpsell(value), []);
  const handleClearAll = useCallback(() => {
    handleQueryValueRemove();
  }, [handleQueryValueRemove]);

  const clearSearchValue = () => {
    setQueryValue(null);
    getListData();
    setSortValue("all");
  };
  const sortingUpsell = (sort) => {
    setSortValue(sort);
    // if (!upsellFromDb.length) {
    //   getListData();
    // }
    if (sort === "all") {
      getListData();
    } else {
      const sorderUpsells = upsellFromDb.filter(({ upsellSettings }) => {
        return (
          upsellSettings.status === sort || upsellSettings.display_for === sort
        );
      });
      setUpsellFromDb(sorderUpsells);
    }
  };

  useEffect(() => {
    if (queryValue) {
      // if (!upsellFromDb.length) {
      //   getListData();
      //   searchUpsell();
      // }
      searchUpsell();
    } else {
      getListData();
    }
  }, [queryValue]);

  const searchUpsell = () => {
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
  };

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
