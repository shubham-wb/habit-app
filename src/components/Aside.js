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
        <li data-toggle="tooltip" data-placement="right" title="My Account">
          <img src={account} />
        </li>

        <li data-toggle="tooltip" data-placement="right" title="Notifications">
          <img src={bell} />
        </li>
        <li data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link to="/">
            <img src={dashboard} />
          </Link>
        </li>
        <li data-toggle="tooltip" data-placement="right" title="Week View">
          <Link to="week-view">
            <img src={event} />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
