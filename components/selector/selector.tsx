import React from 'react';
import { HStack, Select, SelectProps, Tooltip } from '@chakra-ui/react';

export type variantType = 'outline' | 'unstyled' | 'flushed' | 'filled';

export type StringMap = Map<string, string>;

export type ReactElements = Array<React.ReactElement>;

export interface SelectorProps extends SelectProps {
  /**
   * @description Icon to display before the Selector
   * @type React.ReactElement
   */
  leftIcon?: React.ReactElement;
  /**
   * @description Text to display on hover
   * @default "Make a choice"
   */
  label?: string;
  /**
   * @description Function to handle select change
   * @type React.ChangeEventHandler<HTMLSelectElement>
   */
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  /**
   * @description The selected value after change handler
   */
  selected: string;
  /**
   * @description Options to display in the Selector
   */
  options: StringMap;
  /**
   * @description Select variant style
   * @type variantType
   * @default "unstyled"
   */
  variant?: variantType;
}

/**
 * Render StringMap entries to React Elements
 * @param options: StringMap
 * @returns ReactElements
 */
function renderOptions(options: StringMap): ReactElements {
  const rendered = [];
  options.forEach((label, key) =>
    rendered.push(
      <option key={key} value={key}>
        {label}
      </option>,
    ),
  );
  return rendered;
}

export function Selector(props: SelectorProps) {
  const { leftIcon, label = 'Make a choice', onChange, selected, options, variant = 'unstyled' } = props;

  return (
    <HStack spacing={2}>
      {leftIcon}
      <Tooltip label={label}>
        <Select onChange={(evt) => onChange(evt)} value={selected} variant={variant} {...props}>
          {renderOptions(options)}
        </Select>
      </Tooltip>
    </HStack>
  );
}
