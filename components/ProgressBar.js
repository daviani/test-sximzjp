import Filler from './Filler'
import { color } from '../lib/color'
import useDarkMode from '../hook/useDarkMode'


const ProgessBar = ({ title, percentage }) => {
  const [colorTheme] = useDarkMode()
  return (
    <>
      <div style={colorTheme === 'light' ? {color: color.primaryDark} : {color: color.primaryLight} } >
      {title} - {percentage} {' %'}
      </div>

      <div className="progess-bar"
           style={{
             border    : `0.5px solid ${color.primaryDark}`,
             background: color.primaryLight,
           }}
      >
        <Filler percentage={percentage} />
      </div >
    </ >
  )
}

export default ProgessBar
