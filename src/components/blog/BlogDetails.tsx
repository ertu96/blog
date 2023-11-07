import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'

type BlogDetailsProps = {
    blog: Blog
    slug: string
}

const BlogDetails = ({ blog, slug }: BlogDetailsProps) => {
    return (
        <div className="mx-10 flex flex-wrap items-center justify-around rounded-lg bg-accent px-10 py-2 text-xl font-medium text-light">
            <time className="m-3">
                {format(parseISO(blog.publishedAt), 'dd.MM.yyyy')}
            </time>
            <span>10 views</span>
            <div className="m-3">{blog.readingTime.text}</div>
            <Link
                href={`/categories/${blog.tags && blog.tags[0]}`}
                className="m-3"
            >
                #{blog.tags && blog.tags[0]}
            </Link>
        </div>
    )
}

export default BlogDetails
