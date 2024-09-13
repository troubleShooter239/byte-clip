import { extendTheme } from '@mui/joy/styles'

const darkTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          // main: "#2a2a2f"
        },
        background: {
          body: '#2a2a2f',
        },
      },
    },
  },
  fontFamily: {
    body: 'Nunito',
  },
})

export default darkTheme
