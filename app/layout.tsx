import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import ChakraProvider from '@/providers/ChakraProvider';
import { Box } from '@chakra-ui/react';
import Header from './(Header)/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agritourism Landing Page',
  description:
    'Agritourism or agrotourism involves any agriculturally based activity that brings visitors to a farm or ranch',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ChakraProvider>
          <Header />

          <main className=" mx-auto max-w-7xl">
            <Box>{children}</Box>
          </main>

          {/* Footer */}
        </ChakraProvider>
      </body>
    </html>
  );
}
