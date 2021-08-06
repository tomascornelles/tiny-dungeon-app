import { selector, render } from '../scripts/utils'
import firebase from 'firebase/app'
import { dbInit } from '../scripts/db'

const pc = (campaignId, pcId) => {
  const template = `
  <h1>PERSONAJE ${pcId} for ${campaignId}</h1>
  <p><strong>Name</strong>: <span class="js-name"></span></p>
  <p><strong>Físico</strong>: <span class="js-phisical"></span></p>
  <p><strong>Mental</strong>: <span class="js-mental"></span></p>
  <p><strong>Social</strong>: <span class="js-social"></span></p>
  `

  const ref = `/campaigns/${campaignId}/pcs/${pcId}/`

  render({
    'ref': `${ref}/name`,
    'element': '.js-name',
    'callback': selector,
    'prop': 'innerHTML',
    'data': false
  })

  let content

  const layout = () => {
    dbInit()
    firebase.database().ref(ref).once('value', function (snapshot) {
      const layout = snapshot.val().layout[0]
      content = ''
      console.log(print(layout))
    })
  }

  const print = (item) => {
    console.log('>>>', content, item)
    if (item.type === 'col') content += `<div class="col">`
    if (item.type === 'row') content += `<div class="row">`
    if (item.type === 'title') content += `<div class="title">
    <h2>${item.text}</h2>`
    if (item.type === 'input') content += `<div class="input">
    <label for="">
      <textarea name=""></textarea>
    <label>`
    if (typeof item.children !== 'undefined') content += item.children.forEach(item => print(item, content))
    content += `</div>`

    return content
  }

  layout()

  return template
}

export default pc