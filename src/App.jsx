import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  const [progress , setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_API_KEY;


  return (
    <>
    {/* <ReactHook1/> */}
        <Router>
          <div>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            <Route path='/' element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={6} country={"in"} catrgory={"general"} />} />
            <Route path='/business' element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={6} country={"in"} catrgory={"business"} />} />
            <Route path='/entertainment' element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={"in"} catrgory={"entertainment"} />} />
            <Route path='/health' element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={6} country={"in"} catrgory={"health"} />} />
            <Route path='/science' element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={6} country={"in"} catrgory={"science"} />} />
            <Route path='/sports' element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={6} country={"in"} catrgory={"sports"} />} />
            <Route path='/technology' element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={6} country={"in"} catrgory={"technology"} />} />
            <Route path='/AboutUs' element={<AboutUs />}></Route> 
          </Routes>
          </div>
        </Router>
      </>
  )

}