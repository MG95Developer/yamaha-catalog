import { Box, Link, Text, Image } from "@chakra-ui/react";


export default function Navbar()
{
    return (
        <>
            <Box
                as="nav"
                p={4}
                display='flex'
                flexDirection={{ base: 'row', md: 'column' }}
            >

                <Box mr={{ base: '15px', md: '0px' }}>
                    link 1
                </Box>

                <Box mr={{ base: '15px', md: '0px' }}>
                    link 2
                </Box>

                <Box mr={{ base: '15px', md: '0px' }}>
                    link 3
                </Box>

                <Box mr={{ base: '15px', md: '0px' }}>
                    link 4
                </Box>

            </Box>
        </>
    )
}
