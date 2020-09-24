import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';
import { Document, RuleType } from './schemaTypes';

const PizzaSchema: Document = {
  type: 'document',
  // Computed Name
  name: 'pizza',
  // Visible Title
  title: 'Pizzas',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'price',
      title: 'Pizza Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule: RuleType): RuleType => Rule.min(1000).max(50000),
      inputComponent: PriceInput
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian?',
      type: 'boolean'
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      isVegetarian: 'vegetarian',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name'
    },
    prepare: ({
      title,
      media,
      isVegetarian,
      ...toppings
    }: {
      [key: string]: string;
    }) => {
      // 1. Filter undefined toppings out
      const tops: string = Object.values(toppings).filter(Boolean).join(', ');
      // 2. return the preview object for the pizza
      return {
        title: `${title} ${isVegetarian ? '🌱' : ''} `,
        media,
        subtitle: tops
      };
    }
  }
};

export default PizzaSchema;
