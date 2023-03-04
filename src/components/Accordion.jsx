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
                question: "Contact us",
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
        title: 'Need help?',
        url: [
            {
                question: "Contact us",
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


]

export default Accordion