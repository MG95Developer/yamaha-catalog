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
            >
                <List display='flex'
                    flexDirection={{ base: 'row', md: 'column' }}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    marginTop={{ base: '0px', md: '60px' }}
                >
                    <NavLink to="/" >
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '.8em', md: '1.6em', lg: '1.5em' }} sx={navLinks}>
                            Motorcycles
                        </ListItem>
                    </NavLink>

                    <NavLink to="/test-drive" >
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '.8em', md: '1.6em', lg: '1.5em' }} sx={navLinks}>
                            Drive
                        </ListItem>
                    </NavLink>

                    <NavLink to="/profile">
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '.8em', md: '1.6em', lg: '1.5em' }} sx={navLinks}>
                            Profile
                        </ListItem>
                    </NavLink>

                    <NavLink to="/contact">
                        <ListItem mr={{ base: '15px', md: '0px' }} mb={{ base: '0px', md: '25px' }} fontSize={{ base: '.8em', md: '1.6em', lg: '1.5em' }} sx={navLinks}>
                            Contact
                        </ListItem>
                    </NavLink>
                </List>
            </Box>
        </>
    )
}
