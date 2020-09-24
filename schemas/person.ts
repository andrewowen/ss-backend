import { MdPerson as icon } from 'react-icons/md';
import { Document, RuleType } from './schemaTypes';

const PizzaSchema: Document = {
  type: 'document',
  // Computed Name
  name: 'person',
  // Visible Title
  title: 'Slicemasters',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Tell us a bit about this person'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};

export default PizzaSchema;
