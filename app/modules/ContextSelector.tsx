import { Button, Center, Divider, HStack, Text, VStack } from '@chakra-ui/react'

export type Context = 'Projects' | 'Events'

export const ContextSelector = ({
  context,
  setContext,
}: {
  context: Context
  setContext: (context) => void
}) => {
  return (
    <Center>
      <HStack>
        <Button colorScheme='orange' isActive>
          Projects
        </Button>
        <Divider colorScheme='orange' orientation='vertical' />
        <Button colorScheme='orange'>Events</Button>
      </HStack>
    </Center>
  )
}
