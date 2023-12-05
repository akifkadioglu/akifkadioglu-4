/* css */
import './globals.css'

/* core */
import type { Metadata } from 'next'

/* providers */
import { Providers } from './providers'

/* component */
import { ThemeSwitch } from '@/components/ThemeSwitcher'

export const metadata: Metadata = {
  title: 'Akif Kadioglu',
  description: 'Software developer and Graffiti artist.',
  keywords: ["Software", "Developer", "Graffiti", "Artist", "Flutter", "React", "Next", "Vue", "Golang", "Backend", "Frontend"],
  manifest: "https://raw.githubusercontent.com/akifkadioglu/akifkadioglu-4/main/public/manifest.json",
  openGraph: {
    title: "Akif Kadioglu",
    description: "Software developer and Graffiti artist.",
    url: "https://www.akifkadioglu.dev",
    images: [
      {
        url: "https://raw.githubusercontent.com/akifkadioglu/akifkadioglu-4/main/public/card.png",
        width: 800,
        height: 418,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akif Kadioglu",
    description: "Software developer and Graffiti artist.",
    images: [
      {
        url: "https://raw.githubusercontent.com/akifkadioglu/akifkadioglu-4/main/public/card.png",
        width: 800,
        height: 418,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className='container mx-auto font-mono px-3 dark:bg-zinc-900 dark:text-zinc-100'>
        <Providers>
          <div className="mt-5 text-end">
            <ThemeSwitch />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
