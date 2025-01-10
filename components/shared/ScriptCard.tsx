import React from 'react'

interface ScriptCardProps {
  title?: string
  description?: string
  defaultBackground?: string
  hoverBackground?: string
  overlayColor?: string
  textColor?: string
  className?: string
}

const ScriptCard: React.FC<ScriptCardProps> = ({
  title = 'Background Overlays',
  description = 'This card is for some special elements, like displaying background gifs on hover only.',
  defaultBackground = 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  hoverBackground = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif',
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  textColor = 'text-gray-50',
  className = '',
}) => {
  return (
    <div className={`max-w-xs w-full ${className}`}>
      <div
        className={`group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 transition-all duration-500`}
        style={{
          backgroundImage: `url(${defaultBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={(e) => {
          ;(
            e.currentTarget as HTMLElement
          ).style.backgroundImage = `url(${hoverBackground})`
        }}
        onMouseLeave={(e) => {
          ;(
            e.currentTarget as HTMLElement
          ).style.backgroundImage = `url(${defaultBackground})`
        }}
      >
        <div
          className='absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-50'
          style={{ backgroundColor: overlayColor }}
        ></div>
        <div className='text relative z-10'>
          <h1 className={`font-bold text-xl md:text-3xl ${textColor}`}>
            {title}
          </h1>
          <p className={`font-normal text-base ${textColor} my-4`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ScriptCard
