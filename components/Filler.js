import { colors } from '../lib/colors'

const Filler = ({ percentage }) => {
  let colorFiller

  const defineColor = () => {
    if (percentage >= 0 && percentage <= 24) {
      return colorFiller = colors.purple
    } else if (percentage >= 25 && percentage < 49) {
      return colorFiller = colors.blue
    } else if (percentage >= 50 && percentage < 74) {
      return colorFiller = colors.greenMedium
    } else if (percentage >= 75) {
      return colorFiller = colors.green
    }
  }

  return (
    <div
      className="filler"
      style={{ width: `${percentage}%`, background: `${defineColor(percentage)}` }}
    />
  )
}

export default Filler
