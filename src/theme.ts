import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'grey.600',
        lineHeight: 'tall',
      },
    }
  },
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
});