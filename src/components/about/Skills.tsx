const skills = [
    'next.js',
    'tailwind css',
    'figma',
    'javaScript',
    'web design',
    'Gatsby.js',
    'strapi',
    'firebase',
    'generative AI',
    'wireframing',
    'SEO',
    'framer motion',
    'sanity',
]

const Skills = () => {
    return (
        <section className="xs:p-10 sm:p-12 md:p-16 lg:p-20 flex w-full flex-col border-b-2 border-solid border-dark p-5 text-dark dark:border-light dark:text-light">
            <span className="md:text-4xl sm:text-3xl text-lg font-semibold text-accent dark:text-accentDark">
                Im comfortable in
            </span>
            <ul className="xs:justify-start mt-8 flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="ease md:mb-6 md:mr-6 xs:mr-4 xs:mb-4 xs:px-6 sm:px-8 lg:px-12 xs:py-3 sm:py-4 lg:py-5 sm:text-xl xs:text-lg md:text-2xl mb-3 mr-3 inline-block cursor-pointer rounded border-2 border-solid border-dark px-4 py-2 text-base font-semibold capitalize transition-all duration-200 hover:scale-105 dark:border-light dark:font-normal"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
