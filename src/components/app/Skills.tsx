/* icon */
import { FaGolang } from "react-icons/fa6";
import { FaVuejs, FaReact } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";

/* core */
import React from "react";

/* component */
import { Tooltip } from "../Tooltip";


export const Skills = () => {
    const skills = [
        {
            icon: FaVuejs,
            title: "Vue js",
            color: "#41B883"
        },
        {
            icon: FaGolang,
            title: "Golang",
            color: "#00ADD8"
        },
        {
            icon: FaReact,
            title: "React js",
            color: "#61dbfb"
        },
        {
            icon: RiFlutterFill,
            title: "Flutter",
            color: "#42A5F5"
        }
    ]
    const logoSize = 40

    return (
        <div className='flex items-center justify-center'>
            {
                skills.map((e, index) =>
                    <React.Fragment key={index} >
                        <Tooltip tooltip={e.title}>
                            <e.icon key={index} size={logoSize} color={e.color} />
                        </Tooltip>
                    </React.Fragment >
                )
            }
        </div>
    )
}