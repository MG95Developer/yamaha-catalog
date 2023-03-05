// fetch json data
import { useLoaderData } from "react-router-dom"

import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import
{
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar
} from "@chakra-ui/react"


export default function Home()
{
  const motorcycles = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>

      {motorcycles && motorcycles.map( vehicle => (
        <>
          <p>     {vehicle.price}</p>

        </>
      ) )}

    </SimpleGrid>
  )
}


export const motorcyclesLoader = async () =>
{
  const res = await fetch( 'http://localhost:3000/motorcycles' )

  return res.json()
}
