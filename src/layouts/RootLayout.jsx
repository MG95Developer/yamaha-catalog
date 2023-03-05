import { Container, Grid, GridItem, Box, HStack, Spacer } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import SocialMediaIcons from "../components/SocialMediaIcons"


export default function RootLayout()
{

  return (
    <>
      <Container maxWidth="1920px" p="0">
        <Grid templateColumns="repeat(12, 1fr)">

          <GridItem
            as="section"
            colSpan={{ base: 12 }}
            p={{ base: '10px' }}
          >

            <HStack>
              <Box width={{ base: '25%', md: '35%', lg: '30%', xl: '15%' }}>
                <Section />
              </Box>

              <Spacer />

              <Box
                width={{ base: '60%', md: '50%', lg: '60%', xl: '75%' }}
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
              >
                <SocialMediaIcons />
              </Box>

            </HStack>

          </GridItem>

          <GridItem
            as="nav"
            bg="yamaha.lightGrey"
            color="#fff"
            colSpan={{ base: 12, md: 4, lg: 4, xl: 2 }}
            minHeight={{ base: '120px' }}
            p={{ base: '10px' }}
          >

            <Box height="100%" display="flex" justifyContent="center" alignItems="center">
              <Navbar />
            </Box>

          </GridItem>

          <GridItem
            as="main"
            colSpan={{ base: 12, md: 8, lg: 8, xl: 10 }}
            p={{ base: '10px' }}
          >
            <Outlet />

          </GridItem>

          <GridItem
            as="footer"
            bg="yamaha.darkGrey"
            colSpan={{ base: 12 }}
          >

            <Box>
              <Footer />
            </Box>

          </GridItem>

        </Grid>
      </Container>

    </>
  )
}
