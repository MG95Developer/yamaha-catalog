import { Container, Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

{/* BUILDING THE CHAKRA GRID (12 cols layout) BELOW */ }

export default function RootLayout()
{
  return (
    <>
      <Container border="4px solid orange" maxWidth="1850px" p="0">
        <Grid templateColumns="repeat(12, 1fr)" bg="gray.50">

          <GridItem
            as="section"
            bg="brown"
            colSpan={{ base: 12 }}
          >
            section: includes logo to left and social media icons to right
          </GridItem> {/*  */}

          <GridItem
            as="nav"
            bg="purple.400"
            colSpan={{ base: 12 }}
          >
            navbar:  includes nav-links to all the 4 pages (home, profile, test drive, contact)
          </GridItem>

          <GridItem
            as="main"
            bg="green.400"
            colSpan={{ base: 12 }}
          >
            Page: <Outlet />
          </GridItem>

          <GridItem
            as="footer"
            bg="pink.400"
            colSpan={{ base: 12 }}
          >
            footer:  footer content.
          </GridItem>

        </Grid>
      </Container>

    </>
  )
}
