import foodImg from "../../../assets/notwaste.jpg";
import "./serviceCard.css";

const ServiceCard = ({ left, info }) => {
  const data = info;
  return (
    <div className="service-card df">
      {left && (
        <div>
          <img src={foodImg} alt="h" />
        </div>
      )}
      <div className="service-card-content">
        <h1>{data?.title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, illo
          enim possimus asperiores dicta aliquam? Eaque itaque maiores cumque a
          repudiandae ad, dolor beatae minima sequi vero eligendi. Voluptatem,
          cumque!
        </p>
      </div>
      {!left && (
        <div>
          <img src={foodImg} alt="h" />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
