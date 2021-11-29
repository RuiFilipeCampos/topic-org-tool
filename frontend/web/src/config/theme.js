import { extendTheme, withDefaultColorScheme} from "@chakra-ui/react"


const theme = extendTheme(withDefaultColorScheme(
        { 
            useSystemColorMode: true,
            initialColorMode:  "light",
        }
    )
)

export default theme;
