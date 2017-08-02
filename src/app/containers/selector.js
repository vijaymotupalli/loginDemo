import React from "react";
import './styles.css';

export const Selector = (props) => {
    return (
        <div>
                <div className="col-sm-12" id="titleheader">
                    <div className="col-sm-2">HOURS</div>
                    <div className="col-sm-2">MINS</div>
                    <div className="col-sm-3">PROJECTS</div>
                    <div className="col-sm-4">DESCRIPTION</div>
                    <div className="col-sm-1">+</div>
                </div>
                <form >
                    <div className="col-sm-12">
                        <div className="col-sm-2">
                            <select className="form-control" id="hours">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="saab">Saab</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="col-sm-2">
                            <select className="form-control" id="mins">
                                <option value="volvo">Volvfghho</option>
                                <option value="saab">Saab</option>
                                <option value="saab">Saab</option>
                                <option value="audi">Bbenx</option>
                            </select></div>
                        <div className="col-sm-3">
                            <select className="form-control" id="projects">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="audi">Audi</option>
                                <option value="audi">Audi</option>
                            </select></div>
                        <div className="col-sm-4" id="description">
                            <textarea className="form-control" id="exampleTextarea" rows="3" /></div>
                        <div className="col-sm-1">
                            <button type="submit">&#10004</button>
                            <button >&#10006</button>
                        </div>
                    </div>
                </form>

        </div>
    );
};