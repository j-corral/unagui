import React, { useState } from 'react';
import { Selector } from './selector';
import { BellIcon, ArrowUpDownIcon } from '@chakra-ui/icons';

import { Wrapper } from '@hoomies/unagui.theme.wrapper';

export const Primary = () => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const options = new Map([
    ['A', 'Option A'],
    ['B', 'Option B'],
    ['C', 'Option C'],
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector onChange={handleChange} selected={selectedValue} options={options} />
    </Wrapper>
  );
};

export const WithLeftIcon = () => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const leftIcon = <BellIcon w={4} h={4} />;
  const options = new Map([
    ['off', 'Silent Mode'],
    ['on', 'Outdoor Mode'],
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector leftIcon={leftIcon} onChange={handleChange} selected={selectedValue} options={options} />
    </Wrapper>
  );
};

export const WithCustomLabel = () => {
  const options = new Map([
    ['1', 'One'],
    ['2', 'Two'],
    ['3', 'Three'],
  ]);
  const label = 'Choose a Number';
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector label={label} options={options} selected={selectedValue} onChange={handleChange} />
    </Wrapper>
  );
};

export const WithVariantOutline = () => {
  const options = new Map([
    ['A', 'Option A'],
    ['B', 'Option B'],
    ['C', 'Option C'],
  ]);
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector variant="outline" options={options} selected={selectedValue} onChange={handleChange} />
    </Wrapper>
  );
};

export const WithVariantFlushed = () => {
  const options = new Map([
    ['A', 'Option A'],
    ['B', 'Option B'],
    ['C', 'Option C'],
  ]);
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector variant="flushed" options={options} selected={selectedValue} onChange={handleChange} />
    </Wrapper>
  );
};

export const WithVariantFilled = () => {
  const options = new Map([
    ['A', 'Option A'],
    ['B', 'Option B'],
    ['C', 'Option C'],
  ]);
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector variant="filled" options={options} selected={selectedValue} onChange={handleChange} />
    </Wrapper>
  );
};

export const WithExtendedProps = () => {
  const options = new Map([
    ['A', 'Option A'],
    ['B', 'Option B'],
    ['C', 'Option C'],
  ]);
  const [selectedValue, setSelectedValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void setSelectedValue(event.target.value);
  };

  return (
    <Wrapper resetCSS>
      <Selector
        placeholder="Choose a letter"
        color="red.500"
        variant="outline"
        borderColor="pink.500"
        bg="pink.100"
        icon={<ArrowUpDownIcon />}
        options={options}
        selected={selectedValue}
        onChange={handleChange}
      />
    </Wrapper>
  );
};
