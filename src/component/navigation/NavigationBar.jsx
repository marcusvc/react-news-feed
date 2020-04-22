import React from 'react'

function NavigationBar (props) {
  const items = []
  console.log('render NavigationBar')
  console.log('pages: ', props.pages)
  console.log('currentPage: ', props.currentPage)
  console.log('articles length: ', props.articles.length)
  if (props.pages && props.pages < 4) {
    for (let i = 1; i <= props.pages; i++) {
      items.push(<li key={i} className="page-item"><button className="page-link" disabled={i === props.currentPage} onClick={props.handleCLick}>{i}</button></li>)
    }
    return (
      <nav aria-label="navigation">
        <ul className="pagination">
          {items}
        </ul>
      </nav>
    )
  } else if (props.pages > 3) {
    if (props.currentPage === 1) {
      items.push(<li key={1} className="page-item"><button className="page-link" disabled={true}>{1}</button></li>)
      items.push(<li key={2} className="page-item"><button className="page-link" disabled={false} onClick={props.handleCLick}>{2}</button></li>)
      items.push(<li key={3} className="page-item"><button className="page-link" disabled={false} onClick={props.handleCLick}>{3}</button></li>)
    } else if (props.currentPage === props.pages) {
      items.push(<li key={1} className="page-item"><button className="page-link" disabled={false} onClick={props.handleCLick}>{props.pages - 2}</button></li>)
      items.push(<li key={2} className="page-item"><button className="page-link" disabled={false} onClick={props.handleCLick}>{props.pages - 1}</button></li>)
      items.push(<li key={3} className="page-item"><button className="page-link" disabled={true}>{props.pages}</button></li>)
    } else {
      items.push(<li key={1} className="page-item"><button className="page-link" disabled={false} onClick={props.handleCLick}>{props.currentPage - 1}</button></li>)
      items.push(<li key={2} className="page-item"><button className="page-link" disabled={true}>{props.currentPage}</button></li>)
      items.push(<li key={3} className="page-item"><button className="page-link" disabled={false} onClick={props.handleCLick}>{props.currentPage + 1}</button></li>)
    }
    return (
      <nav aria-label="navigation">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" aria-label="Previous" disabled={props.currentPage === 1} value={props.currentPage - 1} onClick={props.handleCLick}>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {items}
          <li className="page-item">
            <button className="page-link" aria-label="Next" disabled={props.currentPage === props.pages} value={props.currentPage + 1} onClick={props.handleCLick}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavigationBar
