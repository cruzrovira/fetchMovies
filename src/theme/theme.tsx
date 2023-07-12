import { StyleFunctionProps, extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
const theme = extendTheme({
  styles: {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: true,
    },
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        background: mode("gray.100", undefined)(props),
      },
    }),
  },
})

export default theme
