import React, {useState} from "react";
import Icons from '../icons.json'
function Services() {
  const [services, setServices] = useState(Icons);
  return (
    <div className="container-service-article">
      <div className="container-title-service">
      <h2 className="service-title">Services</h2>
      <div className="service-line"></div>
      </div>
    <div className="Service-article">
    {services.map((item, index) => {
        return (
          <article key={index}>
            <span className="service-icon"><i className={item.icon}></i></span>
            <h5 className="service-item-title">{item.title}</h5>
            <p className="service-article-text">{item.info}</p>
          </article>
        );
      })}
    </div>
    </div>
  );
}

export default Services;
