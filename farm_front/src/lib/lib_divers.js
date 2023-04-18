//soumission
function optionsREST(methodApi, data) {
    let request = {
      method: methodApi,
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    }
    if (data != undefined
      & data != null
      & typeof (data) != 'number'
      & typeof (data) != 'string') { request.body = JSON.stringify(data) }
    return request
  }

const ROOT = 'http://localhost:8000/'


module.exports = {
  optionsREST,
  ROOT,
}
