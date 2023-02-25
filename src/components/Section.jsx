import { Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Section()
{
    return (
        <>
            <Link to="/">
                <Image src='../../public/img/yamaha-logotype.png' alt='Yamaha Logotype' width="100%" heigth="auto" />
            </Link>
        </>
    )
}
