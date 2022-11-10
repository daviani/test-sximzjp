import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import Button from './Button'

const Layout = () => {
  const { locale } = useRouter()
  let [mainPercentage, setMainPercentage] = useState(50)
  let [secondaryPercentage, setSecondaryPercentage] = useState(25)

  const backToZero = () => {
    setMainPercentage(0)
    setSecondaryPercentage(0)
  }

  const addFive = () => {
    if (mainPercentage < 100 && secondaryPercentage < 100) {
      setMainPercentage(mainPercentage += 5)
      setSecondaryPercentage(secondaryPercentage += 5)
    } else {
      setMainPercentage(mainPercentage += 0)
      setSecondaryPercentage(secondaryPercentage += 0)
    }
  }

  const addTen = () => {
    if (mainPercentage < 100 && secondaryPercentage < 100) {
      setMainPercentage(mainPercentage += 10)
      setSecondaryPercentage(secondaryPercentage += 10)
    } else {
      setMainPercentage(mainPercentage += 0)
      setSecondaryPercentage(secondaryPercentage += 0)
    }
  }

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
          <div className="margin-three" >
            <ProgressBar title={'Initialisation du test technique'}
                         percentage={mainPercentage}
            />
            <ProgressBar title={'Avancement de la phase de développement'}
                         percentage={secondaryPercentage}
            />


            <div className="button-box margin-three" >
              <Button title={'Remettre à zéro les compteurs'}
                      action={backToZero} />
              <Button title={'Ajouter 5%'} action={addFive} />
              <Button title={'Ajouter 10%'} action={addTen} />
            </div >
          </div >
        </main >

        <div className="bg-main-200 dark:bg-main-800 w-full " >
          <Footer />
        </div >
      </div >
    </>
  )
}

export default Layout
