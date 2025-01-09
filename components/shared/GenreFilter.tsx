import React from 'react'
import CheckboxItem from '../independent/CheckboxItem'

type GenreFilterProps = {
  genres: string[]
  selectedGenres: Set<string>
  onGenreChange: (genre: string) => void
}

const GenreFilter = ({
  genres,
  selectedGenres,
  onGenreChange,
}: GenreFilterProps) => {
  return (
    <div className='rounded-lg shadow-lg'>
      <h2 className='text-2xl md:text-4xl font-normal mb-6'>Genres</h2>
      <ul className='space-y-4'>
        {genres?.map((genre) => (
          <CheckboxItem
            key={genre}
            id={genre}
            label={genre}
            isChecked={selectedGenres.has(genre)}
            onChange={() => onGenreChange(genre)}
          />
        ))}
      </ul>
    </div>
  )
}

export default GenreFilter
