import { getValue, getList, setValue } from "./db"

export const selector = (params) => {
  const { selector, prop, value, data } = params

  document.querySelectorAll(selector).forEach(item => {
    if (data) item.dataset[prop] = value
    else item[prop] = value

    if (prop === 'value') listener({ 'selector': selector, 'event': 'change', 'callback': setValue })
  })
}

export const listener = (params) => {
  const { selector, event, callback } = params

  document.querySelectorAll(selector).forEach(item => {
    item.addEventListener(event, callback)
  })
}

export const render = (params) => getValue(params)

export const renderList = (params) => GeolocationPosition(params)
