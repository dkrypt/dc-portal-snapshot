import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid-custom mx-5 px-2">
        <div className="row align-items-center">
          <div className="col px-3 m-2" title="Copyright 2021 General Electric">
            <div className="text-center">© 2021 General Electric</div>
          </div>
          <div className="col px-3 m-2">
            <div className="inner-content text-center">
              <ul className="list-unstyled d-inline-flex m-0">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/ge"
                    aria-label="General Electric Facebook page"
                    title="General Electric Facebook page"
                  >
                    <span className="fa fa-facebook fa-in"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/ge"
                    aria-label="General Electric YouTube page"
                    title="General Electric YouTube page"
                  >
                    <span className="fa fa-youtube fa-in"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/generalelectric"
                    aria-label="General Electric Instagram page"
                    title="General Electric Instagram page"
                  >
                    <span className="fa fa-instagram fa-in"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.twitter.com/generalelectric"
                    aria-label="General Electric Twitter page"
                    title="General Electric Twitter page"
                  >
                    <span className="fa fa-twitter fa-in"></span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/ge"
                    aria-label="General Electric LinkedIn page"
                    title="General Electric LinkedIn page"
                  >
                    <span className="fa fa-linkedin fa-in"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
