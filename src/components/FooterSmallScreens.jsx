import { Box, Container, Text, Image } from "@chakra-ui/react";
import { ExternalLink } from "react-external-link";
import { Link } from 'react-router-dom'
import Accordion from "./Accordion";

export default function FooterSmallScreens()
{

    const footerLinks = {
        color: 'white',
        marginBottom: '15px',
        fontSize: '13px'
    }

    return (
        <>
            <Container maxWidth="1920px" px="15px" py="30px" display={{ base: 'block', xl: 'none' }}>

                <Box color="white" my="30px">
                    <Link to="/">
                        <Image src='/img/revs-your-heart-white-logotype.svg' alt='Yamaha Logotype' width="130px" heigth="auto" />
                    </Link>
                </Box>

                <Box py={8}>
                    <Accordion />
                </Box>

                <Box sx={footerLinks} mt={3}>
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
                        <Box display="flex">
                            <Text mr={2}>Your Privacy Choices </Text>
                            <Image src='/img/privacy-choice-icon.png' alt='privacy options icon' width="35px" heigth="auto" />
                        </Box>
                    </ExternalLink>
                </Box>

                <Box color="white" fontSize='13px'>
                    <Text>© 2023 Tribute website to Yamaha Motor Corporation, USA. No rights reserved.</Text>
                </Box>

            </Container>
        </>
    )
}
