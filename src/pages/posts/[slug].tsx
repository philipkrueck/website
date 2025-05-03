import { allPosts, type Post } from "contentlayer/generated";
import { CopyIcon } from "@chakra-ui/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React, { useState } from "react";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { format, parseISO } from "date-fns";
import { TagsList } from "src/components/TagsList";
import {
  Checkbox,
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
  HStack,
  VStack,
  Code,
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
        <Text
          as="time"
          dateTime={post.date}
          fontSize="s"
          color="gray.500"
          fontStyle="italic"
        >
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </Text>
        <TagsList tags={post.tags} />
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
          pre: (props) => <pre {...props} />, // Use <pre> instead of <div>
          code: ({ className, children, ...props }) => {
            const [copied, setCopied] = useState(false);
            const codeString = String(children).trim();
            const lines = codeString.split("\n");

            const handleCopy = () => {
              navigator.clipboard.writeText(codeString).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            };

            if (lines.length === 1) {
              return (
                <Code className={className} {...props}>
                  {codeString}
                </Code>
              );
            }
            return (
              <Box position="relative" my={5}>
                <SyntaxHighlighter
                  language="yaml" // TODO: make this dynamic
                  PreTag="pre"
                  showLineNumbers
                  showInlineLineNumbers
                  {...props}
                >
                  {children}
                </SyntaxHighlighter>
                <Box position="absolute" top={2} right={2}>
                  <button onClick={handleCopy}>
                    <CopyIcon />
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </Box>
              </Box>
            );
          },

          ul: (props) => <UnorderedList my={1} {...props} />,
          ol: (props) => <OrderedList my={1} {...props} />,
          li: ({ children, ...props }) => {
            const childNodes = React.Children.toArray(children);

            let text = "";

            React.Children.forEach(childNodes, (child) => {
              if (typeof child === "string") {
                text += child;
              }
            });

            if (text.startsWith("[ ]")) {
              return (
                <VStack spacing={3} align="start">
                  <Checkbox>{text.replace("[ ]", "")}</Checkbox>
                </VStack>
              );
            }

            if (text.startsWith("[x]")) {
              return (
                <VStack spacing={3} align="start">
                  <Checkbox>{text.replace("[x]", "")}</Checkbox>
                </VStack>
              );
            }
            return <ListItem {...props}>{children}</ListItem>;
          },
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
