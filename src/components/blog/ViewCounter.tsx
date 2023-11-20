'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

const supabase = createClientComponentClient()

type ViewCounterProps = {
    slug: string
    noCount?: boolean
    showCount?: boolean
}

const ViewCounter = ({
    slug,
    noCount = false,
    showCount = true,
}: ViewCounterProps) => {
    const [views, setViews] = useState(0)

    useEffect(() => {
        const incrementView = async () => {
            try {
                const { data, error } = await supabase.rpc('increment', {
                    slug_text: slug,
                })
                if (error)
                    console.error(
                        'Error incrementing view count inside try block: ',
                        error
                    )
            } catch (error) {
                console.error(
                    'An error occured while incrementing the view count: ',
                    error
                )
            }
        }
        if (!noCount) incrementView()
    }, [noCount, slug])

    useEffect(() => {
        const getViews = async () => {
            try {
                const { data, error } = await supabase
                    .from('views')
                    .select('count')
                    .match({ slug })
                    .single()
                if (error)
                    console.error(
                        'Error selecting view count inside try block: ',
                        error
                    )
                console.log('data', data)

                setViews(data ? data.count : 0)
            } catch (error) {
                console.error(
                    'An error occured while selecting the view count: ',
                    error
                )
            }
        }
        getViews()
    }, [slug])

    return showCount ? <div>{views} views</div> : null
}

export default ViewCounter
