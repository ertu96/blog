import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { cx } from '@/utils'

import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import siteMetadata from '../utils/siteMetaData'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-in',
})
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mr',
})

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title,
    },
    description: siteMetadata.description,
    openGraph: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.title,
        images: [siteMetadata.socialBanner],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: siteMetadata.title,
        images: [siteMetadata.socialBanner],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={cx(
                    inter.variable,
                    manrope.variable,
                    'bg-light font-mr dark:bg-dark '
                )}
            >
                <Script id="darkMode">
                    {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark')
                          } else {
                            document.documentElement.classList.remove('dark')
                          }`}
                </Script>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
