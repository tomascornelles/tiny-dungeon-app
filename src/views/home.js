import { selector, render } from '../scripts/utils'

const home = () => {

  const template = `
  <h1>HOMEEEE</h1>
  <p><input type="text" class="js-input"></p>
  <p class="js-roll"></p>
  `

  // getValue('/roll', '.js-roll', 'innerHTML')
  // getValue('/input', '.js-input', 'value')

  render({
    'ref': '/input',
    'element': '.js-input',
    'callback': selector,
    'prop': 'value',
    'data': false
  })

  return template
}

export default home