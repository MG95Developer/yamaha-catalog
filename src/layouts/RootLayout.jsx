import { Container, Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

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
          >
            section: includes logo to left and social media icons to right
          </GridItem> {/*  */}

          <GridItem
            as="nav"
            border="6px solid purple"
            colSpan={{ base: 12, md: 4, lg: 4, xl: 3 }}
            minHeight={{ base: '120px' }}
          >
            navbar:  includes nav-links to all the 4 pages (home, profile, test drive, contact)
          </GridItem>

          <GridItem
            as="main"
            border="6px solid green"
            colSpan={{ base: 12, md: 8, lg: 8, xl: 9 }}
            minHeight={{ base: '100vh' }}
          >
            Page: <Outlet />
          </GridItem>

          <GridItem
            as="footer"
            border="6px solid pink"
            colSpan={{ base: 12 }}
            minHeight={{ base: '80px', md: '150px' }}
          >
            footer will go here
          </GridItem>

        </Grid>
      </Container>

    </>
  )
}
