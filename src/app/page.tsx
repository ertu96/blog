import FeaturedPosts from '@/components/home/FeaturedPosts'
import HomeSection from '@/components/home/HomeCoverSection'
import RecentPosts from '@/components/home/RecentPosts'
import { allBlogs } from '../../.contentlayer/generated/index.mjs'
import { Blog } from '../../.contentlayer/generated/types'

export default function Home() {
    const blogs = allBlogs as Blog[]

    return (
        <main className="flex flex-col items-center justify-center">
            <HomeSection blogs={blogs} />
            <FeaturedPosts blogs={blogs} />
            <RecentPosts blogs={blogs} />
        </main>
    )
}
