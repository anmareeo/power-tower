import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SearchAppBar from "./components/SearchAppBar"
import About from './components/About'
import Photos from './components/Photos'
import Contact from './components/Contact'
import MainPage from './components/MainPage'
import Testimonials from './components/Testimonials'
import {ThemeProvider} from '@material-ui/styles'
import {createMuiTheme} from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'






const theme = createMuiTheme({
    palette: {
        primary: indigo
    }
})

export default function MainRouter(){
    return(
        <div> 
            <ThemeProvider theme = {theme}>
            <Router>
                <SearchAppBar></SearchAppBar>
                <Switch>
                    <Route  path = "/about" component = {About}></Route>
                    <Route  path = "/photos" component = {Photos}></Route>
                    <Route  path = "/testimonials" component = {Testimonials}></Route>
                    <Route  path = "/contact" component = {Contact}></Route>
                    <Route  path = "/" component = {MainPage}></Route>
                </Switch>
            </Router>
            </ThemeProvider>
        </div>
    )
}