import { sortBlogs } from '@/utils'
import { Blog } from '../../../.contentlayer/generated/types'
import BlogLayoutOne from '../blog/BlogLayoutOne'
import BlogLayoutTwo from '../blog/BlogLayoutTwo'

type FeaturedPostsProps = {
    blogs: Blog[]
}

const FeaturedPosts = ({ blogs }: FeaturedPostsProps) => {
    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className="mt-16 sm:mt-24 md:mt-32 flex w-full flex-col items-center justify-center px-5 sm:px-10 md:px-24 sxl:px-32">
            <h2 className="inline-block w-full text-2xl md:text-4xl font-bold capitalize text-dark dark:text-light">
                Featured Posts
            </h2>
            <div className="sm:mt-16 mt-10 grid grid-cols-2 grid-rows-2 gap-6">
                <article className="relative sxl:col-span-1 col-span-2 row-span-2">
                    <BlogLayoutOne blog={sortedBlogs[1]} />
                </article>
                <article className="relative sm:col-span-1 col-span-2 row-span-1">
                    <BlogLayoutTwo blog={sortedBlogs[2]} />
                </article>
                <article className="relative sm:col-span-1 col-span-2 row-span-1">
                    <BlogLayoutTwo blog={sortedBlogs[3]} />
                </article>
            </div>
        </section>
    )
}

export default FeaturedPosts
