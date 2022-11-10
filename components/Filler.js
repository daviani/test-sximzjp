const Filler = ({ percentage }) => {

  let color = ''
  const defineColor = () => {
    if (percentage > 0 && percentage < 24) {
      return color = '7160E8'
    } else if (percentage > 25 && percentage < 49) {
      return color = '60ADE8'
    } else if (percentage > 50 && percentage < 74) {
      return color = '60E8B6'
    } else {
      return color = '30DB63'
    }
  }

  defineColor()
  return (
    <div
      className="filler"
      style={{ width: `${percentage}%`, background: `#${color}` }}
    />
  )
}

export default Filler
