import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, Tooltip, useColorMode } from '@chakra-ui/react';

export type ThemeSwitcherProps = {
  /**
   * @description Set Button colors from the Chakra UI options
   */
  colorScheme?: ButtonProps['colorScheme'];
  /**
   * @description Set a Button variant from Chakra UI options
   */
  variant?: ButtonProps['variant'];
  /**
   * @description Text to display on Hover
   */
  labelLight?: string;
  /**
   * @description Text to display on Hover
   */
  labelDark?: string;
};

export function ThemeSwitcher({
  colorScheme = 'yellow.300',
  variant = 'ghost',
  labelLight = 'Turn on light mode',
  labelDark = 'Turn on dark mode',
}: ThemeSwitcherProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Button onClick={toggleColorMode} variant={variant}>
      <Tooltip
        label={isDark ? labelLight : labelDark}
        hasArrow
        placement="auto"
        aria-label="Button to switch light/dark theme mode"
      >
        {isDark ? <SunIcon color={colorScheme} /> : <MoonIcon color={colorScheme} />}
      </Tooltip>
    </Button>
  );
}
