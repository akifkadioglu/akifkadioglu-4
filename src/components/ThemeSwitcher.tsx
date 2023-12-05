'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { PiMoonFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";

export const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const iconSize = 30
    return (
        <div>
            {
                theme == "dark" ?
                    <button onClick={() => setTheme("light")}>
                        <MdSunny color="#fcd34d" size={iconSize} />
                    </button>
                    :
                    <button onClick={() => setTheme("dark")}>
                        <PiMoonFill color="#083344" size={iconSize} />
                    </button>
            }
        </div>

    )
}

