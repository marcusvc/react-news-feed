const baseUrl = '/api/'

function _createURL (options) {
  if (options.typeSelect === 'everything') {
    return _createEverythingUrl(options)
  } else if (options.typeSelect === 'top-headlines') {
    return _createTopHeadlinesUrl(options)
  } else {
    throw new Error(`The news type ${options.typeSelect} is not valid`)
  }
}

function _createEverythingUrl (options) {
  const { fromDate, toDate, language, query } = options
  let url = ''
  if (fromDate) {
    url += `&from=${encodeURI(fromDate)}`
  }
  if (toDate) {
    url += `&to=${encodeURI(toDate)}`
  }
  if (language) {
    url += `&language=${encodeURI(language)}`
  }
  if (query) {
    url += `&q=${encodeURI(query)}`
  }
  return url
}

function _createTopHeadlinesUrl (options) {
  const { country, category, query } = options
  let url = ''
  if (country) {
    url += `&country=${encodeURI(country)}`
  }
  if (category) {
    url += `&category=${encodeURI(category)}`
  }
  if (query) {
    url += `&q=${encodeURI(query)}`
  }
  return url
}

export default (options) => {
  // const url = `${baseUrl}${options.typeSelect}?page=${options.page}&q=${encodeURI(options.query)}&from=${options.fromDate}&to=${options.toDate}&language=${options.language}`
  const url = `${baseUrl}${options.typeSelect}?page=${options.page}${_createURL(options)}`
  const req = new Request(url)
  const params = {
    method: 'GET'
  }
  return fetch(req, params)
}
