import {
  Center,
  Container,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next'
import client from '../client'
import { IProject } from '../model/project'
import { IWorkshop } from '../model/workshop'
import { Banner } from '../modules/Banner'
import { Footer } from '../modules/Footer'
import { Projects } from '../modules/Projects'
import { Workshops } from '../modules/Workshops'
import { BustIllustration } from '../modules/illustration/BustIllustration'

export async function getStaticProps() {
  const projectData: IProject[] = await client.fetch(`
    *[_type == "project"] | order(sortOrder desc)
  `)
  const workshopData: IWorkshop[] = await client.fetch(`
  *[_type == "workshop"] | order(sortOrder desc)
`)
  return {
    props: {
      projectData,
      workshopData,
    },
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projectData,
  workshopData,
}) => {
  return (
    <>
      <Container minH='100dvh'>
        <Stack>
          <Banner />
          <BustIllustration />
          <Tabs variant='soft-rounded' colorScheme='orange'>
            <Center>
              <TabList>
                <Tab>Building</Tab>
                <Tab>Sharing</Tab>
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Projects projectData={projectData} />
              </TabPanel>
              <TabPanel>
                <Workshops workshopData={workshopData} />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Footer />
        </Stack>
      </Container>
    </>
  )
}

export default Home
