import ListModels from './components/list-models'
import SidebarFilter from './components/sidebar-filter'

export default function Modelos() {
  return (
    <div className="flex w-[90%] flex-col space-y-6">
      <SidebarFilter />
      <ListModels />
    </div>
  )
}
