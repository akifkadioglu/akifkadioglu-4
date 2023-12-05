/* core */
import Image from "next/image"

export const Header = () => {
    const appLogoSize = 250


    return (
        <div >
            <div className='flex justify-center'>
                <Image src='/logo.webp' width={appLogoSize} height={appLogoSize} alt='logo' priority />
            </div>
            <div className='flex justify-center'>
                <h1 className='hover:underline text-3xl'>Akif Kadioglu</h1>
            </div>
        </div>
    )
}