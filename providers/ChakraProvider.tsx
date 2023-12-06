'use client';

import {
  ChakraProvider as ChakraThemeProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const ChakraProvider = ({ children }: PropsWithChildren) => {
  return (
    <ChakraThemeProvider>
      <ColorModeScript initialColorMode="light" />
      {children}
    </ChakraThemeProvider>
  );
};

export default ChakraProvider;
