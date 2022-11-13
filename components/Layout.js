import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'
import ProgressBar from './ProgressBar'
import { useEffect, useState } from 'react'
import Button from './Button'
import { color } from '../lib/color'
import useDarkMode from '../hook/useDarkMode'

const Layout = () => {
  const { locale } = useRouter()
  const [colorTheme] = useDarkMode()
  let [mainProgressBar, setMainProgressBar] = useState(50)
  let [secondaryProgressBar, setSecondaryPercentage] = useState(25)

  const progressBarDatas = [
    {
      id        : 1,
      title     : i18n.body.mainProgressBar[locale],
      percentage: mainProgressBar,
    },
    {
      id        : 2,
      title     : i18n.body.secondaryProgressBar[locale],
      percentage: secondaryProgressBar,
    },
  ]

  const init = () => {
    setMainProgressBar(0)
    setSecondaryPercentage(0)
  }

  const addPercentage = (value) => {
    if (mainProgressBar < 100 && secondaryProgressBar < 100) {
      setMainProgressBar(mainProgressBar += value)
      setSecondaryPercentage(secondaryProgressBar += value)
    } else {
      setMainProgressBar(mainProgressBar += 0)
      setSecondaryPercentage(secondaryProgressBar += 0)
    }
  }

  useEffect(() => {
    if (mainProgressBar === 100) {
      setSecondaryPercentage(100)
    }
  }, [mainProgressBar])

  return (
    <>
      <Head >
        <title >{i18n.header.mainTitle[locale]}</title >
        <meta name="description" content="Create by Daviani" />
      </Head >

      <div className="min-h-screen mx-auto flex flex-col " >
        <div className="bg-main-200 dark:bg-main-800 shadow-lg" >
          <Header />
        </div >

        <main className="flex-grow container mx-auto px-4 sm:px-6" >
          <div className="m-3" >
            {progressBarDatas.map((item) => (
              <ProgressBar key={item.id}
                           title={item.title}
                           percentage={item.percentage}
              />
            ))}

            <div className="display-between m-h-2  " >
              <Button title={i18n.body.reset[locale]}
                      backgroundColor={colorTheme ? color.primaryDark : color.primaryLight}
                      action={init}
              />
              <Button title={i18n.body.fivePercent[locale]}
                      backgroundColor={colorTheme ? color.primaryDark : color.primaryLight}
                      action={() => addPercentage(5)}
              />
              <Button title={i18n.body.tenPercent[locale]}
                      action={() => addPercentage(10)}
                      backgroundColor={colorTheme ? color.primaryDark : color.primaryLight}
              />
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
