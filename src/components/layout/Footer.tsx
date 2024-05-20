'use client'

import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../Icons'
import siteMetadata from '../../utils/siteMetaData'

type FormValues = {
    email: string
}

const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        <footer className="sm:m-10 m-2 mt-16 flex flex-col items-center rounded-2xl bg-dark text-light dark:bg-accentDark/90 dark:text-dark">
            <h3 className="lg:text-4xl sm:text-3xl mt-16 px-4 text-center text-2xl font-medium capitalize dark:font-bold">
                Interesting Stories | Updates | Guides
            </h3>
            <p className="sm:text-base sm:w-3/5 mt-5 w-full px-4 text-center text-xs font-light dark:font-medium">
                Subscribe to learn about new technology and updates. Join over
                5000+ members community to stay up to date with latest news.
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="sm:min-w-[384px] sm:p-2 mx-4 mt-6 flex w-fit items-stretch rounded bg-light p-1 dark:bg-dark"
            >
                <input
                    type="email"
                    placeholder="Enter your Email"
                    {...register('email', {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                    className="sm:pl-0 mr-2 w-full border-0 border-b bg-transparent pb-1 pl-2 text-dark focus:border-dark focus:ring-0"
                />

                <input
                    type="submit"
                    className="sm:px-5 cursor-pointer rounded bg-dark px-3 py-1 pl-0 font-medium text-light dark:bg-light dark:text-dark"
                />
            </form>
            <div className="mt-8 flex items-center">
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
                    <GithubIcon className="ease fill-light transition-all duration-200 hover:scale-125 dark:fill-dark" />
                </a>
                <a
                    href={siteMetadata.dribbble}
                    className="mr-4 inline-block h-6 w-6"
                >
                    <DribbbleIcon className="ease transition-all duration-200 hover:scale-125" />
                </a>
            </div>
            <div className="md:mt-24 md:flex-row relative mt-16 flex w-full flex-col items-center justify-between border-t border-solid border-light px-8 py-6 font-medium">
                <span className="text-center">
                    &copy; 2023 CodeBucks. All rights reserved.
                </span>
                <Link
                    className="md:my-0 my-4 text-center underline"
                    href="/sitemap.xml"
                >
                    sitemap.xml
                </Link>
                <div className="text-center">
                    Made with &hearts; by{' '}
                    <a
                        href="https://ertugrul-kurnaz.com/"
                        className="underline"
                        target="_blank"
                    >
                        Ertugrul Kurnaz
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
