import './App.css'
import Child from './components/Chiled.jsx'
import Expression from './components/Fragment.jsx'
import { Fragment } from 'react'
function App() {
  return (
  <Fragment>
      <Child />
      <div className='font'><h1>Today&apos;s toppic</h1> </div>
      <Expression />
  </Fragment>
  )
}

export default App
