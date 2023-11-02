import HomeSection from '@/components/home/HomeCoverSection'
import { allBlogs } from '../../.contentlayer/generated/index.mjs'

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <HomeSection blogs={allBlogs} />
        </main>
    )
}
