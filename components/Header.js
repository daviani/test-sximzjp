import SwitchTheme from './switchTheme'
import SwitchLanguage from './switchLanguage'
import i18n from '../lib/i18n'
import { useRouter } from 'next/router'

const Header = () => {
  const { locale } = useRouter()
  return (
    <header className="mx-auto" >
      <div
        className="config_box" >
        <SwitchTheme />
        <SwitchLanguage />
      </div >
      <div className="flex flex-col text-left lg:text-center mt-2" >
        <div
          className="inline-flex items-center justify-center flex-shrink-0  mx-auto mb-3 mt-2.5 rounded-full" >
        </div >
        <h1
          className="mx-auto mb-4 text-4xl font-semibold text-main-800 dark:text-blue-100  tracking-tighter transition duration-500 ease-in-out transform lg:w-1/2 lg:text-3xl" >

          {i18n.header.mainTitle[locale]}

        </h1 >
      </div >
    </header >
  )
}

export default Header