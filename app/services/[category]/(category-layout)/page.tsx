'use client'
import ScriptCard from '@/components/shared/ScriptCard'
import { useParams, usePathname, useRouter } from 'next/navigation'

const Category = () => {
  const url = usePathname()
  const router = useRouter()

  const title = 'Dynamic Background Card'

  console.log(url, '==111')
  return (
    <div
      className='w-full text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
      onClick={() => router.push(`${url}/${title}`)}
    >
      {new Array(9).fill(null).map((_, i) => (
        <ScriptCard
          key={i}
          title={title}
          description='Hover over this card to see the magic!'
          defaultBackground='https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          hoverBackground='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif'
          overlayColor='rgba(0, 0, 0, 0.6)'
          textColor='text-white'
        />
      ))}
    </div>
  )
}

export default Category
