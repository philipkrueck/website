import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { format, parseISO } from "date-fns";
import {
  Badge,
  UnorderedList,
  OrderedList,
  Text,
  Heading,
  Box,
  Link,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Divider,
  Image,
  ListItem,
  Code,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { getMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const colors = ["red", "green", "blue", "purple", "pink", "yellow", "teal"];

const tagColor = (tag: string) => {
  const index = tag.charCodeAt(0) % colors.length;
  return colors[index];
};

const SinglePostPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Content = getMDXComponent(post.body.code);

  return (
    <Box as="article">
      <Heading as="h1" size="xl">
        {post.title}
      </Heading>
      <HStack mt={3}>
        <Text as="time" dateTime={post.date} fontSize="s" color="gray.600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </Text>

        {post.tags.map((tag) => (
          <Badge colorScheme={tagColor(tag)} key={tag}>
            {`#${tag}`}
          </Badge>
        ))}
      </HStack>
      <Content
        components={{
          h1: (props) => <Heading as="h1" size="xl" my={6} {...props} />,
          h2: (props) => <Heading as="h2" size="lg" my={5} {...props} />,
          h3: (props) => <Heading as="h3" size="md" my={4} {...props} />,
          h4: (props) => <Heading as="h4" size="sm" my={3} {...props} />,
          h5: (props) => <Heading as="h5" size="xs" my={2} {...props} />,
          h6: (props) => <Heading as="h6" size="xs" my={1} {...props} />,
          p: (props) => <Text my={3} {...props} />,
          a: (props) => (
            <Link
              my={3}
              isExternal
              color="jj.500"
              fontWeight={550}
              {...props}
            />
          ),
          pre: (props) => <Code my={3} {...props} />,
          inlineCode: (props) => <Code my={3} {...props} />,
          ul: (props) => <UnorderedList my={1} {...props} />,
          ol: (props) => <OrderedList my={1} {...props} />,
          li: (props) => <ListItem my={1} {...props} />,
          img: (props) => <Image my={3} {...props} />,
          hr: (props) => <Divider my={3} {...props} />,
          blockquote: (props) => (
            <Box
              as="blockquote"
              ml={5}
              pl={3}
              borderLeftWidth={2}
              borderLeftColor="gray.200"
              {...props}
            />
          ),
          table: (props) => <Table {...props} />,
          thead: (props) => <Thead {...props} />,
          tbody: (props) => <Tbody {...props} />,
          tr: (props) => <Tr {...props} />,
          th: (props) => <Th {...props} />,
          td: (props) => <Td {...props} />,
        }}
      />
    </Box>
  );
};

export default SinglePostPage;
