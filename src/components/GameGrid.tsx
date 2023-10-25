import { SimpleGrid, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function GameGrid() {
  const {data, error, isLoading, fetchNextPage, hasNextPage} = useGames();
  const skeletons= [1, 2, 3, 4, 5, 6, 7, 8];
  const bgColour = useColorModeValue('#e2e8f0', '#2d3748');

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner/>}
    >
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 4}}
        spacing={6}
        padding={10}
      >
        {isLoading && skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton bgColour={bgColour}/>
          </GameCardContainer>
        ))}
        {data?.pages.map((page, index) => 
          <React.Fragment key={index}>
            {page.results.map(game => 
              <GameCardContainer key={game.id}>
                <GameCard game={game} bgColour={bgColour}/>
              </GameCardContainer>
            )}
          </React.Fragment>
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
