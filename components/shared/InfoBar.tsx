interface InfoBarProps {
  tabs: string[]
}

const InfoBar = ({ tabs }: InfoBarProps) => {
  return (
    <aside className='max-w-xs w-full rounded-lg shadow-lg p-6'>
      <h2 className='text-2xl font-semibold text-center mb-6'>
        Script Information
      </h2>
      <ul className='space-y-4'>
        {tabs.map((tab) => (
          <li
            key={tab}
            className='text-xl px-4 py-3 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 text-center cursor-pointer transition-all shadow-sm hover:shadow-md'
          >
            {tab}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default InfoBar
