import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'

const Layout = () => {
  const { locale } = useRouter()
  return (
    <>
      <Head >
        <title >{i18n.header.mainTitle[locale]}</title >
        <meta name="description" content="Create by Daviani" />
        <link rel="icon"
              href="/home/dav/www/projets/Daviani/about-me-2/public/favicon.ico" />
      </Head >

      <div className="min-h-screen mx-auto flex flex-col " >

        <div className="bg-main-200 dark:bg-main-800 shadow-lg" >
          <Header />
        </div >

        <main className="flex-grow container mx-auto px-4 sm:px-6" >


        </main >

        <div className="bg-main-200 dark:bg-main-800 w-full " >
          <Footer />
        </div >
      </div >
    </>
  )
}

export default Layout
