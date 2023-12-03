import Image from 'next/image'
import Link from 'next/link'
import LogoImage from 'public/profile-img.png'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="mr-2 w-12 overflow-hidden rounded-full border border-solid border-dark dark:border-light md:mr-4 md:w-16">
                <Image
                    src={LogoImage}
                    alt="Logo"
                    className="h-auto w-full rounded-full"
                />
            </div>
            <span className="text-lg font-bold dark:font-semibold md:text-xl">
                CodeBucks
            </span>
        </Link>
    )
}

export default Logo
