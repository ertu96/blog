import { sortBlogs } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from "../../../.contentlayer/generated/types"
import Tag from '../elements/Tag'

type HomeCoverSectionProps = {
    blogs: Blog[]
}

const HomeCoverSection = ({ blogs }: HomeCoverSectionProps) => {
    const sortedBlogs = sortBlogs(blogs)
    const blog = sortedBlogs[0]

    return (
        <div className='w-full inline-block'>
            <article className="relative mx-10 flex h-[85vh] w-full flex-col items-start justify-end">
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0'>

            </div>
            <Image
                src={blog.image.filePath.replace('../public', '')}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                fill
                className="h-full w-full rounded-3xl object-cover object-center -z-10"
            />
            <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
                <Tag name={blog.tags[0]} />
                <Link href={blog.url} className="mt-6">
                <h1 className="font-bold capitalize text-light text-4xl">
                    <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">{blog.title}</span>
                    </h1>
                </Link>
                <p className="inline-block mt-4 text-xl font-in ">
                    {blog.description}
                </p>
            </div>
            </article>
        </div>

    )
}

export default HomeCoverSection
