import React from "react";
import home from "./../assets/images/home.png";
import Menu from "./Menu";

const Tabs = () => {
  return (
    <nav id={"Menu"}>
      <div className="container">
        <ol className="breadcrumb purple lighten-4">
          <li className="bred-item">
            <a className="black-text" href="/#">
              <img src={home} className="home" alt="home" width="15" />
            </a>
            <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          </li>
          <li className="bred-item">
            <a className="black-text" href="/#">
              Semua Kursus
            </a>
            <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          </li>
          <li className="bred-item">
            <a className="black-text" href="/#">
              Strategy
            </a>
            <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
          </li>
          <li className="bred-item active">
            <a className="black-text" href="/#">
              Detail
            </a>
          </li>
        </ol>
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <div className="_menu" id="_menu">
              <ul className="_menuChild mt-5">
                <div className="col-md-12">
                  <Menu />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Tabs;
