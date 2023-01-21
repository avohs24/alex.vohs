import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  const bgStyle = { backgroundColor: "#1f1e1e" };
  const textStyle = { color: "#00e1b2"}
  return (
    <Jumbotron ref={skillsTabRef} fluid className="m-0" style={bgStyle}>
      <Container>
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center" style={textStyle}>
          {heading}
        </h2>
        <div id="skills">
        <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>VueJS</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>AWS (Cognito, S3, SNS, SES, CloudWatch Lambda)</li>
            <li>Git</li>
            <li>Jest</li>
            <li>Cypress</li>
            <li>SumoLogic</li>
            <li>Jira</li>
            <li>Mixpanel</li>
            <li>Snowflake</li>
            <li>Postman</li>
            <li>DataDog</li>
        </ul>
    </div>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
