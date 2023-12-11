import { Flex } from '@chakra-ui/react';
import AboutSection from './(MainContent)/AboutSection';
import CardGridSection from './(MainContent)/CardGridSection';
import InstructionSection from './(MainContent)/InstructionSection';
import CardCarouselSection from './(MainContent)/CardCarouselSection';

export default function Home() {
  return (
    <Flex direction={'column'} gap={6} my={5}>
      <CardCarouselSection />

      <AboutSection />

      <CardGridSection />

      <InstructionSection />
    </Flex>
  );
}
