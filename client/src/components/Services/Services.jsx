import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="df fd-c">
        <ServiceCard left={true} />
        <ServiceCard left={false} />
        <ServiceCard left={true} />
        <ServiceCard left={false} />
      </div>
    </div>
  );
};

export default Services;
