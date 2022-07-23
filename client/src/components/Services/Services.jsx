import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import what from "../../assets/what.jpg";
import how from "../../assets/how.jpg";
import logo from "../../assets/logo.jpg";
import "./services.css";

const Services = () => {
  const data = [
    {
      title: "What Do We Do",
      desc: "We are providing this platform to help those who are searching for a way to handle their excess food and are looking for affordable or free food. Connect these people through ShareNeed and make their life a little bit easier.",
      img: what,
    },
    {
      title: "How Do We Do",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae ratione? Maxime aliquam obcaecati sequi sit iste suscipit sint quisquam a laudantium illo. Recusandae laborum obcaecati blanditiis cupiditate assumenda neque.",
      img: how,
    },
    {
      title: "Why We",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae ratione? Maxime aliquam obcaecati sequi sit iste suscipit sint quisquam a laudantium illo. Recusandae laborum obcaecati blanditiis cupiditate assumenda neque.",
      img: logo,
    },
  ];

  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="df fd-c">
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

// about us
// This platform connects donors or sellers and recipients or consumers to serve their multiple needs. Customers use our platform to donate or sell food, search for food at a cheap rate, find food donors. This is a step to manage excess food and reach out to those who are searching for a meal at an affordable rate.
