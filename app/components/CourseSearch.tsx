'use client'

import React, { useState } from 'react'

const CourseSearch = ({ getSearchResults }: { getSearchResults: (courses: any[]) => void }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          className='search-input'
          placeholder='Search Courses...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
    </div>
  )
}

export default CourseSearch