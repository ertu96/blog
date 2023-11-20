import Link from 'next/link'

import siteMetadata from '@/utils/siteMetaData'
import {
    DribbbleIcon,
    GithubIcon,
    LinkedinIcon,
    SunIcon,
    TwitterIcon,
} from '../Icons'
import Logo from './Logo'

const Header = () => {
    return (
        <header className="flex w-full items-center justify-between p-4 px-10">
            <Logo />
            <nav className="fixed right-1/2 top-6 z-50 flex w-max translate-x-1/2 items-center gap-x-4 rounded-full border border-solid border-dark bg-light/80 px-8 py-3 font-medium capitalize backdrop-blur-sm">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <button>
                    <SunIcon className="" />
                </button>
            </nav>
            <div>
                <a
                    href={siteMetadata.linkedin}
                    className="mr-4 inline-block h-6 w-6"
                >
                    <LinkedinIcon className="ease transition-all duration-200 hover:scale-125" />
                </a>
                <a
                    href={siteMetadata.twitter}
                    className="mr-4 inline-block h-6 w-6"
                >
                    <TwitterIcon className="ease transition-all duration-200 hover:scale-125" />
                </a>
                <a
                    href={siteMetadata.github}
                    className="mr-4 inline-block h-6 w-6"
                >
                    <GithubIcon className="ease transition-all duration-200 hover:scale-125" />
                </a>
                <a
                    href={siteMetadata.dribbble}
                    className="mr-4 inline-block h-6 w-6"
                >
                    <DribbbleIcon className="ease transition-all duration-200 hover:scale-125" />
                </a>
            </div>
        </header>
    )
}

export default Header
