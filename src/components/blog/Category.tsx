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
                active
                    ? 'bg-dark text-light dark:bg-light'
                    : 'bg-light text-dark dark:bg-dark dark:text-light',
                className ? className : '',
                'ease md:px-10 md:py-2 m-2 inline-block rounded-full border-2 border-solid border-dark px-6 py-1.5 transition-all duration-200 hover:scale-105 dark:border-light'
            )}
        >
            #{name}
        </Link>
    )
}

export default Category
