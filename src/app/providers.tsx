
'use client'
interface Provider {
    children: any;
}

/* library */
import { motion } from "framer-motion"
import { ThemeProvider } from 'next-themes'

export const Providers: React.FC<Provider> = ({ children }) => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <ThemeProvider defaultTheme="light">
                {children}
            </ThemeProvider>
        </motion.main>
    )
}