/* utils */
import { routes } from "@/core/routes"

/* core */
import React from "react";
import Link from 'next/link';

export const Links = () => {
    const pages = [

        {
            title: "Resume",
            link: routes.RESUME
        },
    ]
    return (
        <center>
            {
                pages.map((e, index) =>
                    <React.Fragment key={index} >
                        <Link href={e.link} className='underline' target="_blank">
                            {e.title}
                        </Link>
                        {index < pages.length - 1 ? <span className='mx-2'>|</span> : ''}
                    </React.Fragment >
                )
            }
        </center>
    )
}