import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({gameQuery}: Props) {
  const {data, error, isLoading} = useGames(gameQuery);
  const skeletons= [1, 2, 3, 4, 5, 6, 7, 8];
  const bgColour = useColorModeValue('#edf2f7', '#2d3748');
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 5}}
        padding={10}
        spacing={4}>
        {isLoading && skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton bgColour={bgColour}/>
          </GameCardContainer>
        ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} bgColour={bgColour}/>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
