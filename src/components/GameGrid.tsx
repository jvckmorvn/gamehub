import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
  const {data, error, isLoading} = useGames();
  const skeletons= [1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 5}}
        padding={10}
        spacing={4}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {data.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
