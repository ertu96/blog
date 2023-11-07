'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { Blog } from '../../../.contentlayer/generated/types'

type BlogContentProps = {
    blog: Blog
}

const mdxComponents = {
    Image,
}

const BlogContent = ({ blog }: BlogContentProps) => {
    const MDXContents = useMDXComponent(blog.body.code)
    return (
        <div className="prose prose-lg prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent prose-blockquote:not-italic prose-blockquote:bg-accent/20 col-span-8 max-w-max font-in">
            <MDXContents components={mdxComponents} />
        </div>
    )
}

export default BlogContent
