const Score = ({ className, label, value, isAnimating }) => {

  return (
    <>
      <div className={className}>
        <p>{label}:</p>
        <p className={isAnimating ? "score-pop" : ""}>{value}</p>
      </div>
    </>
  )
}

export default Score;