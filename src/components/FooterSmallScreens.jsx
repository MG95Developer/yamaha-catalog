import { Box, Container, Grid, GridItem, Text, Image, HStack } from "@chakra-ui/react";
import { ExternalLink } from "react-external-link";
import { Link } from 'react-router-dom'

export default function FooterSmallScreens()
{

    const footerLinks = {
        color: 'white',
        marginBottom: '15px',
        fontSize: '13px',
        _hover: {
            color: 'yamaha.red'
        }
    }

    return (
        <>
            <Container maxWidth="1920px" px="15px" py="30px" display={{ base: 'block', xl: 'none' }}>

                <Box color="white" mb="30px">
                    <Link to="/">
                        <Image src='/img/revs-your-heart-white-logotype.svg' alt='Yamaha Logotype' width="130px" heigth="auto" />
                    </Link>
                </Box>

                <Box minHeight="200px" color="white" border="2px solid yellow" mb="30px">Accordion goes here</Box>

                <Box sx={footerLinks}>
                    <ExternalLink href="#" target="_blank">
                        <Text>Privacy Policy</Text>
                    </ExternalLink>
                </Box>

                <Box sx={footerLinks}>
                    <ExternalLink href="#" target="_blank">
                        <Text>Terms & Conditions</Text>
                    </ExternalLink>
                </Box>

                <Box sx={footerLinks}>
                    <ExternalLink href="#" target="_blank">
                        <Text>Your Privacy Choices</Text>
                    </ExternalLink>
                </Box>

                <Box color="white" fontSize='13px'>
                    <Text>© 2023 Tribute website to Yamaha Motor Corporation, USA. No rights reserved.</Text>
                </Box>

            </Container>

        </>
    )
}
