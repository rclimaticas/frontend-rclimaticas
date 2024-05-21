import { useEffect, useRef } from 'react'
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useClipboard,
  VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function Actions() {
  const value = 'https://rclimaticas.com/jvittor'
  const { hasCopied, onCopy } = useClipboard(value)

  const profileUrl = useRef(null)

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus()
      profileUrl.current.select()
    }
  })

  return (
    <VStack py={10} px={5} spacing={3}>
      <Button as={RouterLink} to="/" w="full" variant="outline">
        Voltar a página inicial
      </Button>
    </VStack>
  )
}