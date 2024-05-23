import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'

type BlogLayoutTwoProps = {
    blog: Blog
}

const BlogLayoutTwo = ({ blog }: BlogLayoutTwoProps) => {
    return (
        <div className="group grid grid-cols-12 items-center gap-4 text-dark dark:text-dark">
            <Link
                href={blog.url}
                className="lg:col-span-4 col-span-12 h-full overflow-hidden rounded-xl"
            >
                <Image
                    src={blog.image?.filePath.replace('../public', '') || ''}
                    placeholder="blur"
                    blurDataURL={blog.image?.blurhashDataUrl}
                    alt={blog.title}
                    height={blog.image?.height || 0}
                    width={blog.image?.width || 0}
                    sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                    className="ease aspect-square h-full w-full cursor-pointer object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
            </Link>
            <div className="lg:col-span-8 col-span-12 w-full">
                {blog.tags && blog.tags.length > 0 && (
                    <span className="sm:text-sm inline-block w-full text-xs font-semibold uppercase text-accent dark:text-accentDark">
                        {blog.tags[0]}
                    </span>
                )}
                <Link href={blog.url} className="my-1 inline-block">
                    <h2 className="sm:text-lg text-base font-semibold capitalize">
                        <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50">
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <span className="sm:text-base inline-block w-full text-xs font-semibold text-dark/50 text-gray dark:text-light/50">
                    {format(new Date(blog.publishedAt), 'dd.MM.yyyy')}{' '}
                </span>
            </div>
        </div>
    )
}

export default BlogLayoutTwo
