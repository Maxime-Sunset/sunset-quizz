import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'grey.600',
        lineHeight: 'tall',
      },
      heading: {
        fontWeight: "bolder"
      },
      'h1': {

      },
      'h2': {

      },
      'h3': {
        fontSize: "4xl",
        fontWeight: "bolder"
      },
      'h4': {
        
      }
    }
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
});