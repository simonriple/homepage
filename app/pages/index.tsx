import { InferGetStaticPropsType, NextPage } from 'next'
import { useState } from 'react'
import client from '../client'
import { IProject } from '../model/project'
import { IWorkshop } from '../model/workshop'
import { Banner } from '../modules/Banner'
import { Button } from '../modules/Button'
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
  const [selectedTab, setSelectedTab] = useState<'BUILDING' | 'SHARING'>(
    'BUILDING'
  )
  return (
    <>
      <div className='p-5'>
        <Banner />
        <BustIllustration />
        <div className='flex justify-center pb-2'>
          <Button
            selected={selectedTab === 'BUILDING'}
            onClick={() => setSelectedTab('BUILDING')}
          >
            Building
          </Button>
          <Button
            selected={selectedTab === 'SHARING'}
            onClick={() => setSelectedTab('SHARING')}
          >
            Sharing
          </Button>
        </div>

        <div className='max-w-md mx-auto'>
          {selectedTab === 'BUILDING' && <Projects projectData={projectData} />}
          {selectedTab === 'SHARING' && (
            <Workshops workshopData={workshopData} />
          )}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
