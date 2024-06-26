'use client'

import { useForm } from 'react-hook-form'

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(errors)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" xs:text-lg sm:text-xl mt-12 font-in text-base font-medium leading-relaxed "
        >
            Hello my name is
            <input
                type="text"
                placeholder="name"
                {...register('name', { required: true, pattern: /^\S+@\S+$/i })}
                className="mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg focus:border-gray focus:ring-0"
            />
            and I want to discuss a potential project with you. You can email me
            at
            <input
                type="email"
                placeholder="email"
                {...register('email', {})}
                className="mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg focus:border-gray focus:ring-0"
            />
            or reach out to me on
            <input
                type="tel"
                placeholder="telephone"
                {...register('telephone', {})}
                className="mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-center placeholder:text-lg focus:border-gray focus:ring-0"
            />
            Here are some details about my project: <br />
            <textarea
                placeholder="my project is about..."
                {...register('projectDetails', {})}
                rows={3}
                className=" mx-2 w-full border-0 border-b border-gray bg-transparent p-0 outline-none  placeholder:text-lg focus:border-gray focus:ring-0"
            />
            <input
                type="submit"
                value="Send Request"
                className="border-darkrounded sm:px-8 sm:py-3 sm:text-xl mt-8 inline-block cursor-pointer border-2 border-solid px-6 py-2 text-lg  font-medium capitalize dark:border-light"
            />
        </form>
    )
}

export default ContactForm
