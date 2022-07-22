import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./services.css";

const Services = () => {
  const data = [
    {
      title: "What Do We Do",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae ratione? Maxime aliquam obcaecati sequi sit iste suscipit sint quisquam a laudantium illo. Recusandae laborum obcaecati blanditiis cupiditate assumenda neque.",
    },
    {
      title: "How Do We Do",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae ratione? Maxime aliquam obcaecati sequi sit iste suscipit sint quisquam a laudantium illo. Recusandae laborum obcaecati blanditiis cupiditate assumenda neque.",
    },
    {
      title: "Why We",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae ratione? Maxime aliquam obcaecati sequi sit iste suscipit sint quisquam a laudantium illo. Recusandae laborum obcaecati blanditiis cupiditate assumenda neque.",
    },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="df fd-c">
        {/* what do we do */}
        {/* y we */}
        {/* how */}
        {data.map((item, index) => (
          <div key={index}>
            <ServiceCard left={index % 2} info={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
