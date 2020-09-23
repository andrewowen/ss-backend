import { MdLocalPizza as icon } from "react-icons/md";
import { RuleType } from "./schemaTypes";

export default {
  // Computed Name
  name: "pizza",
  // Visible Title
  title: "Pizzas",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Pizza Name",
      type: "string",
      description: "Name of the pizza",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "price",
      title: "Pizza Price",
      type: "number",
      description: "Price of the pizza in cents",
      validation: (Rule: RuleType) => Rule.min(1000).max(50000),
    },
  ],
};
