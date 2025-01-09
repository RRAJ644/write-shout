import ScriptCard from '@/components/shared/ScriptCard'

const WebSeries = () => {
  return (
    <div className='w-full text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {new Array(9).fill(null).map((_, i) => (
        <ScriptCard key={i} />
      ))}
    </div>
  )
}

export default WebSeries
