import { slug } from 'github-slugger'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'
import Tag from '../elements/Tag'

type BlogLayoutOneProps = {
    blog: Blog
}

const BlogLayoutOne = ({ blog }: BlogLayoutOneProps) => {
    return (
        <div className="group inline-block overflow-hidden rounded-xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90" />
            <Image
                src={blog.image?.filePath.replace('../public', '') || ''}
                placeholder="blur"
                blurDataURL={blog.image?.blurhashDataUrl}
                alt={blog.title}
                height={blog.image?.height || 0}
                width={blog.image?.width || 0}
                sizes="(max-width: 1180px) 100vw, 50vw"
                className=" ease h-full w-full cursor-pointer rounded-xl object-cover object-center transition-all duration-500 group-hover:scale-105"
            />
            <div className="xs:p-6 sm:p-10 absolute bottom-0 z-20 w-full p-4">
                {blog.tags && blog.tags.length > 0 && (
                    <Tag
                        name={blog.tags[0]}
                        link={`/categories/${slug(blog.tags[0])}`}
                        className="sm:py-2 sm:text-sm !border px-6 py-1 text-xs"
                    />
                )}
                <Link href={blog.url} className="mt-6">
                    <h2 className="sm:mt-4 xs:text-base sm:text-xl md:text-2xl mt-2 text-sm font-bold capitalize text-light">
                        <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}

export default BlogLayoutOne
