import React from "react";

export default class CookieNotification extends React.Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);
    this.state = {
      cookieNotificationKey: "readCookieNotification",
    };
  }

  /* istanbul ignore next */
  componentDidMount() {
    let isReadCookieNotification = this.getCookie(
      this.state.cookieNotificationKey
    );
    if (isReadCookieNotification != "Y") {
      setTimeout(() => {
        window.showCookieInfo();
      }, 500);
    }
  }

  /* istanbul ignore next */
  readCookieNotification(e) {
    document.cookie = this.state.cookieNotificationKey + "=Y";
    window.hideCookieInfo();
  }

  /* istanbul ignore next */
  readCookieNotificationIgnore() {
    window.hideCookieInfo();
  }

  /* istanbul ignore next */
  getCookie(name) {
    var cookieName = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return "N";
  }

  render() {
    /* jshint ignore:start */
    /* istanbul ignore next */
    return (
      <div id="cookieConsent">
        <div
          id="closeCookieConsent"
          onClick={(event) => {
            this.readCookieNotificationIgnore(event);
          }}
        >
          x
        </div>
        <div className="row">
          <div className="col-sm-10">
            Digital Connect Portal uses cookies to store information on your
            computer. Some are essential to make our site work, others help us
            improve the user experience. By using the site, you consent to the
            placement of these cookies.
          </div>
          <div className="col-sm-2">
            <a
              className="cookieConsentOK"
              onClick={(event) => {
                this.readCookieNotification(event);
              }}
            >
              That's Fine
            </a>
          </div>
        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}