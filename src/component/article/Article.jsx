import React, { Component } from 'react'

class Article extends Component {
    render() {
        return (
            <div className="col">
                <div className="card">
                    <a href={this.props.article.url} target="_blank" rel="noopener noreferrer">
                        <img className="card-img-top" src={this.props.article.urlToImage} alt={this.props.article.title} />
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.article.title}</h5>
                        <p className="card-text">
                            {this.props.article.description}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Fonte: {this.props.article.source.name}</small>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article