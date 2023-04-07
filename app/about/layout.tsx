import React from 'react'

const AboutLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <h1>About Page Layout</h1>
      {children}
    </div>
  )
}

export default AboutLayout