const Header = (course) => {
  return (
    <>
      <h1>{course.course}</h1>
    </>
  );
};

const Content = (content) => {
  return (
    <>
      <p>
        {content.content[0].part} {content.content[0].exercises}
      </p>
      <p>
        {content.content[1].part} {content.content[1].exercises}
      </p>
      <p>
        {content.content[2].part} {content.content[2].exercises}
      </p>
    </>
  );
};

const Total = (content) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {content.content[0].exercises +
          content.content[1].exercises +
          content.content[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const content = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

export default App;
