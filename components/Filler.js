import { color } from '../lib/color'

const Filler = ({ percentage }) => {
  let colorFiller

  const defineColor = () => {
    if (percentage >= 0 && percentage <= 24) {
      return colorFiller = color.purple
    } else if (percentage >= 25 && percentage < 49) {
      return colorFiller = color.blue
    } else if (percentage >= 50 && percentage < 74) {
      return colorFiller = color.greenMedium
    } else if (percentage >= 75) {
      return colorFiller = color.green
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
