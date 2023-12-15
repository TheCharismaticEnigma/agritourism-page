'use client';

import { useEffect } from 'react';
import { Flex, Heading, Avatar, Box, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';

import portrait1 from '@/public/testimonials/portrait_1.jpg';
import portrait2 from '@/public/testimonials/portrait_2.jpg';
import portrait3 from '@/public/testimonials/portrait_3.jpg';

interface TestimonialCardData {
  data: StaticImageData;
  heading: string;
  text: string;
  name: string;
  location: string;
}

const TestimonialCarousel = () => {
  useEffect(() => {
    const carouselItemCount = 3;
    const container = document.querySelector('.carousel-wrapper');

    const timeline = gsap.timeline();
    timeline.set(container, { translateX: 0, duration: 0 });

    for (let i = 1; i < carouselItemCount; i++) {
      timeline.fromTo(
        container,
        { translateX: `-${(i - 1) * 100}%` },
        { translateX: `-${i * 100}%`, duration: 2, delay: 8 }
      );
    }

    for (let i = carouselItemCount - 1; i > 0; i--) {
      timeline.fromTo(
        container,
        { translateX: `-${i * 100}%` },
        { translateX: `-${(i - 1) * 100}%`, duration: 2, delay: 8 }
      );
    }

    timeline.repeat(-1).repeatDelay(8);
  }, []);

  const cardData: TestimonialCardData[] = [
    {
      data: portrait1,
      heading: 'Family Fun on the Farm',
      text: "Our weekend at Green Acres Farm was absolutely delightful! From picking our own fresh strawberries to enjoying a scenic hayride, our family had a blast. The kids loved getting up close with the animals, and we couldn't resist buying some homemade jams and honey from the farm store. A perfect getaway for families seeking a taste of rural life!",
      name: 'Ravikant Desai',
      location: 'Mumbai, Maharashtra',
    },
    {
      data: portrait2,
      heading: 'Hands-On Farm Experience',
      text: 'Our stay at Rolling Hills Farm was hands down the best agritourism experience! We got our hands dirty planting and harvesting crops, milked cows, and even tried our hand at cheese-making. The hosts were incredibly welcoming, and we left with not only new skills but also a deep appreciation for the hard work farmers put in every day.',
      name: 'Khushi Somani',
      location: 'Panji, Goa',
    },
    {
      data: portrait3,
      heading: 'Romantic Getaway Among Vineyards',
      text: 'Vineyard Vistas offered us a romantic escape surrounded by lush vineyards. The wine tastings and gourmet dinners made for a perfect combination. We enjoyed strolls through the vineyards and learned so much about the winemaking process. The cozy accommodations and breathtaking views made it a truly unforgettable experience for us.',
      name: 'Vikram Inje',
      location: 'Jaipur, Rajhasthan',
    },
  ];

  return (
    <Flex
      width={'100%'}
      className="shadow-md shadow-gray-300 rounded-md"
      overflow={'hidden'}
    >
      <Flex className="carousel-wrapper" width={'100%'} height={'100%'}>
        {cardData.map(({ data, heading, location, name, text }) => (
          <TestimonialCard
            key={heading}
            cardContent={{
              data,
              heading,
              location,
              name,
              text,
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
};

const TestimonialCard = ({
  cardContent,
}: {
  cardContent: TestimonialCardData;
}) => {
  const { data: imageData, heading, location, name, text } = cardContent;

  return (
    <Box flexShrink={'0'} width={'100%'} padding={5}>
      <Flex direction={'row'} gap={5}>
        <Box
          height={'25rem'}
          display={{ base: 'none', sm: 'none', md: 'block' }}
          flex={'1'}
        >
          <Image
            src={imageData}
            alt="Testimonial Portrait"
            className="w-full h-full object-cover object-top rounded-sm"
          />
        </Box>

        <Flex
          direction={'column'}
          alignItems={'center'}
          justifyContent={'space-around'}
          gap={8}
          padding={3}
          maxWidth={{ base: '100%', md: '70%' }}
        >
          <Heading
            textTransform={'capitalize'}
            fontWeight={'900'}
            fontSize={'xx-large'}
            textAlign={{ base: 'center', sm: 'center' }}
          >
            {heading}
          </Heading>

          <Text fontSize={{ sm: 'large', md: 'x-large' }} textAlign={'center'}>
            {`"${text}"`}
          </Text>

          <PersonInfo
            details={{
              image: imageData,
              name,
              location,
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

const PersonInfo = ({
  details,
}: {
  details: {
    image: StaticImageData;
    name: string;
    location: string;
  };
}) => {
  const { name, location, image } = details;
  return (
    <Flex gap="4" alignItems="center" flexWrap="wrap">
      <Avatar
        name={name || 'Segun Adebayo'}
        src={image.src || 'https://bit.ly/sage-adebayo'}
      />

      <Box>
        <Heading size="md">{name} </Heading>
        <Text fontSize={'large'}>{location}</Text>
      </Box>
    </Flex>
  );
};

export default TestimonialCarousel;
