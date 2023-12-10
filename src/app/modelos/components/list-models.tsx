import CardModel from './card-model'

export default function ListModels() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CardModel />
      <CardModel />
    </div>
  )
}
