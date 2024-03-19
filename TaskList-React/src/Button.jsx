const Button = (props) => {
    return (
      <div>
        <button style={{backgroundColor : props.bgcolor, color: props.color, width: props.width}} onClick={props.onClick} className="">{props.btnText}</button>
      </div>
    )
  }
  
  export default Button
  