const Card = ({ id, imgName, label, onClick, isShuffling }) => {
  return (
    <>
      <div className={`card ${isShuffling ? "shuffle" : ""}`} onClick={() => onClick(id)}>
        <div className="card-img-section"><img className="card-image" src={imgName} alt={label} /></div>
        <div className="card-name-section">{label}</div>
      </div>
    </>
  )
}

export default Card;