interface Script {
  title: string
  storyline: string
  writtenBy: string
  genre: string
  language: string
  description: string
}

const DataScript = ({ script }: { script: Script }) => {
  return (
    <div className='flex-1 dark:text-white text-black rounded-lg shadow-md p-6 flex flex-col items-center justify-center border-2 w-full'>
      <h1 className='text-4xl font-bold mb-4'>{script.title}</h1>

      <h2 className='mb-4 text-2xl'>{script.storyline}</h2>

      <div className='space-x-6'>
        <strong>Written By:</strong> {script.writtenBy}
        <strong>Genre:</strong> {script.genre}
        <strong>Language:</strong> {script.language}
      </div>
      <div className='h-full'>{script.description}</div>
    </div>
  )
}

export default DataScript
