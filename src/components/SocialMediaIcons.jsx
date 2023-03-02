import { List, ListItem } from "@chakra-ui/react"
import { ExternalLink } from 'react-external-link'
import { FaFacebookF, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

export default function SocialMediaIcons()
{
    const topSocialMediaIcons = {
        marginLeft: '10px',
        padding: '15px',
        color: 'yamaha.darkGrey',
        _hover: {
            color: 'yamaha.red',
        }
    }

    return (
        <>
            <List display="flex" flexDirection="row" fontSize={{ base: '18px', md: '22px', lg: '25px' }}>
                <ExternalLink href="https://www.facebook.com/YamahaMotorPortugal/" target="_blank">
                    <ListItem sx={topSocialMediaIcons}>
                        <FaFacebookF />
                    </ListItem>
                </ExternalLink>
                <ExternalLink href="https://twitter.com/YamahaMotorEU" target="_blank">
                    <ListItem sx={topSocialMediaIcons}>
                        <FaTwitter />
                    </ListItem>
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/company/yamaha-corporation" target="_blank">
                    <ListItem sx={topSocialMediaIcons}>
                        <FaLinkedin />
                    </ListItem>
                </ExternalLink>
                <ExternalLink href="https://www.pinterest.com/MaxeysOKC/yamaha/" target="_blank">
                    <ListItem sx={topSocialMediaIcons}>
                        <FaPinterest />
                    </ListItem>
                </ExternalLink>
            </List>
        </>
    )
}
