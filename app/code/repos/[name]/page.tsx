import React, { Suspense } from 'react'
import Repo from '@/app/components/Repo'
import Link from 'next/link'
import RepoDirs from '@/app/components/RepoDirs'

type Props = {
  params: { name: string }
}

const RepoPage = ({ params: { name } }: Props) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-expect-error Server Component */}
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage