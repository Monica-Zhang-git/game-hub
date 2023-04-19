import {
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid spacing={3}>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCropppedImageUrl(genre.image_background)}
                boxSize="32px"
                overflow="hidden"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </SimpleGrid>
  );
};

export default GenreList;
