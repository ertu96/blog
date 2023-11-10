import AboutCoverSection from '@/components/about/AboutCoverSection'
import Skills from '@/components/about/Skills'
import Link from 'next/link'

const AboutPage = () => {
    return (
        <>
            <AboutCoverSection />
            <Skills />
            <h2 className="mx-20 mt-8 self-start text-2xl font-semibold text-dark ">
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
