import React, { FC, RefObject } from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

type InputProps = {
  type: {
    title: string;
    description: string;
    name: string;
  };
  value: number;
  inputComponent: RefObject<HTMLInputElement> | null;
  onChange: (patch: () => void) => void;
};

const createPatchFrom = (value: string) => {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
};

const format = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format;

const PriceInput: FC<InputProps> = ({
  type,
  value,
  onChange,
  inputComponent
}) => {
  const { title, description, name } = type;
  return (
    <div>
      <h2>
        {title} - {format(value / 100 || 0)}
      </h2>
      <p>{description}</p>
      <input
        type={name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
};

export default PriceInput;
