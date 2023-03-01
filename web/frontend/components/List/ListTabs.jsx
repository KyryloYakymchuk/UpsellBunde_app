import React from 'react'



import {Card, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import { tabs } from '../../utils/constants/list';

function ListTabs() {

  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );



  return (
      <Tabs  tabs={tabs} selected={selected} onSelect={handleTabChange}>
      </Tabs>
  );
}

export default ListTabs