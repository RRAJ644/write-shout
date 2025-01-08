'use client'

const Skeleton = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div>
      <p className='font-bold md:text-4xl text-xl text-white'>{title}</p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        {description}
      </p>
    </div>
  )
}

export default Skeleton
