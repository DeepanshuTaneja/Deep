/**
 * Created by deepanshu on 4/19/17.
 */
import React from 'react'
import ReactDom from 'react-dom';
import $ from 'jquery'
import Sparkline from 'jquery-sparkline'
export default class GridData extends React.Component {
    constructor(props) {
        super(props)
        this.message = []
        this.columns = []
        this.dataList = []
        this.sparkLineData = []
        this.init = this.init.bind(this)
        this.convertDataIntoArr = this.convertDataIntoArr.bind(this)
        this.convertDataIntoTableFormat = this.convertDataIntoTableFormat.bind(this)
        this.sortedData = this.sortedData.bind(this)
    }
    //sort and add data to the sparkline field
    init(props) {
        this.convertDataIntoArr(props.messages)
        if (this.message.length > 1) {
            this.sortedData()
        } else if (this.message.length) {
            this.sparkLineData.push(this.message[0].id)
        }
    }

    componentWillMount() {
        this.init(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps)

    }

    render() {
        if (this.sparkLineData.length) {
            $('.sparkline').sparkline(this.sparkLineData.slice(Math.max(this.sparkLineData.length - 30, 1)));
        }
        let tableData = this.convertDataIntoTableFormat()
        return (<div key="grid" id="tableDiv">
                {this.table ? this.table : null}
            </div>
        )
    }

    convertDataIntoArr(messages) {
        this.message = []
        for (let i in messages) {
            this.message.push(JSON.parse(messages[i]))
        }

    }

    // sort data required for table in ascending order on basis of ID
    sortedData() {
        var self = this;
        this.message.sort(function (a, b) {
            self.sparkLineData.push(a.id)
            self.sparkLineData.push(b.id)
            if (a.id < b.id) //sort  ascending
                return -1
            if (a.id > b.id)
                return 1
            return 0 //default return value
        })


    }

    convertDataIntoTableFormat() {
        let tableRowData = []
        for (let i in this.message) {
            let tr = <tr key={i}>
                <td>{this.message[i].id ? this.message[i].id : 0}</td>
                <td>{this.message[i].name ? this.message[i].name : ""}</td>
                <td>{this.message[i].currencyValue ? this.message[i].currencyValue : 0 }</td>
                <td><span className="sparkline">Loading..</span></td>
            </tr>

            tableRowData.push(tr);
        }
        this.table = <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Currency Value</th>
                <th>SparkLine on ID</th>
            </tr>
            </thead>
            <tbody>
            {tableRowData.length ? tableRowData : null}
            </tbody>
        </table>

    }

}
