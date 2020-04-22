const baseUrl = '/api/'

export default (options) => {
  console.log(options)
  // const url = '//newsapi.org/v2/top-headlines?country=us'
  // const url = `//newsapi.org/v2/everything?q=ronaldinho&page=${this.currentPage}`
  const url = `${baseUrl}${options.typeSelect}?q=${encodeURI(options.query)}&from=${options.fromDate}&to=${options.toDate}&page=${options.page}&language=${options.language}`
  const req = new Request(url)
  const params = {
    method: 'GET'
  }
  return fetch(req, params)
}
