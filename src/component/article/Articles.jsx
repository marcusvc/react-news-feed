import React, { Component } from 'react'
import Article from './Article'
import Filter from '../filter/Filter'
import NavigationBar from '../navigation/NavigationBar'
import find from '../../service/ArticleService'

class Articles extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: undefined
        }
        this.handlePageClick = this.handlePageClick.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')
        const INITIAL_PAGE = 1
        this.fetch(INITIAL_PAGE)
    }

    fetch = (page) => {
        console.log('fetch')
        find({
            type: 'everything',
            query: '(lmia OR immigration OR visa OR work) AND canada',
            page: page
        })
        .then(response => response.json())
        .then(json => {
            this.pages = Math.ceil(json.totalResults / 20)
            console.log('Recuperou o json')
            this.setState({
                articles: json.articles,
                page: page
            })
        })
        .catch(error => console.log(`status:${error.status} - code:${error.code} - message:${error.message}`))
    }
    
    handlePageClick(event) {
        let page
        if (event.target.innerText === '»') {
            page = this.state.page + 1
        } else if (event.target.innerText === '«') {
            page = this.state.page - 1
        } else {
            page = parseInt(event.target.innerText, 10)
        }
        this.fetch(page)
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row no-gutters justify-content-start align-items-start row-cols-1">
                    <Filter />
                </div>
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
                    {!!this.state.articles.length && <NavigationBar pages={this.pages} currentPage={this.state.page} handleCLick={this.handlePageClick} articles={this.state.articles}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles