const baseUrl = '/api/'

export default (options) => {
  const url = `${baseUrl}${options.typeSelect}?q=${encodeURI(options.query)}&from=${options.fromDate}&to=${options.toDate}&page=${options.page}&language=${options.language}`
  const req = new Request(url)
  const params = {
    method: 'GET'
  }
  return fetch(req, params)
}
