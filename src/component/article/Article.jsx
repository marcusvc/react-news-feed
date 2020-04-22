import React from 'react'

function Article (props) {
  return (
    <div className="col">
      <div className="card">
        <a href={props.article.url} target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src={props.article.urlToImage} alt={props.article.title} />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.article.title}</h5>
          <p className="card-text">
            {props.article.description}
          </p>
          <p className="card-text">
            <small className="text-muted">Fonte: {props.article.source.name}</small>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Article
