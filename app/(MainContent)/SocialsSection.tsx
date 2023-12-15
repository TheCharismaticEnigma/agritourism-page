import { Flex, Heading, Stack, Box } from '@chakra-ui/react';
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
    <Flex direction={'column'} alignItems={'center'} gap={6} p={'1'}>
      <Heading
        textTransform={'capitalize'}
        color={'blackAlpha.800'}
        fontSize={'xx-large'}
        textAlign={'center'}
      >
        Connect With Us
      </Heading>

      <Flex
        direction={'row'}
        justifyContent={'center'}
        gap={10}
        wrap={'wrap'}
        p={1}
      >
        {socialsData.map(({ network, url }) => (
          <SocialIcon key={url} target="_blank" network={network} url={url} />
        ))}
      </Flex>
    </Flex>
  );
};

export default SocialsSection;
