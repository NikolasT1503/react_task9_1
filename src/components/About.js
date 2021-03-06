import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
    const {id, name, type, weight} = props.match.params;
  return (
    <div>
      <h1>About Me</h1>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <p>
        Hi my name is <strong>Leanne Graham</strong> a.k.a Bret
      </p>
      <p>I'm working for "Romaguera-Crona" as engineer</p>
      <p>
        Please visit my site <a href="http://hildegard.org">hildegard.org</a>
      </p>
      <p>Don't hesitate to write me any questions on sincere@april.biz</p>
      <p>Идентификатор: {id}</p>
      <p>Имя: {name}</p>
      <p>Имя: {type}</p>
      <p>Имя: {weight}</p>
      <nav>
          <Link to="/">Home</Link>
      </nav>
    </div>
  );
};
export default About;
