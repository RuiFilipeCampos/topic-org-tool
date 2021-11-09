import { extendTheme, withDefaultColorScheme} from "@chakra-ui/react"


const theme = extendTheme(withDefaultColorScheme(
        { 
            useSystemColorMode: false,
            initialColorMode:  "light",
        }
    )
)

export default theme;
