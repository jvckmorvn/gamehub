import { Box, Button, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({gameQuery}: Props) {
  const {data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
  const skeletons= [1, 2, 3, 4, 5, 6, 7, 8];
  const bgColour = useColorModeValue('#e2e8f0', '#2d3748');

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Box padding={10}>
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 4}}
        spacing={6}>
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
      {hasNextPage && 
        <Button onClick={() => fetchNextPage()} marginBottom={3} marginTop={9}>
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      }
    </Box>
  );
}

export default GameGrid;
