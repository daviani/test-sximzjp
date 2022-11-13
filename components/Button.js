
const Button = ({title, action, backgroundColor}) => {
  return (
    <button className='button'
            style={{ background: `${backgroundColor}` }}
            onClick={action}
    >
      {title}
    </button>
  )
}

export default Button
