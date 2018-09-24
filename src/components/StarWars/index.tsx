import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_HERO = gql`
  {
    hero {
      name
      appearsIn
      friends {
        name
        appearsIn
      }
    }
  }
`;

const StarWars = () => (
  <Query query={GET_HERO}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <React.Fragment>
        <h1>Hero: {data.hero.name}</h1>
          {data.hero.friends.map((friend: {name: string, appearsIn: string[]}, i: number) => (
            <div key={i}>
              <h2>{friend.name}</h2>
              <p>{friend.appearsIn.join(', ')}</p>
            </div>
          ))}
        </React.Fragment>
      );
    }}
  </Query>
);

export default StarWars;
