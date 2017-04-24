import React from 'react'
import ReactDOM from 'react-dom';
import SockConnection from './SockConnection'
class App extends React.Component{
    render(){
        return(<SockConnection />)

    }
}
ReactDOM.render(<App/>,document.getElementById("app"));