import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

function App() {
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
        <NavBar/>
      </GridItem>
      <Show above='lg'>
        <GridItem gridArea='aside' paddingX={4} paddingTop={6}>
          <GenreList/>
        </GridItem>
      </Show>
      <GridItem gridArea='main'>
        <Box paddingLeft={10}>
          <GameHeading/>
          <Flex>
            <Box marginRight={4}>
              <PlatformSelector/>
            </Box>
            <SortSelector/>
          </Flex>
        </Box>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
