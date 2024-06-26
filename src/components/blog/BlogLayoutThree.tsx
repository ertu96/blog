import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../../../.contentlayer/generated/types'

type BlogLayoutThreeProps = {
    blog: Blog
}

const BlogLayoutThree = ({ blog }: BlogLayoutThreeProps) => {
    return (
        <div className="group flex flex-col items-center text-dark dark:text-light">
            <Link href={blog.url} className="h-full overflow-hidden rounded-xl">
                <Image
                    src={blog.image?.filePath.replace('../public', '') || ''}
                    placeholder="blur"
                    blurDataURL={blog.image?.blurhashDataUrl}
                    alt={blog.title}
                    height={blog.image?.height || 0}
                    width={blog.image?.width || 0}
                    sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                    className="ease aspect-[4/3] h-full w-full cursor-pointer object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
            </Link>
            <div className="mt-4 flex w-full flex-col">
                {blog.tags && blog.tags.length > 0 && (
                    <span className="sm:text-sm text-xs font-semibold uppercase text-accent dark:text-accentDark">
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
                <span className="sm:text-base text-xs font-semibold capitalize text-dark/50 dark:text-light/50">
                    {format(new Date(blog.publishedAt), 'dd.MM.yyyy')}
                </span>
            </div>
        </div>
    )
}

export default BlogLayoutThree
