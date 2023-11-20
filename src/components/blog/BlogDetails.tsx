import { format, parseISO } from 'date-fns'
import { slug } from 'github-slugger'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'
import ViewCounter from './ViewCounter'

type BlogDetailsProps = {
    blog: Blog
    slug: string
}

const BlogDetails = ({ blog, slug: blogSlug }: BlogDetailsProps) => {
    return (
        <div className="mx-10 flex flex-wrap items-center justify-around rounded-lg bg-accent px-10 py-2 text-xl font-medium text-light">
            <time className="m-3">
                {format(parseISO(blog.publishedAt), 'dd.MM.yyyy')}
            </time>
            <span>
                <ViewCounter slug={blogSlug} />
            </span>
            <div className="m-3">{blog.readingTime.text}</div>
            {blog.tags && (
                <Link
                    href={`/categories/${slug(blog.tags[0])}`}
                    className="m-3"
                >
                    #{blog.tags && blog.tags[0]}
                </Link>
            )}
        </div>
    )
}

export default BlogDetails
