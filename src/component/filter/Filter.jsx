import React, { Component } from 'react'
import { COUNTRY, TYPE, CATEGORY, LANGUAGE } from '../../constant/Constant'

class Filter extends Component {
    /*constructor(props) {
        super(props)
    }*/
    render() {
        return (
            <div className="app-filter">
                <div className="col">
                    <button className="btn btn-link filtro" type="button" data-toggle="collapse" data-target="#filter-options" aria-expanded="true" aria-controls="filter-options">
                        Filter
                    </button>
                    <div className="collapse" id="filter-options">
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="typeGroup">Type</label>
                            </div>
                            <select className="custom-select" id="typeGroup">
                                <option defaultValue>Choose...</option>
                                {TYPE.map((type, index) => <option key={index} value={type.value}>{type.name}</option>)}
                            </select>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="country">Country</label>
                            </div>
                            <select className="custom-select" id="country">
                                <option defaultValue>Choose...</option>
                                {COUNTRY.map((country, index) => <option key={index} value={country}>{country}</option>)}
                            </select>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="category">Category</label>
                            </div>
                            <select className="custom-select" id="category">
                                <option defaultValue>Choose...</option>
                                {CATEGORY.map((category, index) => <option key={index} value={category.value}>{category.name}</option>)}
                            </select>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="querySpan">Query</span>
                            </div>
                            <input type="text" className="form-control" id="query" aria-describedby="querySpan" />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="fromDateSpan">From</span>
                            </div>
                            <input type="date" className="form-control" id="fromDate" aria-describedby="fromDateSpan" />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="toDateSpan">To</span>
                            </div>
                            <input type="date" className="form-control" id="toDate" aria-describedby="toDateSpan" />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="language">Language</label>
                            </div>
                            <select className="custom-select" id="language">
                                <option defaultValue>Choose...</option>
                                {LANGUAGE.map((language, index) => <option key={index} value={language.value}>{language.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter