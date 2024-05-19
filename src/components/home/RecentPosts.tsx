import { sortBlogs } from '@/utils'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'
import BlogLayoutThree from '../blog/BlogLayoutThree'

type RecentPostsProps = {
    blogs: Blog[]
}

const RecentPosts = ({ blogs }: RecentPostsProps) => {
    const sortedBlogs = sortBlogs(blogs)

    return (
        <section className=" sm:mt-24 md:mt-32 sm:px-10 md:px-24 mt-16 flex w-full flex-col items-center justify-center px-5 sxl:px-32">
            <div className="flex w-full justify-between">
                <h2 className="md:text-4xl inline-block w-fit text-2xl font-bold capitalize text-dark dark:text-light">
                    Recent Posts
                </h2>
                <Link
                    href="/categories/all"
                    className="md:text-lg inline-block text-base font-medium text-accent underline underline-offset-2 dark:text-accentDark"
                >
                    view all
                </Link>
            </div>
            <div className="sm:grid-cols-2 lg:grid-cols-3 mt-16 grid grid-cols-1 grid-rows-2 gap-16">
                {sortedBlogs.slice(4, 10).map((blog, index) => (
                    <article
                        key={index}
                        className="relative col-span-1 row-span-1"
                    >
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div>
        </section>
    )
}

export default RecentPosts
