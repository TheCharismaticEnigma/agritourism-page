import { Box, Flex, Heading, Stack } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';

interface SocialData {
  network: string;
  url: string;
}

const SocialsSection = () => {
  const socialsData: SocialData[] = [
    { network: 'facebook', url: 'https://www.facebook.com/agspert/' },
    { network: 'instagram', url: 'https://www.instagram.com/agspeak.in/' },
    { network: 'linkedin', url: 'https://www.linkedin.com/company/agspert/' },
    { network: 'twitter', url: 'https://twitter.com/AgSpert' },
    {
      network: 'youtube',
      url: 'https://www.youtube.com/@agsperttechnologies7256',
    },
  ];

  return (
    <Flex
      width={{
        base: '100%',
        sm: '100%',
        md: '90%',
      }}
      direction={'column'}
      alignItems={'center'}
      gap={{
        sm: 8,
        base: 8,
        md: 12,
      }}
      mx={'auto'}
      my={8}
      p={'1'}
    >
      <Heading
        textTransform={'capitalize'}
        color={'blackAlpha.800'}
        fontSize={{
          base: 'xx-large',
          sm: 'xx-large',
          md: 'xxx-large',
        }}
      >
        Connect With Us
      </Heading>

      <Stack direction={'row'} spacing={10}>
        {socialsData.map(({ network, url }) => (
          <SocialIcon key={url} target="_blank" network={network} url={url} />
        ))}
      </Stack>
    </Flex>
  );
};

export default SocialsSection;
