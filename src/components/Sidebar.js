import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Logo_GE from "../assets/images/Logo-GE1.svg";
import Icon_Products from "../assets/images/Icon-Products.svg";
import Icon_Dashboard from "../assets/images/Icon-Dashboard.svg";
import Icon_Subscriptions from "../assets/images/Icon-Subscriptions.svg";
import Icon_Announcements from "../assets/images/Icon-Announcements-Events.svg";
import Icon_Engagement_Requests from "../assets/images/Icon-Engagement-Requests.svg";
import Icon_Support from "../assets/images/Icon-Support.svg";
import Icon_Settings from "../assets/images/Icon-Settings.svg";
import Icon_Administration from "../assets/images/Icon-Administration.svg";
import Icon_Github from "../assets/images/Icon-Github.svg";
import Icon_Yammer from "../assets/images/Icon-Yammer.svg";
import Icon_Confluence from "../assets/images/Icon-Confluence.svg";

export const Sidebar = ({ clickEvent }) => {
  const [userName, setUserName] = useState('admin');
  const [department, setDepartment] = useState('GE Corporate');
  const [togglePersona, setTogglePersona] = useState(true);
  const [currentPersona, setCurrentPersona] = useState('OWNER');

  const handleTogglePersona = (persona) => {
    setCurrentPersona(persona);
  };
  return (
    <div className="col-3 p-0" id="sidebar-wrapper">
      <div className="sidebar-heading p-3">
        <div className="d-flex flex-row p-3">
          <div className="col-3 pr-0 GE-Logo">
            <img className="img-fluid" alt="" src={Logo_GE} />
          </div>
          <div className="col-9 pl-0 portal-name">
            <div className="text-center headers">
              <b>DIGITAL CONNECT</b>
            </div>
            <div className="border-bottom mx-2"></div>
            <div className="text-center user-details pt-1">
              <span className="user-name">
                <b>{userName}</b>
              </span>
              <span className="detail-divider mx-1">|</span>
              <span className="department">
                <b>{department}</b>
              </span>
              {togglePersona ? (
                <div className="toggle-persona">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <b>{currentPersona}</b>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={()=>handleTogglePersona("OWNER")}
                    >
                      OWNER
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={()=>handleTogglePersona("VIEWER")}
                    >
                      VIEWER
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="list-group list-group-flush p-0 mt-2">
        <span className="sidebarMenu">
          <a
            target="_blank"
            href="https://dc-wordpress-ci.digitalconnect.apps.ge.com/"
            className="list-group-item list-group-item-action"
          >
            <img className="img-fluid" alt="" src={Icon_Products} />
            PRODUCTS & SERVICES
          </a>
        </span>
        <span className="sidebarMenu">
          <Link
            className="list-group-item list-group-item-action"
            to="/"              
          >
            <img className="img-fluid" alt="" src={Icon_Dashboard} />
            DASHBOARD
          </Link>
        </span>
        {currentPersona === "OWNER" ? (
          <span className="sidebarMenu">
            <Link
              className="list-group-item list-group-item-action"
              to="/manage"
              onClick={() => clickEvent({
                pageName: "Manage",
                headerText: "MANAGE",
                subHeaderText: "GLOBAL",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Subscriptions} />{" "}
              MANAGE
            </Link>
          </span>
        ) : (
          ""
        )}
        <span className="sidebarMenu">
          <Link
            className="list-group-item list-group-item-action"
            to="/announcements-events"
            onClick={() => clickEvent({
              pageName: "AnnouncementsAndEvents",
              headerText: "ANNOUNCEMENTS & EVENTS",
              subHeaderText: "GLOBAL",
            })}
          >
            <img className="img-fluid" alt="" src={Icon_Announcements} />{" "}
            ANNOUNCEMENTS & EVENTS
          </Link>
        </span>
        <span className="sidebarMenu">
          <Link
            className="list-group-item list-group-item-action"
            to="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className="img-fluid"
              alt=""
              src={Icon_Engagement_Requests}
            />
            ENGAGEMENT REQUESTS
          </Link>
          <div className="dropdown-content">
            <Link
              to="/newengagementrequest"
            >
              NEW ENGAGEMENT REQUEST
            </Link>
          </div>
        </span>
        <span className="sidebarMenu">
          <Link
            className="list-group-item list-group-item-action"
            to="/support"
            onClick={() => clickEvent({
              pageName: "Support",
              headerText: "SUPPORT",                
              subHeaderText: "GLOBAL",
            })}
          >
            <img className="img-fluid" alt="" src={Icon_Support} />
            SUPPORT
          </Link>
        </span>
        <span className="sidebarMenu">
          <Link
            className="list-group-item list-group-item-action"
            to="/preferences"
            onClick={() => clickEvent({
              pageName: "Preferences",
              headerText: "PREFERENCES",
              subHeaderText: "GLOBAL",
            })}
          >
            <img className="img-fluid" alt="" src={Icon_Settings} />{" "}
            PREFERENCES
          </Link>
        </span>
        {currentPersona === "OWNER" ? (
          <span className="sidebarMenu">
            <Link
              className="list-group-item list-group-item-action"
              to="/administration"
              onClick={() => clickEvent({
                pageName: "Administration",
                headerText: "ADMINISTRATION",
                subHeaderText: "GLOBAL",
              })}
            >
              <img className="img-fluid" alt="" src={Icon_Administration} />{" "}
              ADMINISTRATION
            </Link>
            {/* Might need in future
           <div className="dropdown-content">
            <a
              href="#"
              onClick={() => clickEvent({
                pageName: "UserManagement",
                headerText: "USER MANAGEMENT",
                // subHeaderText: "Persona 1",
              })}
            >
              USER MANAGEMENT
            </a>
          </div> */}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="footer">
        <div className="social-media page-footer">
          <div className="social-tag text-muted">Socialize With Us</div>
          <div className="social-media-bar">
            <img alt="" className="img-fluid px-2 img-size-2" src={Icon_Github} />
            <img alt="" className="img-fluid px-2 img-size-2" src={Icon_Yammer} />
            <img alt="" className="img-fluid px-2 img-size-2" src={Icon_Confluence} />
          </div>
        </div>
        <div className="text-muted mt-2 text-meta">
          © 2021 GENERAL ELECTRIC
        </div>
      </div>
    </div>
  );
};
