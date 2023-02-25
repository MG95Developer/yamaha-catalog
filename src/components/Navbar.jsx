import { Box, List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";


export default function Navbar()
{
    return (
        <>
            <Box
                as="nav"
                p={4}

            >
                <List display='flex'
                    flexDirection={{ base: 'row', md: 'column' }}
                >
                    <ListItem mr={{ base: '10px', md: '0px' }}>
                        <NavLink to="/" >
                            Home
                        </NavLink>
                    </ListItem>

                    <ListItem mr={{ base: '10px', md: '0px' }}>
                        <NavLink to="/test-drive" >
                            Drive
                        </NavLink>
                    </ListItem>

                    <ListItem mr={{ base: '10px', md: '0px' }}>
                        <NavLink to="/profile">
                            Profile
                        </NavLink>
                    </ListItem>

                    <ListItem mr={{ base: '10px', md: '0px' }}>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}
