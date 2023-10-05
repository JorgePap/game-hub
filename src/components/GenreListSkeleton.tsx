import {
  HStack,
  List,
  ListItem,
  SkeletonText,
  SkeletonCircle,
  Skeleton,
  Image,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <SkeletonCircle size="8" />
            <SkeletonText noOfLines={1} width={"50%"} skeletonHeight="10px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
