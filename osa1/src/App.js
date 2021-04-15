import React from "react";

const Header = props => {
  return <h2>{props.course}</h2>;
};

const Part = props => {
  return (
    <div>
      <p>
        {props.osa}, {props.harjoitus}
      </p>
    </div>
  );
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div id="partList">
      <p>
        <Part osa={part1} harjoitus={exercises1} />
        <Part osa={part2} harjoitus={exercises2} />
        <Part osa={part3} harjoitus={exercises3} />
      </p>
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>Number of exercises, {props.total}</p>
    </div>
  );
};

const App = () => {
  const course = <h2>Half Stack application development</h2>;
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={total} />
    </div>
  );
};

export default App;
