import React from 'react'
import {BrowserRouter as  Router } from 'react-router-dom';
import Bar from './../Bar/Bar';
import Routers from './../../router/Routers';
import './../styles/style.css'
interface AppTs{

}
 const App:React.FC<AppTs> =()=> {
    return (
       <Router>
            <div className="container">
                <Bar />
                <Routers />
            </div>
       </Router>
    )
}
export default App;