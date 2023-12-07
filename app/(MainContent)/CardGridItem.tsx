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
    <Flex direction={'column'} className="rounded-2xl overflow-hidden ">
      <Box maxHeight={'20rem'} width={'100%'} className="overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </Box>

      <Text
        className="px-3 py-5 bg-gradient-to-bl from-green-800  to-[#00000033] backdrop-blur-sm"
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
