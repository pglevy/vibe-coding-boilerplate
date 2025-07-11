import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'wouter'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row items-center justify-center mt-sail-more">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sail-extra-large font-bold mb-sail-more">Vite + React + SAIL</h1>
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90 mb-sail-less"
        >
          count is {count}
        </button>
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-sail-positive text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90"
        >
          SAIL Button: {count}
        </button>
        <p className="mt-sail-more text-sail-standard">
          It's working with SAIL design tokens!
        </p>
        <p className="mt-sail-more text-sail-standard">
          Check out the <Link to="demo/button-demo" className="text-sail-accent underline">Button</Link> and <Link to="demo/form-demo" className="text-sail-accent underline">Form</Link> demo pages.
        </p>
        <p className="mt-sail-less text-sail-standard">
          View <Link to="sail-examples" className="text-sail-accent underline">SAIL Examples</Link> or <Link to="process-list" className="text-sail-accent underline">Process Dashboard</Link>.
        </p>
      </div>
    </>
  )
}

export default Home
