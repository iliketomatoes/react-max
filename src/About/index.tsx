import * as React from 'react';
import ApiQuery from 'src/Api/Query';

const About = () => {
  return (
    <div>
      <ApiQuery>{({ started, done, failed }) => {
          if (started) return 'Loading...';
          if (failed) return `Error! fallito`;
          return <div>dooooneee</div>;
      }}</ApiQuery>
    </div>
  );
};

export default About;
