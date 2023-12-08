import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';

import CardGridItem, {
  CardGridItemProps as CardGridItemData,
} from './CardGridItem';

import waterfall from '@/public/image_6.jpg';
import ranch1 from '@/public/ranch_1.jpg';
import ranch2 from '@/public/ranch_2.jpg';
import ranch3 from '@/public/ranch_3.jpg';

const CardGridSection = () => {
  return (
    <Flex
      direction={'column'}
      gap={5}
      width={{
        base: '100%',
        sm: '100%',
        md: '90%',
      }}
      className="mx-auto p-2"
    >
      <GridHeading />

      <CardGrid />
    </Flex>
  );
};

const GridHeading = () => {
  return (
    <Heading
      className="md:my-4 px-1"
      textAlign={{ base: 'center', sm: 'center', md: 'left' }}
      color={'green.800'}
      fontSize={{
        base: 'xx-large',
        sm: 'xx-large',
        md: 'xxx-large',
      }}
    >
      What Sets Us Apart?
    </Heading>
  );
};

const CardGrid = () => {
  const gridData: CardGridItemData[] = [
    {
      imageSrc: ranch3,
      imageAlt: 'Agritourism Ranch',
      content:
        ' Farm Tours: Discover the secrets of our farm with guided tours led by our knowledgeable staff.',
    },
    {
      imageSrc: ranch1,
      imageAlt: 'Agritourism Ranch',
      content:
        'Authentic Experiences - Immerse yourself in the daily rhythms of farm life. From hands-on harvesting to feeding our friendly animals, every moment is an opportunity to connect with nature.',
    },
    {
      imageSrc: waterfall,
      imageAlt: 'Agritourism Waterfall',
      content:
        'Farm-to-Table Delights: Savor the flavors of the countryside with our farm-fresh produce. Join us for farm-to-table dining experiences that showcase the best of local, seasonal ingredients.',
    },
    {
      imageSrc: ranch2,
      imageAlt: 'Agritourism Ranch',
      content:
        ' Sustainable Practices: We take pride in our commitment to sustainable farming. Explore our eco-friendly initiatives and learn about the importance of responsible agriculture.',
    },
  ];

  return (
    <Grid
      width={'100%'}
      height={'100%'}
      templateColumns={{
        base: 'repeat(1,1fr)',
        sm: 'repeat(1,1fr)',
        md: 'repeat(3,1fr)',
      }}
      gap={8}
    >
      {gridData.map(({ content, imageAlt, imageSrc }, index) => {
        const colSpanData =
          index === 0 || index === 3
            ? {
                base: 1,
                sm: 1,
                md: 2,
              }
            : 1;

        return (
          <GridItem key={content} w="100%" h="100%" colSpan={colSpanData}>
            <CardGridItem
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              content={content}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default CardGridSection;
