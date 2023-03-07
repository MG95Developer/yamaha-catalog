import { useState } from "react"
import { Box, Text, Heading } from '@chakra-ui/react'
import { ExternalLink } from "react-external-link"


function Accordion()
{

    const [selected, setSelected] = useState( null )

    const toggle = ( i ) =>
    {
        if ( selected === i )
        {
            return setSelected( null )
        }
        setSelected( i )
    }

    const titleStyles = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        borderTop: "1px solid rgba( 255, 255, 255, 0.2 )",
        textTransform: "uppercase",
        _hover: {
            color: "#c80226"
        }
    }

    const contentStyles = {
        color: "white",
        maxHeight: 0,
        overflow: "hidden",
        transition: "all 0.5s cubic - bezier( 0, 1, 0, 1 )"
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" w="full" h="auto">

            <Box w="100%">
                {footerLinks.map( ( e, i ) =>
                (
                    <Box marginBottom="5px" color="black" cursor="pointer" key={e.id}>

                        <Box sx={titleStyles} onClick={() => toggle( i )}>
                            <Heading as="h2" fontSize={15}>{e.title}</Heading>
                            <Text as="span">{selected === i ? '-' : '+'}</Text>
                        </Box>

                        <Box sx={contentStyles} className={selected === i ? 'content show' : ''}>
                            {
                                e.url.map( ( item, index ) =>
                                {
                                    return (
                                        <Box key={index.id}>
                                            <Text as="p" padding="15px 0px 15px 0px" fontSize=".9em" fontWeight="500">
                                                <ExternalLink href={item.link} target="_blank">
                                                    {item.question}
                                                </ExternalLink>
                                            </Text>
                                        </Box>
                                    )
                                } )
                            }
                        </Box>
                    </Box>
                )
                )}
            </Box>
        </Box >
    )
}


const footerLinks = [
    {
        title: 'Need help?',
        url: [
            {
                question: "Contact Us",
                link: "https://yamaha-motor.com/contact"
            },
            {
                question: "Customer Service",
                link: "https://yamaha-motor.com/customer-service"
            },
            {
                question: "NHTSA On-Road Recalls",
                link: "https://www.yamaha-dealers.com/public/web/techpubs/nhtsaPublications.html"
            },
            {
                question: "CPSC Recalls",
                link: "https://www.yamahamotorsports.com/motorsports/pages/cpsc-recalls"
            },
            {
                question: "Returns",
                link: "https://yamaha-motor.com/help/returns"
            },
            {
                question: "Manuals",
                link: "https://www.yamahapubs.com/"
            }
        ]
    },
    {
        title: 'Shop now',
        url: [
            {
                question: "Gear & Apparel",
                link: "https://yamaha-motor.com/shop/gear"
            },
            {
                question: "Parts",
                link: "https://yamaha-motor.com/parts"
            },
            {
                question: "Maintenance",
                link: "https://yamaha-motor.com/shop/maintenance"
            },
            {
                question: "Find a Dealer",
                link: "https://yamaha-motor.com/find-dealer"
            },
            {
                question: "About Yamalube",
                link: "https://yamaha-motor.com/about-yamalube"
            },
            {
                question: "Digital Catalogs",
                link: "https://yamaha-motor.com/digital-catalogs"
            }
        ]
    },
    {
        title: 'Inside Yamaha',
        url: [
            {
                question: "Our Story",
                link: "https://yamaha-motor.com/our-story"
            },
            {
                question: "News",
                link: "https://yamaha-motor.com/news"
            },
            {
                question: "Career Opportunities",
                link: "https://yamaha-motor.com/careers"
            },
            {
                question: "Yamaha Extended Service",
                link: "https://www.yamaha-motor-yes.com/"
            },
            {
                question: "Yamaha Financial Services",
                link: "https://www.yamaha-motor-finance.com/"
            },
            {
                question: "Yamaha Motor Global",
                link: "https://global.yamaha-motor.com/"
            },
            {
                question: "Music & Electronics",
                link: "https://usa.yamaha.com/"
            }
        ]
    },
    {
        title: 'Our brands',
        url: [
            {
                question: "Bennett Marine",
                link: "https://bennetttrimtabs.com/"
            },
            {
                question: "G3 Boats",
                link: "https://www.g3boats.com/"
            },
            {
                question: "Golf Car",
                link: "https://www.yamahagolfcar.com/"
            },
            {
                question: "Motorsports",
                link: "https://www.yamahamotorsports.com/motorcycle"
            },
            {
                question: "NAVI Mobility Systems",
                link: "https://yamahanavi.com/"
            },
            {
                question: "Outboards",
                link: "https://yamahaoutboards.com/en-us/"
            },
            {
                question: "Power Assist Bicycles",
                link: "https://www.yamahabicycles.com/"
            },
            {
                question: "Power Products",
                link: "https://www.yamahamotorsports.com/power-product"
            },
            {
                question: "Remotely Piloted Helicopters",
                link: "https://www.yamahamotorsports.com/motorsports/pages/precision-agriculture"
            },
            {
                question: "Skeeter Boats",
                link: "https://www.skeeterboats.com/"
            },
            {
                question: "SMT Innovations",
                link: "https://www.yamaha-motor-im.com/"
            },
            {
                question: "WaveRunners",
                link: "https://www.yamahawaverunners.com/"
            },
            {
                question: "Yamaha Boats",
                link: "https://www.yamahaboats.com/"
            }
        ]
    }
]

export default Accordion;