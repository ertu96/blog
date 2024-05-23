import { sortBlogs } from '@/utils'
import { slug } from 'github-slugger'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'
import Tag from '../elements/Tag'

type HomeCoverSectionProps = {
    blogs: Blog[]
}

const HomeCoverSection = ({ blogs }: HomeCoverSectionProps) => {
    const sortedBlogs = sortBlogs(blogs)
    const blog = sortedBlogs[0]

    return (
        <div className="inline-block w-full">
            <article className="sm:mx-10 sm:h-[85vh] relative mx-5 flex h-[60vh] w-full flex-col items-start justify-end">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90" />
                <Image
                    src={blog.image.filePath.replace('../public', '')}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    fill
                    className="-z-10 h-full w-full rounded-3xl object-cover object-center"
                    priority
                />
                <div className="lg:w-3/4 sm:p-8 md:p-12 lg:p-16 z-0 flex w-full flex-col items-start justify-center p-6 text-light">
                    <Tag
                        link={`/categories/${slug(blog.tags[0])}`}
                        name={blog.tags[0]}
                    />
                    <Link href={blog.url} className="mt-6">
                        <h1 className="sm:text-xl md:text-3xl lg:text-4xl text-lg font-bold capitalize text-light">
                            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    <p className="sm:inline-block md:text-lg lg:text-xl mt-4 hidden font-in ">
                        {blog.description}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default HomeCoverSection
