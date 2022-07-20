import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="df aic jc-sb">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
