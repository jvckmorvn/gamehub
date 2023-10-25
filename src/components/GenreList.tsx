import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

function GenreList() {
  const {data, isLoading, error} = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='6px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit='cover'
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize='lg'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} variant='link'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
