/**
 * Created by deepanshu on 4/23/17.
 */
var React = require('react');

 class Todo extends React.Component {
    constructor(props) {
        super(props)
            }
    render() {

        return (<div key="grid" id="tableDiv">
                {this.props.todo ? this.props.todo : "hello"}
            </div>
        )
    }

}
module.exports=Todo