
const Button = ({title, action}) => {
  return (
    <button className='button'
            onClick={action}
    >
      {title}
    </button>
  )
}

export default Button