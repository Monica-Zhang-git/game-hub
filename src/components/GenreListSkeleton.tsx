import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Card height="32px">
      <Skeleton />
    </Card>
  );
};

export default GenreListSkeleton;
