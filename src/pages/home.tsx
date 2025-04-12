import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import { Link } from 'wouter'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row items-center justify-center mt-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
        <p className="mt-8">
        It’s working!
        </p>
        <p className="mt-8">
        Check out the <Link to="demo/button-demo" className="text-blue-600 underline">Button</Link> and <Link to="demo/form-demo" className="text-blue-600 underline">Form</Link> demo pages.
        </p>
      </div>
    </>
  )
}

export default Home
