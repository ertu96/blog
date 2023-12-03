'use client'

import siteMetadata from '@/utils/siteMetaData'
import Link from 'next/link'
import { useState } from 'react'
import {
    DribbbleIcon,
    GithubIcon,
    LinkedinIcon,
    SunIcon,
    TwitterIcon,
} from '../Icons'
import { useThemeSwitch } from '../hooks/useThemeSwitch'
import Logo from './Logo'

const Header = () => {
    const [mode, setMode] = useThemeSwitch()
    const [click, setClick] = useState(false)

    const toggle = () => setClick(!click)

    return (
        <header className="flex w-full items-center justify-between p-4 px-5 sm:px-10">
            <Logo />
            <button className="z-50 inline-block sm:hidden" onClick={toggle}>
                <div className="ease w-6 cursor-pointer transition-all duration-300">
                    <div className="relative">
                        <span
                            className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
                            style={{
                                transform: click
                                    ? 'rotate(-45deg) translateY(0)'
                                    : 'rotate(0deg) translateY(6px)',
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
                            style={{
                                opacity: click ? '0' : '1',
                            }}
                        >
                            &nbsp;
                        </span>
                        <span
                            className="ease absolute top-0 inline-block h-0.5 w-full rounded bg-dark transition-all duration-200 dark:bg-light"
                            style={{
                                transform: click
                                    ? 'rotate(45deg) translateY(0)'
                                    : 'rotate(0deg) translateY(-6px)',
                            }}
                        >
                            &nbsp;
                        </span>
                    </div>
                </div>
            </button>

            <nav
                className="ease fixed right-1/2 top-6 z-50 flex w-max translate-x-1/2 items-center gap-x-4 rounded-full border border-solid border-dark bg-light/80 px-6 py-3 font-medium capitalize backdrop-blur-sm transition-all duration-300 sm:hidden sm:px-8"
                style={{
                    top: click ? '1rem' : '-5rem',
                }}
            >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                >
                    <SunIcon className="" />
                </button>
            </nav>

            <nav className="fixed right-1/2 top-6 z-50 hidden w-max translate-x-1/2 items-center gap-x-4 rounded-full border border-solid border-dark bg-light/80 px-8 py-3 font-medium capitalize backdrop-blur-sm sm:flex">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                >
                    <SunIcon className="" />
                </button>
            </nav>
            <div className="hidden items-center sm:flex">
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
                    <GithubIcon className="ease transition-all duration-200 hover:scale-125 dark:fill-light" />
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
