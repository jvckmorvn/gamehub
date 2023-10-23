import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem gridArea='nav'>
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above='lg'>
        <GridItem gridArea='aside' paddingX={4} paddingTop={6}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem gridArea='main'>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex>
            <Box marginRight={4}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({...gameQuery, platform})}/>
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
