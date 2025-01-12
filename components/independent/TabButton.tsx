interface TabButtonProps {
  label: string
  onClick?: () => void
  className?: string
  activeTab: string
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  onClick,
  className,
  activeTab,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative p-[3px] rounded-lg overflow-hidden ${
        className || ''
      }`}
    >
      <div className='absolute inset-0 animate-border bg-gradient-to-r from-gray-300 via-gray-500 to-white rounded-lg bg-[length:200%] z-[-1]' />
      <div className='px-8 py-3 bg-black rounded-lg relative text-white hover:bg-transparent text-xl font-normal hover:text-neutral-900'>
        {label}
      </div>
    </button>
  )
}

export default TabButton
