import React, { Component } from 'react'
import { COUNTRY, TYPE, CATEGORY, LANGUAGE } from '../../constant/Constant'

class Filter extends Component {
    constructor(props) {
        super(props)
        this._queryRef = React.createRef()
        this._HANDLE_MAP = {
            typeSelect: this._setType,
            country: this._setValue,
            category: this._setValue,
        }
        this.state = {
            options: {}
        }
        this._handleFilter = this._handleFilter.bind(this)
    }
    
    _handleFilterChange = (event) => {
        this._HANDLE_MAP[event.target.id](event.target)
    }

    _setType = (target) => {
        let _options = {}
        if (this._queryRef.current) {
            this._queryRef.current.value = ''
        }
        if (target.value) {
            _options[target.id] = target.value
        }
        this.setState({
            options: {..._options}
        })
    }

    _setValue = (target) => {
        this.setState((state) => {
            let _options = {...state.options}
            _options[target.id] = target.value
            return {
                options: _options
            }
        })
    }

    _handleFilter = () => {
        this.props.handleFilter({
            ...this.state.options,
            query: this._queryRef.current.value
        })
    }

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
                                <label className="input-group-text" htmlFor="typeSelect">Type</label>
                            </div>
                            <select className="custom-select" id="typeSelect" onChange={this._handleFilterChange}>
                                <option value={''}>Choose...</option>
                                {TYPE.map((type, index) => <option key={index} value={type.value}>{type.name}</option>)}
                            </select>
                        </div>
                        {this.state.options.typeSelect && this.state.options.typeSelect === 'top-headlines' &&
                        <React.Fragment>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="country">Country</label>
                            </div>
                            <select className="custom-select" id="country" onChange={this._handleFilterChange}>
                                <option value={''}>Choose...</option>
                                {COUNTRY.map((country, index) => <option key={index} value={country}>{country}</option>)}
                            </select>
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="category">Category</label>
                            </div>
                            <select className="custom-select" id="category" onChange={this._handleFilterChange}>
                                <option value={''}>Choose...</option>
                                {CATEGORY.map((category, index) => <option key={index} value={category.value}>{category.name}</option>)}
                            </select>
                        </div>
                        </React.Fragment>}
                        {this.state.options.typeSelect && this.state.options.typeSelect === 'everything' &&
                        <React.Fragment>
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
                                <option value={''}>Choose...</option>
                                {LANGUAGE.map((language, index) => <option key={index} value={language.value}>{language.name}</option>)}
                            </select>
                        </div>
                        </React.Fragment>}
                        {this.state.options.typeSelect &&
                        <React.Fragment>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="querySpan">Query</span>
                            </div>
                            <input type="text" className="form-control" id="query"
                                aria-describedby="querySpan"
                                placeholder="(lmia OR immigration OR visa OR work) AND canada"
                                ref={this._queryRef} />
                        </div>
                        <div className="input-group mb-2">
                            <button type="button" className="btn btn-light" onClick={this._handleFilter}>Apply</button>
                        </div>
                        </React.Fragment>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter