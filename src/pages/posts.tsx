import {
  Link as ChakraLink,
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import NextLink from "next/link";
import { format, parseISO, compareDesc } from "date-fns";
import { allPosts, Post } from ".contentlayer/generated";
import { TagsList } from "src/components/TagsList";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date)),
  );
  return { props: { posts: sortedPosts } };
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box key={1}>
      {posts.map((post) => (
        <ChakraLink
          as={NextLink}
          href={`/posts/${post.slug}`}
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          <Card
            key={post.slug}
            mb="8"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <CardHeader>
              <Heading size="md">{post.title}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start">
                <HStack>
                  <Text
                    fontStyle={"italic"}
                    as="time"
                    dateTime={post.date}
                    fontSize="s"
                    color="gray.500"
                  >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </Text>
                  <TagsList tags={post.tags} />
                </HStack>
              </VStack>
            </CardBody>
          </Card>
        </ChakraLink>
      ))}
    </Box>
  );
}
