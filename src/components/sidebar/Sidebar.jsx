import React, { useContext } from "react";
import "./Sidebar.css";
import settingssvg from "../../assets/settings-svgrepo-com.svg";
import plussvg from "../../assets/plus-large-svgrepo-com.svg";
import helpsvg from "../../assets/help-circle-svgrepo-com.svg";
import activitysvg from "../../assets/history-svgrepo-com.svg";
import messagesvg from "../../assets/message-square-dots-svgrepo-com.svg";
import { Context } from "../../conetexts/Context";

function Sidebar() {
  const { ifsidebar, setifloading, setifrequest, request, history } =
    useContext(Context);

  return (
    <div
      className="sidebar"
      style={ifsidebar ? { width: "20em" } : { width: "4.5em" }}
    >
      <div className="top">
        <div
          className="newchat"
          onClick={() => {
            setifloading(false);
            setifrequest(false);
          }}
          style={ifsidebar ? { width: "8em" } : { width: "2.5em" }}
        >
          <img src={plussvg} />
          <p>New Chat</p>
        </div>
        <div
          className="recentCon"
          style={ifsidebar ? { width: "18em" } : { width: "0" }}
        >
          <p>Recent</p>

          {history.map((info, i) => {
            if (info.length > 30) {
              info = info.slice(0, 27) + "...";
            }
            return (
              <div
                key={i}
                className="recentchats"
                onClick={() => request(info)}
              >
                <img src={messagesvg} />
                <p>{info}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottom">
        <div
          className="help"
          style={ifsidebar ? { width: "18em" } : { width: "2.1em" }}
        >
          <img src={helpsvg} />
          <p>Help</p>
        </div>
        <div
          className="activities"
          style={ifsidebar ? { width: "18em" } : { width: "2.1em" }}
        >
          <img src={activitysvg} />
          <p>Activities</p>
        </div>
        <div
          className="settings"
          style={ifsidebar ? { width: "18em" } : { width: "2.1em" }}
        >
          <img src={settingssvg} />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
