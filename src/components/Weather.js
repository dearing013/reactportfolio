import React,{Component} from 'react'
import weathericon from './weathericon.png'
import './Weather.css'

class Weather extends Component {

render () {
   return (

       <div className = "weather">
           <p>Monday</p>
           <img src = {weathericon} width = "100px" />
           <p>Tuesday</p>
           <img src = {weathericon} width = "100px" />
           <p>Wednesday</p>
           <img src = {weathericon} width = "100px" />
           {/* <button onclick = {props.updateWeather}>Update</button> */}
       </div>
   )
}

}


export default Weather 