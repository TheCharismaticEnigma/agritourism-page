import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import ChakraProvider from '@/providers/ChakraProvider';
import { Box } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agritourism Landing Page',
  description:
    'Agritourism or agrotourism involves any agriculturally based activity that brings visitors to a farm or ranch',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {/* <Header /> */}

          <main>
            <Box>{children}</Box>
          </main>

          {/* Footer */}
        </ChakraProvider>
      </body>
    </html>
  );
}
