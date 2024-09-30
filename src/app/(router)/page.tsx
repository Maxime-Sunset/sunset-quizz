"use client"

import { Link } from "@chakra-ui/next-js";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" h="100vh" w="100%" mx="auto" pt="2rem" textAlign="center" bgGradient={"linear(to-t, #7928CA, #FF0080)"}>
      <Heading
      as="h1"
      color="white"
      fontWeight="bolder"
      textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
      >Sunties Quiz</Heading>
      <Link color="white" textDecoration="underline" href={`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`}>{`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`}</Link>
    </Box>
  )
}