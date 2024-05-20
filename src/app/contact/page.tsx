import ContactForm from '@/components/contact/ContactForm'
import LottieAnimation from '@/components/contact/LottieAnimation'
import siteMetadata from '@/utils/siteMetaData'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Me',
    description: `Contact me through the form or email me at ${siteMetadata.email}.`,
}

const ContactPage = () => {
    return (
        <section className="md:h-[75vh] md:flex-row flex h-auto w-full flex-col items-center justify-center border-b-2 border-solid border-dark text-dark dark:border-light dark:text-light">
            <div className="sm:w-4/5 md:w-2/5 md:border-r-2 inline-block h-full w-full border-solid border-dark dark:border-light">
                <LottieAnimation />
            </div>
            <div className="md:w-3/5 xs:px-10 md:px-16 flex w-full flex-col items-start justify-center px-5 pb-8">
                <h2 className="sm:text-4xl xs:text-3xl text-2xl font-bold capitalize">
                    Lets connect
                </h2>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactPage
