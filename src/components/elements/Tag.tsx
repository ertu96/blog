import { cx } from '@/utils'
import Link from 'next/link'

type TagProps = {
    tag: string
    }
const Tag = ({link="#", name}) => {
  return (
    <Link href={link} className={cx("inline-block py-3 px-10 bg-dark text-white rounded-full capitalize font-semibold hover:scale-105 transition-all ease duration-200 border-solid border-light border-2")}>
                    {name}
                </Link>
  )
}

export default Tag