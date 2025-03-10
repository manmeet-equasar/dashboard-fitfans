// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} /> */}

      <Image
        src={'/img/a.svg'}
        alt="FitFans Logo"
        h="40px"
        w="200px"
        my="32px"
        style={{
          height: '40px',
          width: '200px',
          filter:
            logoColor === 'white' ? 'brightness(0) invert(1)' : 'brightness(0)',
        }}
      />

      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
