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
import { CanvasIllustration } from '../modules/illustration/CanvasIllustration'
import { Projects } from '../modules/Projects'
import { Workshops } from '../modules/Workshops'

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
      <Container minH='100vh' zIndex={10}>
        <Stack>
          <Banner />
          <Tabs variant='soft-rounded' colorScheme='orange'>
            <Center zIndex={10}>
              <TabList>
                <Tab>Projects</Tab>
                <Tab>Workshops</Tab>
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
      <CanvasIllustration />
    </>
  )
}

export default Home
