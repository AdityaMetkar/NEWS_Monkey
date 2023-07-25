import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Holder from './components/Holder';
import Description from './components/Description';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

    state={
        progress:0
      }
  
      setprogress=(p)=>{
        this.setState({progress:p})
      }

  render() {

    // Get your free API key from NewsAPI.com and put it below

    let apikey=" API_KEY " // <---- Enter Your API Key HERE




    return (
      <Router>
      <>
      <Navbar/>
      <LoadingBar
      color='red'
      height={4}
      progress={this.state.progress}/>
      <Routes>
        <Route exact path="/" element={<Holder progress={this.setprogress} key="home" country="in" category="general" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path="/entertainment" element={<Holder progress={this.setprogress} key="entertainment" country="in" category="entertainment" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path="/business" element={<Holder progress={this.setprogress} key="business" country="in" category="business" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path="/health" element={<Holder progress={this.setprogress} key="health" country="in" category="health" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path="/science" element={<Holder progress={this.setprogress} key="science" country="in" category="science" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path="/sports" element={<Holder progress={this.setprogress} key="sports" country="in" category="sports" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path="/technology" element={<Holder progress={this.setprogress} key="technology" country="in" category="technology" total={10} updatevalue={this.updatevalue} api={apikey}/>}/>
        <Route exact path='/description' element={<Description/>}/>
        <Route exact path='/about' element={<h3>This App is made by yours truely <strong>Aditya Metkar</strong> :D</h3>}/>
      </Routes>
      </>
      </Router>
    )
  }
}
