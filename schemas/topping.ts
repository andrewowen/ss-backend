import { FaPepperHot as icon } from 'react-icons/fa';
import { Document } from './schemaTypes';

const PizzaSchema: Document = {
  type: 'document',
  // Computed Name
  name: 'topping',
  // Visible Title
  title: 'Toppings',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?'
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian?',
      type: 'boolean',
      options: {
        layout: 'switch'
      }
    }
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian'
    },
    prepare: ({ name, vegetarian }: { [key: string]: string }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`
    })
  }
};

export default PizzaSchema;
