import { Flex } from '@chakra-ui/react';
import AboutSection from './(MainContent)/AboutSection';
import CardGridSection from './(MainContent)/CardGridSection';
import InstructionSection from './(MainContent)/InstructionSection';
import CardCarouselSection from './(MainContent)/CardCarouselSection';
import TestimonialSection from './(MainContent)/TestimonialSection';
import StatsContainer from './(MainContent)/StatsContainer';

export default function Home() {
  return (
    <Flex direction={'column'} gap={6} my={5}>
      <StatsContainer />

      <CardCarouselSection />

      <AboutSection />

      <CardGridSection />

      <InstructionSection />

      <TestimonialSection />
    </Flex>
  );
}
