import React from "react";
import "../assets/css/Main.css";
import { Link } from "react-router-dom";
import dashboard from "../assets/images/dashboard.svg";
import event from "../assets/images/event.svg";
import bell from "../assets/images/notification.svg";
import account from "../assets/images/account.svg";
function Aside() {
  return (
    <aside id="sidebar">
      <ul className="menu-btn">
        <li id="logo">
          <img src="https://i.etsystatic.com/7673973/c/728/728/9/0/il/520593/3020613886/il_300x300.3020613886_6vhu.jpg"></img>
        </li>

        <li data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link to="/">
            <img className="menu-img" src={dashboard} />
          </Link>
        </li>

        <li data-toggle="tooltip" data-placement="right" title="Week View">
          <Link to="week-view">
            <img className="menu-img" src={event} />
          </Link>
        </li>

        <li data-toggle="tooltip" data-placement="right" title="Notifications">
          <Link to="/notifications">
            <img className="menu-img" src={bell} />
          </Link>
        </li>
        <li data-toggle="tooltip" data-placement="right" title="My Account">
          <Link to="/profile">
            <img className="menu-img" src={account} />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
