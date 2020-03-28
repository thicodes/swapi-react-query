import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import fetch from '../fetch';
import Card from './Card';

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

type State = {
  page: number;
  error: boolean;
  hasMore: boolean;
  isLoading: boolean;
  data: Array<any>;
};

function Characters() {
  const [query, setQuery] = React.useState<State>({
    page: 1,
    error: false,
    hasMore: true,
    isLoading: false,
    data: [],
  });

  const fetchCharacters = async (page: number) => {
    const data = await fetch(`https://swapi.co/api/people/?page=${page}`);
    setQuery({
      page,
      error: false,
      hasMore: false,
      isLoading: true,
      data: [...data.results],
    });
  };

  React.useEffect(() => {
    fetchCharacters(1);
  }, []);

  const infiniteScrollerLoader = <div>Loading...</div>;

  return (
    <Grid>
      {query.data.map((person: any) => {
        const personId = person.url
          .split('/')
          .filter(Boolean)
          .pop();
        return <Card key={personId}>{person.url}</Card>;
      })}
    </Grid>
  );
}

export default Characters;
