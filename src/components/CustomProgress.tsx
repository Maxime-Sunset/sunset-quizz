"use client"

import { Box, Progress } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface CustomProgressProps {
    duration: number
    width: string
    max?: number
}

export default function CustomProgress({ duration, width, max }: CustomProgressProps) {
    
    const [value, setValue] = useState<number>(0)
    let clock: NodeJS.Timeout | null = null

    useEffect(() => {
        //clock = setInterval(() => tick(), duration / 100 * 1000)
        clock = setInterval(() => tick(), 1)
    }, [])

    useEffect(() => {
        if(max ? value >= max : value >= 100) {
            clearInterval(Number(clock))
        }
    }, [value])

    const tick = () => {
        if(max) {
            setValue((old) => old+(max/duration*0.01))
        } else {
            setValue((old) => old+(100/duration*0.01))
        }
    }

    return (
        <Box justifyContent="center" mx="auto" w={width}>
            <Progress
                value={value}
                min={0}
                max={max ? max : 100}
                display="flex"
                w="100%"
            />
        </Box>
    )
}