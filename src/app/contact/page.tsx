import ContactForm from '@/components/contact/ContactForm'
import LottieAnimation from '@/components/contact/LottieAnimation'

const ContactPage = () => {
    return (
        <section className="flex h-[75vh] w-full flex-row items-center justify-center border-b-2 border-solid border-dark text-dark">
            <div className="inline-block h-full w-2/5 border-r-2 border-solid border-dark">
                <LottieAnimation />
            </div>
            <div className="flex w-3/5 flex-col items-start justify-center px-16 pb-8">
                <h2 className="text-4xl font-bold capitalize">Lets connect</h2>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactPage
