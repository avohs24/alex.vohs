import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const bgStyle = { backgroundColor: "#1f1e1e" };
    const textStyle = { color: "#00e1b2"}
    return (
      <Jumbotron
        fluid
        id="home"
        style={bgStyle}
        className="text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container>
          <div className="flex items-start">
            <div className="text-center -mt-8">
              <h1 ref={ref} className="display-1" style={textStyle}>
                {title}
              </h1>
              <h2 className="display-7 headline-txt" style={{color: "#954cf4", fontWeight: "250"}}>Passionate about changing the world with technology.</h2>
            </div>
            <div className="text-center">
              <div className="p-5">
                {icons.map((icon, index) => (
                  <a
                    key={`social-icon-${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={icon.url}
                    aria-label={`My ${icon.image.split("-")[1]}`}
                  >
                    <i className={`fab ${icon.image}  fa-3x socialicons`} style={textStyle} />
                  </a>
                ))}
              </div>
              <a
                className="btn btn-outline-light btn-lg"
                href="#aboutme"
                role="button"
                aria-label="Learn more about me"
                style={{backgroundColor: "#954cf4"}}
              >
                More about me
              </a>
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
