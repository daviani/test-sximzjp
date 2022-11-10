import Filler from './Filler'

const ProgessBar = ({ title, percentage }) => {
  return (
    <div className="marginthree" >
      {title}
      <div className="progess-bar" >
        <Filler percentage={percentage} />
      </div >
    </div >
  )
}

export default ProgessBar
