/* core */
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="text-center font-mono my-10 space-y-3">
            <div className="space-x-2">
                <span>You can access the</span>
                <Link
                    target="_blank"
                    href="https://github.com/akifkadioglu/akifkadioglu-4"
                    className="transition duration-300 font-bold text-xl hover:underline"
                >
                    source codes
                </Link>
                <span>of this website on Github</span>
            </div>
            <div className="space-x-2">
                <span>also you can</span>
                <Link
                    target="_blank"
                    href="https://www.buymeacoffee.com/akifkadioglu"
                    className="transition duration-300 font-bold text-xl hover:underline"
                >
                    buy me
                </Link>
                <span>a coffee :)</span>

            </div>
        </footer>
    )
}