import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        sm: {
          bg: '#CFD249',
          _hover: {
            bg: '#bdbf47',
          },
          boxShadow: "-4px 4px 4px rgba(0, 0, 0, 0.4)",
          border: "2px", 
          width: { md: "40%" },
        },
      },
      defaultProps: {
        variant: 'sm'
      },
    },
  },
})

export default theme;