import siteMetadata from '@/data/siteMetadata'
// import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from "next/link";
import MobileNav from '@/components/MobileNav/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch'
// import SearchButton from './SearchButton'

const Header = () => {
    let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
    if (siteMetadata.stickyNav) {
        headerClass += ' sticky top-0 z-50'
    }

    return (
        <header className={headerClass}>
            <Link href="/public" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                    <div className="mr-3">
                        {/*<Logo />*/}
                    </div>
                    {typeof siteMetadata.headerTitle === 'string' ? (
                        <div className="hidden h-6 text-2xl font-semibold sm:block">
                            {siteMetadata.headerTitle}
                        </div>
                    ) : (
                        siteMetadata.headerTitle
                    )}
                </div>
            </Link>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                <div className="no-scrollbar hidden items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6  ">

                    <Link className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"  href="/"> Главная </Link>
                    <Link className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"  href="/photo-gallery"> Фотогалерея </Link>
                    <Link className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"  href="/story-in-detail"> История в деталях </Link>
                    <Link className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"  href="/story-in-detail"> Как добраться </Link>



                </div>
                {/*<SearchButton />*/}
                <ThemeSwitch />
                <MobileNav />
            </div>
        </header>
    )
}

export default Header