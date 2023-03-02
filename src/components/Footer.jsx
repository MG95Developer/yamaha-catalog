import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { ExternalLink } from "react-external-link";

export default function Footer()
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
            <Box display={{ base: 'block', xl: 'none' }} mb="20px">
                Footer 1 up to xl (up to 1279px) breakpoint: Stack of top of each other: Width 100%, left aligned.
                React Accordion: Need Help, Shop Now, Inside Yamaha, Our Brands (when the accordion opens the child links can be shown.)
            </Box>

            <Box display={{ base: 'none', xl: 'block' }} mt="20px">
                <Container maxWidth="1850px" px={{ lg: '10px' }} mt="20px">
                    <Grid templateColumns="repeat(4, 1fr)" color="white">

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                            border="2px solid yellow"
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
                            border="2px solid green"
                            marginRight="15px"
                        >
                            <Text as="p" sx={footerColTitles}>Shop Now</Text>

                            <Grid >
                                <GridItem sx={myGridItem}>1</GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                            border="2px solid pink"
                            marginRight="15px"
                        >
                            <Text as="p" sx={footerColTitles}>Inside Yamaha</Text>

                            <Grid >
                                <GridItem sx={myGridItem}>1</GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem
                            as="div"
                            colSpan={{ base: 1 }}
                            border="2px solid orange"
                        >
                            <Text as="p" sx={footerColTitles}>Our Brands</Text>

                            <Grid templateColumns="repeat(2, 1fr)">
                                <GridItem sx={myGridItem}>1</GridItem>
                                <GridItem sx={myGridItem}>2</GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>

                    <Box py="50px">
                        <Grid templateColumns="repeat(1, 1fr)" color="white" mt="20px" py="20px" >
                            <GridItem>
                                logo
                            </GridItem>
                        </Grid>
                    </Box>


                    <Grid templateColumns="repeat(2, 1fr)" color="white" mt="20px" py="20px" borderTop="1px solid white">
                        <GridItem>
                            links
                        </GridItem>

                        <GridItem>
                            copyright
                        </GridItem>
                    </Grid>

                </Container>
            </Box>

        </>
    )
}
