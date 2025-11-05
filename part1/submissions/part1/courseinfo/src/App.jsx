const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (content) => {
  return (
    <>
      <p>
        {content.part.name} {content.part.exercises}
      </p>
    </>
  );
};

// const Content = (parts) => {
//   return (
//     <>
//       <Part part={parts.part1.name} exercises={parts.parts.exercises} />
//       <Part part={parts.parts[1].name} exercises={parts.parts[1].exercises} />
//       <Part part={parts.parts[2].name} exercises={parts.parts[2].exercises} />
//     </>
//   );
// };

const Total = (parts) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {parts.part1.exercises + parts.part2.exercises + parts.part3.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

export default App;
