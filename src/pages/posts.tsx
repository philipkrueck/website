import {
  Link as ChakraLink,
  Container,
  Box,
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import NextLink from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

const PostCard = ({ post }) => {
  return (
    <Box mb="8">
      <Heading mb="1" size="lg">
        <ChakraLink as={NextLink} href={post.url}>
          {post.title}
        </ChakraLink>
      </Heading>
      <Text
        as="time"
        dateTime={post.date}
        mb="2"
        fontSize="xs"
        color="gray.600"
      >
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </Text>
    </Box>
  );
};

export default function Posts({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box key={1}>
      {posts.map((post) => (
        <ChakraLink as={NextLink} href={`/posts/${post.slug}`}>
          <Card key={post.slug} mb="8">
            <CardHeader>
              <Heading size="md">{post.title}</Heading>
            </CardHeader>
            <CardBody>{post.description}</CardBody>
            <CardBody>{format(parseISO(post.date), "LLLL d, yyyy")}</CardBody>
          </Card>
        </ChakraLink>
      ))}
    </Box>
  );
}
