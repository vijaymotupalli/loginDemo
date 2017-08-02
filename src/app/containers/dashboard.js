// SimpleGridComponent.jsx
import React, {Component} from "react";
import './styles.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            rowscolums:[{column:2,row:1},{column:1,row:2},{column:2,row:2},{column:1,row:3}]
        }
    }



    render() {
        return (
            <div className="gridTable" >
                <table    className="table table-striped table-bordered" cellSpacing="0" width="100%">
                    <tbody>
                    <tr>
                        <td>full image</td>
                        <td>halfimage</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
};

export default Dashboard