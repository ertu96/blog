import { cx } from '@/utils'
import Link from 'next/link'

type CategoryProps = {
    name: string
    active: boolean
    link?: string
    className?: string
}
const Category = ({ link = '#', name, active, className }: CategoryProps) => {
    return (
        <Link
            href={link}
            className={cx(
                active ? 'bg-dark text-light' : 'bg-light text-dark',
                className ? className : '',
                'ease m-2 inline-block rounded-full border-2 border-solid border-dark px-10 py-2 transition-all duration-200 hover:scale-105'
            )}
        >
            #{name}
        </Link>
    )
}

export default Category
