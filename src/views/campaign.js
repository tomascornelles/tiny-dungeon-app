import { getValue } from '../scripts/db'
const campaign = (id) => {
  const template = `
    <h1>CAMPAÑA ${id}</h1>
    <p class="js-name"></p>
    `

  getValue(`/campaigns/${id}/title`, '.js-name', 'innerHTML')


  return template
}

export default campaign