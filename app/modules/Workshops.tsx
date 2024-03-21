import { IWorkshop } from '../model/workshop'
import { Workshop } from './Workshop'

export const Workshops = ({ workshopData }: { workshopData: IWorkshop[] }) => {
  return (
    <div>
      {workshopData.map((workshop, id) => (
        <Workshop key={id} {...workshop} />
      ))}
    </div>
  )
}
