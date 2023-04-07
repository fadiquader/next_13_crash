'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import LoadingPage from "./loading"
import Courses from "./components/Courses"
import CourseSearch from "./components/CourseSearch"

const HomePage = () => {
  const [courses, setCourses] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Home Page</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage
