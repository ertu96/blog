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
                'ease inline-block rounded-full border-2 border-solid border-light bg-dark px-10 py-3 font-semibold capitalize text-white transition-all duration-200 hover:scale-105'
            )}
        >
            {name}
        </Link>
    )
}

export default Tag
