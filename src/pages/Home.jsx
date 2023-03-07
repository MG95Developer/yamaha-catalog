// 0 - You need to have json server installed in your machine OR IT WILL NOT WORK!!!!!
// ( npm i -g json-server)


// 1 - useLoaderData
import { useLoaderData } from "react-router-dom"

import { ViewIcon } from "@chakra-ui/icons"
import
{
  Box,
  SimpleGrid,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Image,
  Spacer
} from "@chakra-ui/react"


import { ExternalLink } from "react-external-link";
import { Link } from 'react-router-dom'

export default function Home()
{
  const motorcycles = useLoaderData();

  const buttonStyles = {
    width: "200px",
    color: "white",
    backgroundColor: "yamaha.red",
    transitionDelay: ".3s",
    marginBottom: "20px",
    _hover: {
      backgroundColor: "yamaha.lightGrey",
      color: "white"
    }
  }

  const financialServices = {
    color: "yamaha.darkGrey",
    fontWeight: "600",
    _hover: {
      color: "yamaha.red"
    }
  }

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>

      {motorcycles && motorcycles.map( vehicle => (
        <Card key={vehicle.id} borderTop="2px solid #c80226">
          <Box position="relative">
            <Text position="absolute" top="0" right="0">
              {vehicle.isNew && vehicle.isNew ?
                <Box bg="yamaha.red" borderBottomLeftRadius="250px" borderBottomRightRadius="250px" mt={1} mr={1}>
                  <Text p={3} textTransform="uppercase" color="white" fontWeight="800">new</Text>
                </Box>
                : <></>}
            </Text>
          </Box>
          <CardHeader>
            <Text my={2} color="yamaha.lightGrey" fontWeight="500" opacity=".5">{vehicle.category}</Text>

            <HStack>
              <Heading as="h2" fontSize={{ base: "28px", md: "23px", lg: "25px" }}>{vehicle.title}</Heading>
              <Spacer />
              <Text color="yamaha.lightGrey" fontWeight="500">{vehicle.model}</Text>
            </HStack>
            <Divider pt={3} />
            <Box>
              <Image src={vehicle.img} alt={vehicle.title} />
            </Box>
          </CardHeader>

          <CardBody>
            <HStack py={1}>
              <Text fontWeight="500" fontSize="1.1em">Engine: {vehicle.engine}</Text>
              <Spacer />
              <Text color="#039" fontWeight="700">$ {vehicle.price}</Text>
            </HStack>
            <Box py={2}>
              <Text fontWeight="500" fontSize="1em" >Colors: {vehicle.colors}</Text>
              <Text fontWeight="500" py={2}>
                {vehicle.year == "2023" ? <Text color="yamaha.red">{vehicle.year} Model</Text> : <Text color="yamaha.darkGrey">{vehicle.year} Model</Text>}
              </Text>
            </Box>

            <Box mt={5} height="170px" display="flex" justifyContent="center" alignItems="start">
              <Text>{vehicle.description}</Text>
            </Box>

            <Box mt={2}>
              <ExternalLink href="https://www.yamaha-motor-finance.com/" target="_blank">
                <Box w="full" display="flex" justifyContent={{ base: "center", lg: "flex-end" }}>
                  <HStack sx={financialServices}>
                    <Text>Yamaha Finacial Services</Text>
                    <ViewIcon />
                  </HStack>
                </Box>

              </ExternalLink>
            </Box>



          </CardBody>

          <CardFooter py="0">
            <Box w="full" display="flex" justifyContent={{ base: "center", lg: "flex-end" }}>
              <Link to="/test-drive">
                {vehicle.inStock && vehicle.inStock == true ? <Button sx={buttonStyles}>Schedule a Test Drive</Button> : <></>}
              </Link>
            </Box>

          </CardFooter>
        </Card >
      ) )
      }
    </SimpleGrid >
  )
}

// 2 - loader function
export const motorcyclesLoader = async () =>
{
  const res = await fetch( 'http://localhost:3000/motorcycles' )

  return res.json()
}

// 3 - inside App.jsx pass the loader w/ function to the correct route and import the function the the page (lines 11 & 21)