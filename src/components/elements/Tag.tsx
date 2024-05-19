import { cx } from '@/utils'
import Link from 'next/link'

type TagProps = {
    name: string
    link?: string
    className?: string
}
const Tag = ({ link = '#', name, className }: TagProps) => {
    return (
        <Link
            href={link}
            className={cx(
                className ? className : '',
                'ease sm:px-10 sm:py-3 sm:text-base inline-block rounded-full border-2 border-solid border-light bg-dark px-6 py-2 text-sm font-semibold capitalize text-white transition-all duration-200 hover:scale-105'
            )}
        >
            {name}
        </Link>
    )
}

export default Tag
