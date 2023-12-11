'use client';

import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import himachal from '@/public/carousel/himachal.jpg';
import kashmir from '@/public/carousel/kashmir.jpg';
import rajhasthan from '@/public/carousel/rajhasthan.jpg';
import nashik from '@/public/carousel/nashik.jpg';
import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';

interface CarouselItem {
  source: StaticImageData;
  state: string;
}

const CardCarouselSection = () => {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');

    if (carousel?.children) {
      const items = carousel.children;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.addEventListener('click', () => {
          item.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          });
        });
      }
    }
  }, []);

  const sources: CarouselItem[] = [
    { source: kashmir, state: 'kashmir' },
    { source: nashik, state: 'nashik' },
    { source: rajhasthan, state: 'rajhasthan' },
    { source: himachal, state: 'himachal pradhesh' },
  ];

  return (
    <Box className="mt-5 p-3 ">
      <Flex
        width={{
          base: '100%',
          sm: '100%',
          md: '95%',
        }}
        direction={{
          base: 'column',
          sm: 'column',
          md: 'row',
        }}
        gap={{
          base: 8,
          sm: 8,
          md: 16,
        }}
        height={'100%'}
        mx={'auto'}
      >
        <Flex
          direction={'column'}
          alignItems={'center'}
          justifyContent={'space-around'}
          gap={5}
          width={{
            sm: '100%',
            base: ' 100%',
            md: '35%',
          }}
          pt={{
            md: 5,
          }}
        >
          <Heading
            textAlign={'center'}
            textTransform={'capitalize'}
            fontWeight={'500'}
            fontSize={'xxx-large'}
          >
            Your gateway to <HeadingSpan content="Adventure" /> and
            <HeadingSpan content="Adrenaline!" />
            <progress className="mt-4 progress progress-secondary w-full"></progress>
          </Heading>

          <ActionButton />
        </Flex>

        <Box overflow={'hidden'} className="flex-1">
          <div className="carousel carousel-center w-full p-4 space-x-4">
            {sources.map(({ source, state }, index) => (
              <CarouselItem key={state} source={source} state={state} />
            ))}
          </div>
        </Box>
      </Flex>
    </Box>
  );
};

const ActionButton = () => {
  return (
    <Link href="#contact">
      <button className="btn hover:btn-accent hover:scale-105 w-[15rem] pointer-events-inherit">
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="red"
          viewBox="0 0 24 24"
          stroke="red"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </Link>
  );
};

const CarouselItem = ({ source, state }: CarouselItem) => {
  return (
    <Box
      overflow={'hidden'}
      cursor={'pointer'}
      position={'relative'}
      transition={'all 300ms ease-out'}
      _hover={{
        transform: 'scale(1.025)',
      }}
      className="carousel-item rounded-box w-[300px] h-[350px] shadow-sm shadow-gray-900 "
    >
      <Image
        src={source}
        alt="Enchanting Nature Landscape"
        priority
        className={`object-cover object-bottom w-full h-full pointer-events-none`}
      />

      <Text
        fontWeight={'300'}
        color={'white'}
        position={'absolute'}
        left={'5%'}
        bottom={'5%'}
        className="px-2 py-1 rounded-md backdrop-saturate-150 backdrop-blur-lg bg-gradient-to-br from-[#00000022] to-[#00000033]"
      >
        {state.toUpperCase()}
      </Text>
    </Box>
  );
};

const HeadingSpan = ({ content }: { content: string }) => {
  return (
    <Box
      fontStyle={'italic'}
      fontWeight={'700'}
      textTransform={'uppercase'}
      display={'inline-block'}
      textColor={'transparent'}
      backgroundClip={'text'}
      backgroundImage={
        'linear-gradient(60deg,#2F855A 20%,  #ee43d1,#aa59e1,#4e86e1)'
      }
      className="px-1"
    >
      {content}
    </Box>
  );
};

export default CardCarouselSection;
