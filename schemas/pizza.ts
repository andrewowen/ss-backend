import { MdLocalPizza as icon } from "react-icons/md";
import { Document, RuleType } from "./schemaTypes";

const PizzaSchema: Document = {
  type: "document",
  // Computed Name
  name: "pizza",
  // Visible Title
  title: "Pizzas",
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
      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: add custom input component
    },
  ],
};

export default PizzaSchema;
