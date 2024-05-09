import React, {useState} from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import ResponsiveComponent from "../../hooks/UseResponsive"

const Home = () => {
   


   const width = ResponsiveComponent()
  
  return (
    <>
      <section className='home'>
        <div className='container d_flex'>
         {width <= 900  ? "" :  <Categories />}
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home
