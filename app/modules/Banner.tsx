import { Box, Heading, Button, Text, Stack } from '@chakra-ui/react'

export const Banner = () => {
  return (
    <Box height={'70vh'} pt={'30%'} zIndex={10}>
      <Stack>
        <Heading as='h1' size='3xl' color='grey'>
          Hi, I'm Simon
        </Heading>
        <Text fontSize='xl' color='grey'>
          Multi-talent from Bergen
        </Text>
        <Box>
          <a href='mailto:simon.riple@gmail.com'>
            <Button borderRadius='full' colorScheme='orange'>
              Contact me
            </Button>
          </a>
        </Box>
      </Stack>
    </Box>
  )
}
