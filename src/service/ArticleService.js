const apiToken = 'Bearer 42b9f17d6415491581c7b393b2e6ed4c'
const baseUrl = '//newsapi.org/v2/'

export default (options) => {
  const today = new Date()
  const yesterday = new Date()
  yesterday.setDate(today.getDate() - 1)
  // const url = '//newsapi.org/v2/top-headlines?country=us'
  // const url = `//newsapi.org/v2/everything?q=ronaldinho&page=${this.currentPage}`
  const url = `${baseUrl}${options.typeSelect}?q=${encodeURI(options.query)}&from=${yesterday.toISOString().substr(0, 10)}&to=${today.toISOString().substr(0, 10)}&page=${options.page}`
  const req = new Request(url)
  const headers = new Headers({
    Authorization: apiToken
  })
  const params = {
    method: 'GET',
    mode: 'cors',
    headers: headers
  }
  return fetch(req, params)
}
