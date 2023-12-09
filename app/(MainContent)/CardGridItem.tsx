// Image Src and Content

import { Flex, Box, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

export interface CardGridItemProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  content: string;
}

const CardGridItem = ({ imageSrc, imageAlt, content }: CardGridItemProps) => {
  return (
    <Flex height={'100%'} direction={'column'} className="p-1 ">
      <Box
        maxHeight={'20rem'}
        width={'100%'}
        className="overflow-hidden rounded-t-sm"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </Box>

      <Text
        className="flex-1 rounded-b-sm px-3 py-5 shadow-md shadow-[#00000025]"
        textAlign={'center'}
        color={'black'}
        fontWeight={'semibold'}
      >
        {content}
      </Text>
    </Flex>
  );
};

export default CardGridItem;
