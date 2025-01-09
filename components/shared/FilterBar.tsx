'use client'
import { useState, useCallback } from 'react'
import GenreFilter from './GenreFilter'
import { GENRES } from '@/constants/constants'

const FilterBar = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set())

  const handleGenreChange = useCallback((genre: string) => {
    setSelectedGenres((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(genre)) {
        newSet.delete(genre)
      } else {
        newSet.add(genre)
      }
      return newSet
    })
  }, [])

  return (
    <div className='h-fit z-50 text-white border-gray-600 rounded-lg border-2 w-[20rem] pl-14 p-10'>
      <GenreFilter
        genres={GENRES}
        selectedGenres={selectedGenres}
        onGenreChange={handleGenreChange}
      />
    </div>
  )
}

export default FilterBar
