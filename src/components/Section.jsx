import { Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Section()
{
    return (
        <>
            <Box boxSize='sm'>
                <Link to="/">
                    <Image src='../../public/img/yamaha-logotype.png' alt='Yamaha Logotype' />
                </Link>
            </Box>
        </>
    )
}
