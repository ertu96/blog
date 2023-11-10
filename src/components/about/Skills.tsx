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
        <section className="flex w-full flex-col border-b-2 border-solid border-dark p-20 text-dark">
            <span className="text-4xl font-semibold text-accent">
                Im comfortable in
            </span>
            <ul className="mt-8 flex flex-wrap justify-start">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="ease mb-6 mr-6 inline-block cursor-pointer rounded border-2 border-solid border-dark px-12 py-5 text-2xl font-semibold capitalize transition-all duration-200 hover:scale-105"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
