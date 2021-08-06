import Router from './router'
import PATHS from './routes'

const ROUTER = new Router(PATHS);

document.querySelectorAll('.js-link').forEach(link => {
  link.addEventListener('click', () => {
    ROUTER.load(link.dataset.to)
  })
})