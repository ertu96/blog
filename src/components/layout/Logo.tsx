import Image from 'next/image'
import Link from 'next/link'
import LogoImage from 'public/profile-img.png'

const Logo = () => {
    return (
        <Link href="/" className="flex items-center text-dark dark:text-light">
            <div className="md:mr-4 md:w-16 mr-2 w-12 overflow-hidden rounded-full border border-solid border-dark dark:border-light">
                <Image
                    src={LogoImage}
                    alt="Logo"
                    className="h-auto w-full rounded-full"
                    sizes="33vw"
                    priority
                />
            </div>
            <span className="md:text-xl text-lg font-bold dark:font-semibold">
                CodeBucks
            </span>
        </Link>
    )
}

export default Logo
