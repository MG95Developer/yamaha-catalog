import { Box, Container, Grid, GridItem, Text, Image, HStack } from "@chakra-ui/react";
import { ExternalLink } from "react-external-link";
import { Link } from 'react-router-dom'

export default function FooterLargeScreens()
{

    const footerColTitles = {
        fontWeight: '800',
        color: 'white',
        borderBottom: '1px solid white',
        paddingBottom: '15px'
    }

    const myGridItem = {
        marginTop: '10px'
    }

    const linksBox = {
        padding: '5px 0px',
        fontSize: '.9em',
        fontWeight: '600'
    }
    return (
        <>
            <Box display={{ base: 'none', xl: 'block' }} mt="20px">
                <Container maxWidth="1850px" px={{ lg: '10px' }} mt="20px">
                    <Grid templateColumns="repeat(4, 1fr)" color="white">

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                            //border="2px solid yellow"
                            marginRight="15px"
                        >
                            <Text as="p" sx={footerColTitles}>Need help?</Text>

                            <Grid >
                                <GridItem sx={myGridItem}>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="https://yamaha-motor.com/contact" target="_blank" >
                                            <Text>Contact Us</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="https://yamaha-motor.com/customer-service" target="_blank" >
                                            <Text>Customer service</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="https://www.yamaha-dealers.com/public/web/techpubs/nhtsaPublications.html" target="_blank" >
                                            <Text>NHTSA On-Road Recalls</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="https://www.yamahamotorsports.com/motorsports/pages/cpsc-recalls" target="_blank" >
                                            <Text>CPSC Recalls</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="https://yamaha-motor.com/help/returns" target="_blank" >
                                            <Text>Returns</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="https://www.yamahapubs.com/" target="_blank" >
                                            <Text>Manuals</Text>
                                        </ExternalLink>
                                    </Box>

                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                            //border="2px solid green"
                            marginRight="15px"
                        >
                            <Text as="p" sx={footerColTitles}>Shop Now</Text>

                            <Grid >
                                <GridItem sx={myGridItem}>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Gear & Apparel</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Parts</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Maintenance</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Find a Dealer</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>About Yamalube</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Digital Catalogs</Text>
                                        </ExternalLink>
                                    </Box>

                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                            //border="2px solid pink"
                            marginRight="15px"
                        >
                            <Text as="p" sx={footerColTitles}>Inside Yamaha</Text>

                            <Grid >
                                <GridItem sx={myGridItem}>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Our Story</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>News</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Career Opportunities</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Yamaha Extended Service</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Yamaha Financial Services</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Yamaha Motor Global</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Music & Electronics</Text>
                                        </ExternalLink>
                                    </Box>

                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                        //border="2px solid orange"
                        >
                            <Text as="p" sx={footerColTitles}>Our Brands</Text>

                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem sx={myGridItem} mr="25px">

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Bennett Marine</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>G3 Boats</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Golf Car</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Motorsports</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>NAVI Mobility Systems</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Outboards</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Power Assist Bicycles</Text>
                                        </ExternalLink>
                                    </Box>

                                </GridItem>

                                <GridItem sx={myGridItem}>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Power Products</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Remotely Piloted Helicopters</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Skeeter Boats</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>SMT Innovations</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>WaveRunners</Text>
                                        </ExternalLink>
                                    </Box>

                                    <Box sx={linksBox}>
                                        <ExternalLink href="#" target="_blank" >
                                            <Text>Yamaha Boats</Text>
                                        </ExternalLink>
                                    </Box>

                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>

                    <Box py="40px">
                        <Grid templateColumns="repeat(1, 1fr)" color="white" mt="20px" py="20px" >
                            <GridItem>
                                <Link to="/">
                                    <Image src='/img/revs-your-heart-white-logotype.svg' alt='Yamaha Logotype' width="10%" heigth="auto" />

                                </Link>
                            </GridItem>
                        </Grid>
                    </Box>


                    <Grid templateColumns="repeat(2, 1fr)" color="white" mt="20px" py="20px" borderTop="1px solid white">
                        <GridItem>
                            <Grid templateColumns="repeat(4, 1fr)">
                                <Box>
                                    <GridItem fontSize="13px">
                                        <Text>Privacy Policy</Text>
                                    </GridItem>
                                </Box>
                                <Box>
                                    <GridItem fontSize="13px">
                                        <Text>Terms & Conditions</Text>
                                    </GridItem>
                                </Box>
                                <Box>
                                    <GridItem fontSize="13px">
                                        <Text>Your Privacy Choices</Text>
                                    </GridItem>
                                </Box>
                                <Box>
                                    <GridItem fontSize="13px">
                                        <ExternalLink href="https://yamaha-motor.com/" target="_blank">
                                            <Text>Official Website</Text>
                                        </ExternalLink>

                                    </GridItem>
                                </Box>
                            </Grid>

                        </GridItem>

                        <GridItem display="flex" justifyContent="flex-end">
                            <Text>© 2023 Tribute website to Yamaha Motor Corporation, USA. No rights reserved.</Text>
                        </GridItem>
                    </Grid>

                </Container>
            </Box></>
    )
}
