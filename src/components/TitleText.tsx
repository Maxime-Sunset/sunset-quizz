import { Box, Text } from "@chakra-ui/react";

export default function TitleText() {
    const part1 = `QUIZ : `
    const part2 = `GENERATION 80 !`
    
    return (
        <Box display="flex" fontSize="3rem" w="100wv">
            <Text fontSize={["1.8rem", "2rem"]} flexWrap="nowrap" color="#24b3fb">{part1}</Text>
            <Text fontSize={["1.8rem", "2rem"]} flexWrap="nowrap" color="#f203a6">{part2}</Text>
        </Box>
    )
}