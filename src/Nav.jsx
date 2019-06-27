import React from "react";
import "./nav.scss";
export default function Nav(props) {
  let sidePanel = React.createRef();

  const closeSidePanel = () => {
    sidePanel.current.style.width = "0vw";
    sidePanel.current.style.height = "100vh";
  };
  const openSidePanel = () => {
    sidePanel.current.style.width = "100vw";
    sidePanel.current.style.height = "100vh";
  };

  return (
    <div>
      <div className="nav-container">
        <div className="nav-bar">
          <div className="nav-logo">
            <div className="hamburger-menu">
              <button className="hamburger-btn" onClick={openSidePanel}>
                ☰
              </button>
              <div id="mySidepanel" className="sidepanel" ref={sidePanel}>
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={closeSidePanel}
                >
                  ×
                </a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <h1>
              <span>GreenLake</span> Quote Tool
            </h1>
          </div>
          <div className="nav-options">
            <a href="">My Quotes</a>
            <a href="">Support Me</a>
            <Dropdown content={["Link1", "Link2", "Link3"]}>
              <a href="">My Account</a>
            </Dropdown>
            <a href="">Select Country</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Dropdown(props) {
  return (
    <div className="dropdown">
      <div className="dropbtn">{props.children}</div>
      <div className="dropdown-content">
        {props.content.map((item, index) => (
          <a href="#" key={index}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
