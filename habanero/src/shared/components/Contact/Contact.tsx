import React from "react";

const Contact: React.FC = () => (
  <section className="contact">
    <div className="order-container">
      <div>
        <h3>Habanero</h3>
        <p>
          ul. Mikołaja Kopernika 3a <br />
          35-069 Rzeszów <br /> tel: 535 880 899
        </p>
      </div>
      <div className="hours-open">
        <h4>Godziny otwarcia</h4>
        <div className="hours-open-label">
          <span className="hours-open-day">Poniedziałek</span>
          <span>10:00 - 22:00</span>
        </div>
        <div className="hours-open-label">
          <span className="hours-open-day">Wtorek</span>
          <span>10:00 - 22:00</span>
        </div>
        <div className="hours-open-label">
          <span className="hours-open-day">Środa</span>
          <span>10:00 - 22:00</span>
        </div>
        <div className="hours-open-label">
          <span className="hours-open-day">Czwartek</span>
          <span>10:00 - 23:00</span>
        </div>
        <div className="hours-open-label">
          <span className="hours-open-day">Piątek</span>
          <span>10:00 - 00:00</span>
        </div>
        <div className="hours-open-label">
          <span className="hours-open-day">Sobota</span>
          <span>11:00 - 00:00</span>
        </div>
        <div className="hours-open-label">
          <span className="hours-open-day">Niedziela</span>
          <span>11:00 - 00:00</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
