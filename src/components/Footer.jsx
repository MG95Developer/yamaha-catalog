import { Box, Heading } from "@chakra-ui/react";

export default function Footer()
{
    return (
        <>
            <Box display={{ base: 'block', xl: 'none' }} mb="20px">
                Footer 1 up to xl (up to 1279px) breakpoint: Stack of top of each other: Width 100%, left aligned.
                React Accordion: Need Help, Shop Now, Inside Yamaha, Our Brands (when the accordion opens the child links can be shown.)
            </Box>

            <Box display={{ base: 'none', xl: 'block' }} mt="20px">
                Footer 2 will kick in when screensize is xl (1280px or more) or bigger: 5 COL layout, left aligned.
            </Box>

        </>
    )
}
