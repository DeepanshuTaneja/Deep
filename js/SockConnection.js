/**
 * Created by deepanshu on 4/19/17.
 */
import React from 'react'
import ReactDom from 'react-dom';
import GridData from './GridData';
var Stomp = require('stompjs/lib/stomp').Stomp;
// var SockJS =require('sockjs')

// create socket connection and create dummy data and pass data to child Component
export default class SockConnection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {messages: []}
        this.timer = null
        this.connection = null
        this.fetchData = this.fetchData.bind(this)
    }

    componentWillMount() {
        // this is an "echo" websocket service
        this.connection = new WebSocket('wss://echo.websocket.org');

        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                messages: this.state.messages.concat(evt.data.slice(1, -1))
            })
        };
        // fetch random json data
        this.fetchData()
    }


    render() {
        return (
            <div key="socketConn">
                <div id="heading"><h1>Asset Management Development</h1></div>
                <GridData messages={this.state.messages}/>

            </div>
        )
    }

    componentWillUnmount() {
        if (this.timer) {
            //onUnmount this.timer resource need to free
            clearInterval(this.timer)
        }
        if (this.connection) {
            //onUnmount no need of connection
            this.connection.close()
        }
    }
    //send data after every 30 seconds
    fetchData() {
        this.timer = setInterval(e => {
            this.connection.send(JSON.stringify([{
                "id": Math.round(Math.random() * (1000 - 1) + 1),
                "name": "Deep",
                "currencyValue": (Math.random() * (100 - 1) + 1)

            }]))
        }, 3000)
    }
}
