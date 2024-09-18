"use client"

import CustomProgress from "@/components/CustomProgress";
import PlayerResultView from "@/views/player/PlayerResultView";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Heading as="h1">Sunties Quiz</Heading>
      <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`}>{`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`}</Link>

      <CustomProgress duration={5} />

    </Box>
  )
}