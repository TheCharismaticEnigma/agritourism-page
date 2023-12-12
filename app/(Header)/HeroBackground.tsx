'use client';

import heroBackground3 from '@/public/background.jpg';
import heroBackground4 from '@/public/background_2.jpg';
import heroBackground2 from '@/public/image_2.jpg';
import heroBackground from '@/public/nature.jpg';
import heroBackground5 from '@/public/ranch_2.jpg';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';

const HeroBackground = () => {
  // Carousal Infinite animation code

  useEffect(() => {
    const items = document.querySelectorAll('.carouselItem');
    const timeline = gsap.timeline();

    items.forEach((item, index) => {
      if (index === 0) {
        timeline.to(item, { transform: 'translateY(0)', duration: 0 });
        return;
      }

      const initialPosition =
        index % 2 === 0 ? `translateY(-${index * 30}rem)` : 'translateY(0)';

      timeline.fromTo(
        item,
        {
          opacity: 0,
          transform: initialPosition,
        },
        {
          transform: `translateY(-${index * 30}rem)`,
          opacity: 1,
          duration: 2.5 + parseInt(`${index / 2}`),
          ease: 'power2.out',
          delay: 4,
        }
      );
    });

    timeline.repeat(-1).repeatDelay(5);

    return () => {
      items.forEach((item) => gsap.set(item, { transform: 'translateY(0)' }));
    };
  }, []);

  const sources: StaticImageData[] = [
    heroBackground,
    heroBackground2,
    heroBackground3,
    heroBackground4,
    heroBackground5,
    heroBackground,
    heroBackground2,
  ];

  return (
    <Box overflow={'hidden'} height={'30rem'} className="w-full h-full">
      {sources.map((source, index) => (
        <CarouselItem
          key={`Hero Background ${index + 1}`}
          staticImage={source}
        />
      ))}
    </Box>
  );
};

const CarouselItem = ({ staticImage }: { staticImage: StaticImageData }) => {
  return (
    <Box className="carouselItem">
      <Image
        src={staticImage}
        alt="Enchanting Nature Landscape"
        priority
        className={`object-cover object-bottom border-2 h-[30rem] w-full`}
      />
    </Box>
  );
};

export default HeroBackground;
