export const discount_type = [
  { label: "%", value: "parcent" },
  { label: "$", value: "fixed" },
];

export const display_radiobutton = [
  {
    label: "All products",
    id: "all_products",
    name: "display_for",
  },
  {
    label: "Specific products",
    id: "Product",
    name: "display_for",
  },
  // {
  //   label: "Specific collections",
  //   id: "Collection",
  //   name: "display_for",
  // },
];
export const mustMutch_radiobutton = [
  {
    label: "all conditions",
    id: "all_conditions",
    name: "mustMutch_condition",
  },
  {
    label: "any condition",
    id: "any_condition",
    name: "mustMutch_condition",
  },
];

export const conditions_options =[
  [
    { label: "Product title", value: "product_title" },
    { label: "Product type", value: "product_type" },
    { label: "Product vendor", value: "product_vendor" },
    { label: "Product price", value: "product_price" },
    { label: "Product tag", value: "product_tag" },
    { label: "Collection title", value: "collection_title" },
    { label: "Weight", value: "weight" },
    { label: "Inventory stock", value: "inventory_stock" },
    { label: "Variant's title", value: "variant's_title" },
  ],
  [
    { label: "is equal to", value: "equal_to", disabled: false },
    { label: "is not equal to", value: "not_equal_to", disabled: false },
    { label: "is greater than", value: "greater_than", disabled: false },
    { label: "is less than", value: "less_than", disabled: false },
    { label: "starts with", value: "starts_with", disabled: false },
    { label: "ends with", value: "ends_with", disabled: false },
    { label: "contains", value: "contains", disabled: false },
    { label: "does not contain", value: "not_contain", disabled: false },
    { label: "is not empty", value: "not_empty", disabled: false },
    { label: "is empty", value: "empty", disabled: false },
  ],
];

export const upsell_position = [
  { label: "1st", value: "1" },
  { label: "2nd", value: "2" },
  { label: "3rd", value: "3" },
  { label: "4th", value: "4" },
  { label: "5th", value: "5" },
  { label: "6th", value: "6" },
  { label: "7th", value: "7" },
  { label: "8th", value: "8" },
  { label: "9th", value: "9" },
  { label: "10th", value: "10" },
];
