import Image from 'next/image'
import ProfileCharacter from 'public/character.png'

const AboutCoverSection = () => {
    return (
        <section className="md:h-[75vh] md:flex-row flex w-full flex-col items-center justify-center border-b-2 border-solid border-dark text-dark dark:border-light dark:text-light">
            <div className="md:w-1/2 flex h-full w-full justify-center border-r-2 border-solid border-dark dark:border-light">
                <Image
                    src={ProfileCharacter}
                    alt="Profile Picture"
                    className="xs:w-3/4 md:w-full h-full w-4/5 object-contain object-center"
                />
            </div>
            <div className="md:w-1/2 xs:p-10 lg:px-16 flex w-full flex-col items-start justify-center px-5 pb-10 text-left">
                <h2 className="xs:text-5xl lg:text-left text-center text-4xl font-bold capitalize sxl:text-6xl">
                    Dream Big, Work Hard, Achieve More!
                </h2>
                <p className="mt-4 text-base font-medium capitalize">
                    This Mantra Drives My Work As A Passionate Freelancer. I
                    Blend Innovative Technology With Timeless Design For
                    Captivating Digital Experiences. Inspired By Nature And
                    Literature, I&apos;m A Perpetual Learner Embracing
                    Challenges. With Each Project, I Aim To Leave A Lasting
                    Impact—One Pixel At A Time.
                </p>
            </div>
        </section>
    )
}

export default AboutCoverSection
