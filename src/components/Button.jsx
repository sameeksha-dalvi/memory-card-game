const Button = ({ className, label, onClick, icon }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {icon && <span className="btn-icon">{icon}</span>}
        <span className="btn-text">{label}</span></button>
    </>
  )

}

export default Button;