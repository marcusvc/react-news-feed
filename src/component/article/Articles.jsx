import React, { Component } from 'react'
import Article from './Article'
import Filter from '../filter/Filter'
import Loading from '../loading/Loading'
import NavigationBar from '../navigation/NavigationBar'
import find from '../../service/ArticleService'

class Articles extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: undefined,
            options: {}
        }
        this.INITIAL_PAGE = 1
        this._handlePageClick = this._handlePageClick.bind(this)
    }
    
    componentDidMount() {
        const today = new Date()
        const yesterday = new Date()
        yesterday.setDate(today.getDate() - 1)
        const INITIAL_OPTIONS = {
            typeSelect: 'everything',
            query: '(lmia OR immigration OR visa OR work) AND canada',
            from: yesterday.toISOString().substr(0, 10),
            to: today.toISOString().substr(0, 10),
            language: 'en'
        }
        this._fetch(this.INITIAL_PAGE, INITIAL_OPTIONS)
    }

    _fetch = (page, options) => {
        this.setState({ articles: [] })
        find({
            ...options,
            page: page
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.text()
            }
        })
        .then(body => {
            if (typeof body !== 'string') {
                this.pages = Math.ceil(body.totalResults / 20)
                this.setState({
                    articles: body.articles,
                    page: page,
                    options: {...options}
                })
            } else {
                let json = JSON.parse(body)
                throw json
            }
        })
        .catch(error => {
            // TODO: Handle error. Show up a modal or something
            console.log(`status:${error.status} - code:${error.code} - message:${error.message}`)
        })
    }
    
    _handlePageClick(event) {
        let page
        if (event.target.innerText === '»') {
            page = this.state.page + 1
        } else if (event.target.innerText === '«') {
            page = this.state.page - 1
        } else {
            page = parseInt(event.target.innerText, 10)
        }
        this._fetch(page, this.state.options)
    }

    _handleFilter = (options) => {
        this._fetch(this.INITIAL_PAGE, options)
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row no-gutters justify-content-start align-items-start row-cols-1">
                    <Filter handleFilter={this._handleFilter} />
                </div>
                {!this.state.articles.length && <Loading />}
                <div className="row no-gutters align-items-start row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    {!!this.state.articles.length && this.state.articles.map((article, index) => <Article key={index} article={article} />)}
                </div>
                <div className="row no-gutters row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                        <p>&nbsp;</p>
                    </div>
                </div>
                <div className="row no-gutters justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                    <div className="col">
                        {!!this.state.articles.length && <NavigationBar pages={this.pages} currentPage={this.state.page} handleCLick={this._handlePageClick} articles={this.state.articles}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles