import './Card.css'
function Card(props) {
  return (
    <>
    <div className="outerCard">
      <div className="imageOut"><img src={props.imgsrc} alt="" className='image' /></div>
      <p className="info1">{props.sname}</p>
      <p className="info2">{props.title}</p>
      <div className="btn">
        <a href={props.link} className="link">
          <p className="watch">Watch Now</p>
        </a>
      </div>
    </div>
    </>
  );
}
export default Card;
