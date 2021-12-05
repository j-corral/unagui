import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, Tooltip, useColorMode } from '@chakra-ui/react';

export type ThemeSwitcherProps = {
  colorScheme?: ButtonProps['colorScheme'];
  variant?: ButtonProps['variant'];
  labelLight?: string;
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
      {isDark ? (
        <Tooltip label={labelLight}>
          <SunIcon color={colorScheme} />
        </Tooltip>
      ) : (
        <Tooltip label={labelDark}>
          <MoonIcon color={colorScheme} />
        </Tooltip>
      )}
    </Button>
  );
}
