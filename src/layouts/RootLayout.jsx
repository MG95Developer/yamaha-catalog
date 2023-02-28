import { Container, Grid, GridItem, Box, HStack, Spacer, List, ListItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Section from "../components/Section"

import SocialMediaIcons from "../components/SocialMediaIcons"

{/* BUILDING THE CHAKRA GRID (12 cols layout) BELOW */ }

export default function RootLayout()
{



  return (
    <>
      <Container maxWidth="1850px" p="0">
        <Grid templateColumns="repeat(12, 1fr)">

          <GridItem
            as="section"
            colSpan={{ base: 12 }}
            p={{ base: '10px' }}
          >

            <HStack>
              <Box width={{ base: '25%', md: '35%', lg: '30%', xl: '15%' }}>
                <Section /> {/* Section CUSTOM component */}
              </Box>

              <Spacer />

              <Box
                width={{ base: '60%', md: '50%', lg: '60%', xl: '75%' }}
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
              >
                <SocialMediaIcons /> {/* Social Media Icons CUSTOM component */}
              </Box>

            </HStack>

          </GridItem> {/* TOP SECTION GRID ITEM / */}

          <GridItem
            as="nav"
            bg="lightgrey"
            colSpan={{ base: 12, md: 4, lg: 4, xl: 2 }}
            minHeight={{ base: '120px' }}
            p={{ base: '10px' }}
          >

            <Box height="100%" display="flex" justifyContent="center" alignItems="center">
              <Navbar /> {/* Navbar CUSTOM component */}
            </Box>

          </GridItem> {/* NAVBAR GRID ITEM / */}

          <GridItem
            as="main"
            colSpan={{ base: 12, md: 8, lg: 8, xl: 10 }}
            minHeight={{ base: '100vh' }}
            p={{ base: '10px' }}
          >

            <Box border="3px solid red" height="100%">
              <Outlet />
            </Box>

          </GridItem> {/* MAIN CONTENT GRID ITEM: PAGES / */}

          <GridItem
            as="footer"
            bg="lightgrey"
            colSpan={{ base: 12 }}
            minHeight={{ base: '80px', md: '140px' }}
            p={{ base: '10px' }}
          >

            <Box height="100%">
              <Footer /> {/* Footer CUSTOM component */}
            </Box>

          </GridItem> {/* FOOTER GRID ITEM / */}

        </Grid>
      </Container>

    </>
  )
}
