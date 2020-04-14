import React, { Component } from 'react'

class NavigationBar extends Component {
    render() {
        let items = []
        console.log('render NavigationBar')
        console.log('pages: ', this.props.pages)
        console.log('currentPage: ', this.props.currentPage)
        console.log('articles length: ', this.props.articles.length)
        if (this.props.pages && this.props.pages < 4) {
            for (let i=1; i <= this.props.pages; i++) {
                items.push(<li key={i} className="page-item"><button className="page-link" disabled={i === this.props.currentPage} onClick={this.props.handleCLick}>{i}</button></li>)
            }
            return (
                <nav aria-label="navigation">
                    <ul className="pagination">
                        {items}
                    </ul>
                </nav>
            )
        } else if (this.props.pages > 3) {
            if (this.props.currentPage === 1) {
                items.push(<li key={1} className="page-item"><button className="page-link" disabled={true}>{1}</button></li>)
                items.push(<li key={2} className="page-item"><button className="page-link" disabled={false} onClick={this.props.handleCLick}>{2}</button></li>)
                items.push(<li key={3} className="page-item"><button className="page-link" disabled={false} onClick={this.props.handleCLick}>{3}</button></li>)
            } else if (this.props.currentPage === this.props.pages) {
                items.push(<li key={1} className="page-item"><button className="page-link" disabled={false} onClick={this.props.handleCLick}>{this.props.pages - 2}</button></li>)
                items.push(<li key={2} className="page-item"><button className="page-link" disabled={false} onClick={this.props.handleCLick}>{this.props.pages - 1}</button></li>)
                items.push(<li key={3} className="page-item"><button className="page-link" disabled={true}>{this.props.pages}</button></li>)
            } else {
                items.push(<li key={1} className="page-item"><button className="page-link" disabled={false} onClick={this.props.handleCLick}>{this.props.currentPage - 1}</button></li>)
                items.push(<li key={2} className="page-item"><button className="page-link" disabled={true}>{this.props.currentPage}</button></li>)
                items.push(<li key={3} className="page-item"><button className="page-link" disabled={false} onClick={this.props.handleCLick}>{this.props.currentPage + 1}</button></li>)
            }
            return (
                <nav aria-label="navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous" disabled={this.props.currentPage === 1} value={this.props.currentPage - 1} onClick={this.props.handleCLick}>
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {items}
                        <li className="page-item">
                            <button  className="page-link" aria-label="Next" disabled={this.props.currentPage === this.props.pages} value={this.props.currentPage + 1} onClick={this.props.handleCLick}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            )
        }
    }
}

export default NavigationBar