import { Box, Container, Grid, GridItem, Text, Image, HStack } from "@chakra-ui/react";
import { ExternalLink } from "react-external-link";
import { Link } from 'react-router-dom'
import FooterLargeScreens from "./FooterLargeScreens";

export default function Footer()
{



    return (
        <>
            <Box display={{ base: 'block', xl: 'none' }} mb="20px" color="white">
                Footer 1 up to xl (up to 1279px) breakpoint: Stack of top of each other: Width 100%, left aligned.
                React Accordion: Need Help, Shop Now, Inside Yamaha, Our Brands (when the accordion opens the child links can be shown.)
            </Box>

            <FooterLargeScreens />
        </>
    )
}
