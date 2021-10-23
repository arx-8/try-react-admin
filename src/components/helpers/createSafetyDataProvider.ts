import { stringify } from "query-string"
import { fetchUtils } from "ra-core"
import createDataProvider from "ra-data-json-server"
import { sleep } from "src/utils"

// const apiUrl = "http://jsonplaceholder.typicode.com"
const apiUrl = "http://localhost:9999"

const httpClient: typeof fetchUtils.fetchJson = async (url, options = {}) => {
  options.headers = new Headers({ Accept: "application/json" })
  // MEMO: await 使える
  const token = await sleep(10).then(() => "SRTRDFVESGNJYTUKTYTHRG")
  options.user = {
    authenticated: true,
    token: token,
  }
  return fetchUtils.fetchJson(url, options)
}

/**
 * Array-safety DataProvider
 */
export const safetyDataProvider = createDataProvider(apiUrl, httpClient)

/**
 * overwrite for fix security issue
 * @see https://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk
 */
safetyDataProvider.getList = (resource, params) => {
  const { page, perPage } = params.pagination
  const { field, order } = params.sort
  const query = {
    ...fetchUtils.flattenObject(params.filter),
    _end: page * perPage,
    _order: order,
    _sort: field,
    _start: (page - 1) * perPage,
  }
  const url = `${apiUrl}/${resource}?${stringify(query)}`

  return httpClient(url).then(({ headers, json }) => {
    if (!headers.has("x-total-count")) {
      throw new Error(
        "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
      )
    }

    return {
      // ********* MODIFY START *********
      data: json.data,
      total: parseInt(
        headers.get("x-total-count")?.split("/").pop() ?? "0",
        10
      ),
      // ********* MODIFY END *********
    }
  })
}

safetyDataProvider.getMany = (resource, params) => {
  const query = {
    id: params.ids,
  }
  const url = `${apiUrl}/${resource}?${stringify(query)}`
  // ********* MODIFY START *********
  return httpClient(url).then(({ json }) => ({ data: json.data }))
  // ********* MODIFY END *********
}

safetyDataProvider.getManyReference = (resource, params) => {
  const { page, perPage } = params.pagination
  const { field, order } = params.sort
  const query = {
    ...fetchUtils.flattenObject(params.filter),
    [params.target]: params.id,
    _end: page * perPage,
    _order: order,
    _sort: field,
    _start: (page - 1) * perPage,
  }
  const url = `${apiUrl}/${resource}?${stringify(query)}`

  return httpClient(url).then(({ headers, json }) => {
    if (!headers.has("x-total-count")) {
      throw new Error(
        "The X-Total-Count header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Total-Count in the Access-Control-Expose-Headers header?"
      )
    }
    return {
      // ********* MODIFY START *********
      data: json.data,
      total: parseInt(
        headers.get("x-total-count")?.split("/").pop() ?? "10",
        10
      ),
      // ********* MODIFY END *********
    }
  })
}
