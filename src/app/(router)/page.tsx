"use client"

import { Link } from "@chakra-ui/next-js";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Heading as="h1">Sunties Quiz</Heading>
      <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`}>{`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`}</Link>
    </Box>
  )
}