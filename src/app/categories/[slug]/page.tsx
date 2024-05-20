import BlogLayoutThree from '@/components/blog/BlogLayoutThree'
import Categories from '@/components/blog/Categories'
import GithubSlugger, { slug } from 'github-slugger'
import { allBlogs } from '../../../../.contentlayer/generated/index.mjs'

type CategoryPageProps = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const categories: string[] = []
    const paths = [{ slug: 'all' }]

    const slugger = new GithubSlugger()

    allBlogs.map((blog) => {
        if (blog.isPublished) {
            blog.tags.map((tag) => {
                const slugified = slugger.slug(tag)
                if (!categories.includes(slugified)) {
                    categories.push(slugified)
                    paths.push({ slug: slugified })
                }
            })
        }
    })

    return paths
}

export async function generateMetadata({ params }: CategoryPageProps) {
    return {
        title: `${params.slug.replaceAll('-', ' ')} Blogs`,
        description: `Learn more about ${
            params.slug === 'all' ? 'web development' : params.slug
        } through our collection of export blogs and tutorials.`,
    }
}

const CategoryPage = ({ params }: CategoryPageProps) => {
    const allCategories = ['all']

    const blogs = allBlogs.filter((blog) => {
        return blog.tags.some((tag) => {
            const slugified = slug(tag)
            if (!allCategories.includes(slugified))
                allCategories.push(slugified)
            if (params.slug === 'all') return true
            return slugified === params.slug
        })
    })
    return (
        <article className="mt-12 flex flex-col text-dark dark:text-light">
            <div className="md:px-24 sm:px-10 flex flex-col px-5 sxl:px-32">
                <h1 className="lg:text-5xl md:text-4xl mt-6 text-2xl font-semibold ">
                    #{params.slug}
                </h1>
                <span className="mt-2 inline-block">
                    Discover more categories and expand your knowledge
                </span>
            </div>
            <Categories
                categories={allCategories}
                activeCategory={params.slug}
            />
            <div className="lg:grid-cols-3 sm:grid-cols-2 sm:px-10 md:px-24 sm:mt-10 md:mt-24 mt-5 grid grid-cols-1 grid-rows-2 gap-16 px-5 sxl:mt-32 sxl:px-32">
                {blogs.map((blog, index) => (
                    <article
                        key={index}
                        className="relative col-span-1 row-span-1"
                    >
                        <BlogLayoutThree blog={blog} />
                    </article>
                ))}
            </div>
        </article>
    )
}

export default CategoryPage
