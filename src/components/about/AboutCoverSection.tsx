import Image from 'next/image'
import ProfileCharacter from 'public/character.png'

const AboutCoverSection = () => {
    return (
        <section className="flex h-[75vh] w-full flex-row items-center justify-center border-b-2 border-solid border-dark text-dark">
            <div className="flex h-full w-1/2 justify-center border-r-2 border-solid border-dark">
                <Image
                    src={ProfileCharacter}
                    alt="Profile Picture"
                    className="h-full w-full object-contain object-center"
                />
            </div>
            <div className="flex w-1/2 flex-col items-start justify-center px-16 text-left">
                <h2 className="text-6xl font-bold capitalize">
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
