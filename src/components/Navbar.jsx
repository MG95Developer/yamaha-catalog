import { Box, List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Navbar()
{

    const navLinks = {
        textTransform: 'uppercase',
        fontWeight: '600',
        borderBottom: '2px solid',
        borderColor: 'transparent',
        _hover: {
            borderColor: 'yamaha.red',
        }
    }

    return (
        <>
            <Box
                as="nav"
                p={4}
            >
                <List display='flex'
                    flexDirection={{ base: 'row', md: 'column' }}
                >
                    <NavLink to="/" >
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '1em', lg: '1.2em' }} sx={navLinks}>
                            Products
                        </ListItem>
                    </NavLink>

                    <NavLink to="/test-drive" >
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '1em', lg: '1.2em' }} sx={navLinks}>
                            Drive
                        </ListItem>
                    </NavLink>

                    <NavLink to="/profile">
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '1em', lg: '1.2em' }} sx={navLinks}>
                            Profile
                        </ListItem>
                    </NavLink>

                    <NavLink to="/contact">
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '1em', lg: '1.2em' }} sx={navLinks}>
                            Contact
                        </ListItem>
                    </NavLink>
                </List>
            </Box>
        </>
    )
}
