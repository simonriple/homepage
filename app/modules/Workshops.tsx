import { Stack } from '@chakra-ui/react'
import { IWorkshop } from '../model/workshop'
import { Workshop } from './Workshop'

export const Workshops = ({ workshopData }: { workshopData: IWorkshop[] }) => {
  return (
    <Stack>
      {workshopData.map((workshop, id) => (
        <Workshop key={id} {...workshop} />
      ))}
    </Stack>
  )
}
