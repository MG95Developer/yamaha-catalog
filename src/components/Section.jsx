import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Section()
{
    return (
        <>
            <Link to="/">
                <Image src='../../img/yamaha-logotype.png' alt='Yamaha Logotype' />
            </Link>
        </>
    )
}
