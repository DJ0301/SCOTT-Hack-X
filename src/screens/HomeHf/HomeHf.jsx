import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const HomeHf = () => {
  return (
    <div className="HOME-HF">
      <div className="div-3">
        <div className="frame">
          <div className="cards">
            <div className="home-cards">
              <div className="home-card">
                <div className="overlap-group">
                  <div className="card-meal-card">
                    <div className="frame-2">
                      <div className="text-wrapper">Greek Salad</div>
                      <p className="p">
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                        garnished with crunchy garlic and rosemary croutons.
                      </p>
                      <div className="text-wrapper-2">$12.99</div>
                    </div>
                    <img className="rectangle" alt="Rectangle" />
                  </div>
                  <img className="line" alt="Line" />
                  <img className="line" alt="Line" />
                </div>
              </div>
              <div className="home-card">
                <div className="overlap-group">
                  <div className="card-meal-card">
                    <div className="frame-2">
                      <div className="text-wrapper">Brushetta</div>
                      <p className="p">
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with
                        salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of
                        variations. In Italy, a brustolina grill is frequently used to create bruschetta.
                      </p>
                      <div className="text-wrapper-2">$7.99</div>
                    </div>
                    <img className="rectangle" alt="Rectangle" />
                  </div>
                  <img className="line" alt="Line" />
                  <img className="line" alt="Line" />
                </div>
              </div>
              <div className="home-card">
                <div className="overlap-group">
                  <div className="card-meal-card">
                    <div className="frame-2">
                      <div className="text-wrapper">Grilled Fish</div>
                      <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.</p>
                      <div className="text-wrapper-2">$20.00</div>
                    </div>
                    <img className="rectangle" alt="Rectangle" />
                  </div>
                  <img className="line" alt="Line" />
                  <img className="line" alt="Line" />
                </div>
              </div>
              <div className="home-card">
                <div className="overlap-group">
                  <div className="card-meal-card">
                    <div className="frame-2">
                      <div className="text-wrapper">Pasta</div>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.
                      </p>
                      <div className="text-wrapper-2">$18.99</div>
                    </div>
                    <img className="rectangle" alt="Rectangle" />
                  </div>
                  <img className="line" alt="Line" />
                  <img className="line" alt="Line" />
                </div>
              </div>
              <div className="home-card">
                <div className="overlap-group">
                  <div className="card-meal-card">
                    <div className="frame-2">
                      <div className="text-wrapper">Lemon Dessert</div>
                      <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.
                      </p>
                      <div className="text-wrapper-2">$6.99</div>
                    </div>
                    <img className="rectangle" alt="Rectangle" />
                  </div>
                  <img className="line" alt="Line" />
                  <img className="line" alt="Line" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-order-2">
          <div className="order-FOR-DELIVERY">ORDER FOR DELIVERY!</div>
          <div className="pills">
            <div className="pill">
              <div className="label">Lunch</div>
            </div>
            <div className="pill">
              <div className="label">Mains</div>
            </div>
            <div className="pill">
              <div className="label">Desserts</div>
            </div>
            <div className="pill">
              <div className="label">A La Carte</div>
            </div>
            <div className="pill">
              <div className="label">Specials</div>
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="home-hero">
            <div className="title">
              <div className="text-wrapper-3">Little Lemon</div>
              <div className="text-wrapper-4">Chicago</div>
            </div>
            <div className="home-CTA">
              <div className="frame-3">
                <div className="frame-4">
                  <p className="text-wrapper-5">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern
                    twist.
                  </p>
                </div>
                <img className="img-pop" alt="Img pop" src="/img/img-pop.png" />
              </div>
              <div className="button-primary">
                <div className="label-2">Reserve a table</div>
              </div>
            </div>
          </div>
          <div className="home-hero">
            <div className="title">
              <div className="text-wrapper-3">Little Lemon</div>
              <div className="text-wrapper-4">Chicago</div>
            </div>
            <div className="home-CTA">
              <div className="frame-3">
                <div className="frame-4">
                  <p className="text-wrapper-5">
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern
                    twist.
                  </p>
                </div>
                <img className="img-pop" alt="Img pop" src="/img/img-pop.png" />
              </div>
              <div className="button-primary">
                <div className="label-2">Reserve a table</div>
              </div>
            </div>
          </div>
          <div className="home-hero">
            <div className="title">
              <div className="text-wrapper-3">Little Lemon</div>
              <div className="text-wrapper-4">Chicago</div>
            </div>
            <Link className="home-CTA" to="/reservation-form-hf">
              <div className="frame-3">
                <div className="frame-4">
                  <p className="text-wrapper-5">
                    We are a family owned <br />
                    Mediterranean&nbsp;&nbsp;restaurant, focused on traditional recipes served with a modern twist.
                  </p>
                </div>
                <img className="img-pop" alt="Img pop" src="/img/img-pop.png" />
              </div>
              <div className="button-primary">
                <div className="label-2">Reserve a table</div>
              </div>
            </Link>
          </div>
        </div>
        <img className="img" alt="Vector" src="/img/vector-1.svg" />
        <img className="logo" alt="Logo" src="/img/logo.png" />
        <img className="icon-hamburger-menu" alt="Icon hamburger menu" src="/img/icon-hamburger-menu.png" />
      </div>
    </div>
  );
};
