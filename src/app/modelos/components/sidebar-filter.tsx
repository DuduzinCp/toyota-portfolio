import FilterModal from './filter-modal'

export default function SidebarFilter() {
  return (
    <div className="mt-6 flex w-full justify-between rounded-md p-3 shadow-md">
      <h3 className="font-bold">Filtre suas escolhas!</h3>
      <FilterModal />
    </div>
  )
}
