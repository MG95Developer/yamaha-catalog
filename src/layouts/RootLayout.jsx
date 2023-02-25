import { Container, Grid, GridItem, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Section from "../components/Section"

{/* BUILDING THE CHAKRA GRID (12 cols layout) BELOW */ }

export default function RootLayout()
{
  return (
    <>
      <Container maxWidth="1850px" p="0">
        <Grid templateColumns="repeat(12, 1fr)">

          <GridItem
            as="section"
            border="6px solid brown"
            colSpan={{ base: 12 }}
            minHeight={{ base: '120px', md: "100px" }}
            p={{ base: '10px' }}
          >

            <Box border="3px solid red">
              <Section /> {/* Section CUSTOM component */}
            </Box>

          </GridItem> {/* TOP SECTION GRID ITEM / */}

          <GridItem
            as="nav"
            border="6px solid purple"
            colSpan={{ base: 12, md: 4, lg: 4, xl: 3 }}
            minHeight={{ base: '120px' }}
            p={{ base: '10px' }}
          >

            <Box border="3px solid red">
              <Navbar /> {/* Navbar CUSTOM component */}
            </Box>

          </GridItem> {/* NAVBAR GRID ITEM / */}

          <GridItem
            as="main"
            border="6px solid green"
            colSpan={{ base: 12, md: 8, lg: 8, xl: 9 }}
            minHeight={{ base: '100vh' }}
            p={{ base: '10px' }}
          >

            <Box border="3px solid red">
              <span>(Outlet component display the page name)</span>
              <br />
              <br />
              <Outlet />
            </Box>

          </GridItem> {/* MAIN CONTENT GRID ITEM: PAGES / */}

          <GridItem
            as="footer"
            border="6px solid pink"
            colSpan={{ base: 12 }}
            minHeight={{ base: '80px', md: '150px' }}
            p={{ base: '10px' }}
          >

            <Box border="3px solid red">
              <Footer /> {/* Footer CUSTOM component */}
            </Box>

          </GridItem> {/* FOOTER GRID ITEM / */}

        </Grid>
      </Container>

    </>
  )
}
