'use client';

import { ChakraProvider as ChakraThemeProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const ChakraProvider = ({ children }: PropsWithChildren) => {
  return <ChakraThemeProvider>{children}</ChakraThemeProvider>;
};

export default ChakraProvider;
