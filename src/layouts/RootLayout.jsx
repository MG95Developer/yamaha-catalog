import { Container, Grid, GridItem, Box, HStack, Spacer } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Alert from "../components/AlertUser"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Section from "../components/Section"
import SocialMediaIcons from "../components/SocialMediaIcons"


export default function RootLayout()
{

  return (
    <>
      <Container maxWidth="1920px" p="0">
        <Alert />

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
            p={{ base: '10px' }}
          >

            <Navbar />

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

            <Footer />

          </GridItem>
        </Grid>
      </Container>

    </>
  )
}
