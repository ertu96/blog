import AboutCoverSection from '@/components/about/AboutCoverSection'
import Skills from '@/components/about/Skills'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About me',
    description: `Here are some details about myself`,
}

const AboutPage = () => {
    return (
        <>
            <AboutCoverSection />
            <Skills />
            <h2 className="md:text-2xl xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 mx-5 mt-8 self-start text-lg font-semibold text-dark dark:font-normal dark:text-light">
                Have a project in mind? Reach out to me 📞 from{' '}
                <Link href="/contact" className="!underline underline-offset-2">
                    here
                </Link>{' '}
                and lets make it happen.
            </h2>
        </>
    )
}

export default AboutPage
