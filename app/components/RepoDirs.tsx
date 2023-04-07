import Link from 'next/link';

type RepoContent = {
  type: string,
  path: string
}

async function fetchRepoContents(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/fadiquader/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  )
  const contents: RepoContent[] = await response.json()
  return contents
}

type Props = {
  name: string
}

const RepoDirs = async ({ name }: Props) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs