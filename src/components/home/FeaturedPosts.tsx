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
        <section className="mt-32 flex w-full flex-col items-center justify-center px-32">
            <h2 className="inline-block w-full text-4xl font-bold capitalize">
                Featured Posts
            </h2>
            <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-6">
                <article className="relative col-span-1 row-span-2">
                    <BlogLayoutOne blog={sortedBlogs[1]} />
                </article>
                <article className="relative col-span-1 row-span-1">
                    <BlogLayoutTwo blog={sortedBlogs[2]} />
                </article>
                <article className="relative col-span-1 row-span-1">
                    <BlogLayoutTwo blog={sortedBlogs[3]} />
                </article>
            </div>
        </section>
    )
}

export default FeaturedPosts
