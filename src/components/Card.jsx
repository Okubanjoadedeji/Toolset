import FadeUpComponent from "./FadeUpComponenet";


function Card() {
  return (
    <div>
      <div className="Cards">
        <img src="public/card-image.webp" alt="card" />
        <div className="circle-cover"></div>
        <FadeUpComponent/>
      </div>
    </div>
  );
}

export default Card