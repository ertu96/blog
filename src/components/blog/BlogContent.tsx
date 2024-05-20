'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { Blog } from 'contentlayer/generated'

type BlogContentProps = {
    blog: Blog
}

const mdxComponents = {
    Image,
}

const BlogContent = ({ blog }: BlogContentProps) => {
    const MDXContents = useMDXComponent(blog.body.code)
    return (
        <div
            className="lg:col-span-8 sm:prose-base md:prose-lg sm:first-letter:text-5xl prose col-span-12 max-w-max
    font-in
    dark:prose-invert
    first-letter:text-3xl
    prose-blockquote:rounded-r-lg
    prose-blockquote:border-accent
    prose-blockquote:bg-accent/20
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:not-italic
    prose-li:marker:text-accent
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark
    "
        >
            <MDXContents components={mdxComponents} />
        </div>
    )
}

export default BlogContent
