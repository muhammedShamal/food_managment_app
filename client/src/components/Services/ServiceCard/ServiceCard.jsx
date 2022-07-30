import "./serviceCard.css";

const ServiceCard = ({ left, info }) => {
  const data = info;
  return (
    <div className="service-card df">
      {left ? (
        <div>
          <img src={data?.img} alt="h" />
        </div>
      ) : (
        <></>
      )}
      <div className="service-card-content">
        <h1>{data?.title}</h1>
        <p>{data?.desc}</p>
      </div>
      {!left && (
        <div>
          <img src={data?.img} alt="h" />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
