export const headings = [
  { title: "Upsell Name" },
  { title: "Status" },
  { title: "Triggered on" },
  { title: "Displays for", hidden: false },
  { title: "Updated", hidden: true },
];

export const sortOptions = [
  { label: "All upsells", value: "all" },
  { label: "Active", value: "Active" },
  { label: "Draft", value: "Draft" },
  { label: "Display for all product", value: "all_products" },
  { label: "Display for specific ", value: "Product" },
];

export const resourceName = {
  singular: "upsell",
  plural: "upsells",
};

export const tabs = [
  {
    id: 'all-customers-1',
    content: 'All',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content-1',
  },
  // {
  //   id: 'accepts-marketing-1',
  //   content: 'Aсtive',
  //   panelID: 'accepts-marketing-content-1',
  // },
  // {
  //   id: 'repeat-customers-1',
  //   content: 'Drafts',
  //   panelID: 'repeat-customers-content-1',
  // },
];