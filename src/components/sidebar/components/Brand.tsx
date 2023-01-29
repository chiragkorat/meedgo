// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';
import adminLogoImage from 'img/layout/Logo2.png';

// Custom components
import { HSeparator } from 'components/separator/Separator';
import { Image } from 'components/image/Image';

export function SidebarBrand() {

	return (
		<Flex alignItems='center' flexDirection='column' >
			<Image src={adminLogoImage} className="logoimg" />
			{/* <BrandLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
			{/* <b style={{ fontSize: '20px', marginBottom: '20px', marginTop: '20px', color: 'blue' }}>MEEDGO</b> */}
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
