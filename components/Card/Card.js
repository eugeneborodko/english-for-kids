import './card.scss'

const Card = ({ image, caption }) => {
  return (
    <a className="card" href="#">
      <img className="card__image" src={`../static/${image}`} />
      <span className="card__bg card__bg_green"></span>
      <span className="card__caption">{caption}</span>
    </a>
  )
}

export default Card
