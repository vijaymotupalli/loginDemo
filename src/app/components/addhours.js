import React from "react";
import '../containers/styles.css';

export const Select = (props) => {
    console.log("------props in products-----",props)
    var slectedtime =[]
    return (
        <div  >
            <div  className="cardWidget">
                <div  className="cardBottom">
                    <div  className="row">
                        <form onSubmit={(e)=> {e.preventDefault(),console.log(e)}}>
                        <label htmlFor="Hours" >Hours</label>
                                <select >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </select>
                        <label htmlFor="Hours" >Mins</label>
                        <select >
                            <option>10</option>
                            <option>20</option>
                            <option>20</option>
                            <option>20</option>
                            <option>20</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                        <label htmlFor="Hours" >Pojects</label>
                        <select >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        <button  className="btn blackButton" >Add</button>
                        <button  className="btn blackButton">Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}