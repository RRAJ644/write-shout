// InfoBar Component
interface InfoBarProps {
  tabs: string[]
}

const InfoBar = ({ tabs }: InfoBarProps) => {
  return (
    <aside className='max-w-xs w-full rounded-lg shadow-md p-6 border dark:bg-gray-800 dark:text-white bg-white text-black'>
      <h2 className='text-2xl font-semibold text-center mb-4'>
        Script Information
      </h2>
      <ul className='space-y-2'>
        {tabs.map((tab) => (
          <li
            key={tab}
            className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-center cursor-pointer transition-colors'
          >
            {tab}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default InfoBar
