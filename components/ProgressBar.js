import Filler from './Filler'
import { colors } from '../lib/colors'

const ProgessBar = ({ title, percentage }) => {
  return (
    <>
      <div style={{ color: colors.primaryDark }} >
        {title} - {percentage} {' %'}
      </div>

      <div className="progess-bar"
        style={{
          border: `0.5px solid ${colors.primaryDark}`,
          background: colors.primaryLight,
        }}
      >
        <Filler percentage={percentage} />
      </div >
    </ >
  )
}

export default ProgessBar
