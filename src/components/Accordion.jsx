import { useState } from "react"



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

    return (
        <div className="wrapper">
            <div className="accordion">
                {footerLinks.map( ( e, i ) =>
                (
                    <div className="item">

                        <div className="title" onClick={() => toggle( i )}>
                            <h2>{e.title}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>

                        <div className={selected === i ? 'content show' : 'content'} id="content">
                            {
                                e.url.map( item =>
                                {
                                    return (
                                        <div>
                                            <p class="link-info">
                                                <a href={item.link} target="_blank">{item.question}</a>
                                            </p>
                                        </div>
                                    )
                                } )
                            }
                        </div>

                    </div>
                )
                )}
            </div>
        </div >
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