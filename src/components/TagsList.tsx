import { Badge, HStack } from "@chakra-ui/react";

const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "pink",
  "yellow",
  "teal",
  "cyan",
  "orange",
  "gray",
];

const tagColor = (tag: string) => {
  // calculate hash of tag and use it to get color from colors array
  const index =
    tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;
  return colors[index];
};

export const TagsList = ({ tags }: { tags: string[] }) => (
  <HStack>
    {tags.map((tag) => (
      <Badge colorScheme={tagColor(tag)} key={tag}>
        {`#${tag}`}
      </Badge>
    ))}
  </HStack>
);
