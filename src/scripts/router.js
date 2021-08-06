import home from "../views/home";

export default class Router {
  /**
   * Metodo inicial.
   *
   * @return {void}.
   */
  constructor(paths) {
    this.paths = paths;
    this.initRouter();
  }

  /**
   * Permite inicializar el router
   *
   * @return {void}.
   */
  initRouter() {
    const {
      location: {
        pathname = "/"
      }
    } = window;
    const URI = pathname === "/" ? "home" : pathname.replace("/", "");
    this.load(URI);
  }

  /**
   * Permite iniciar la carga de paginas.
   *
   * @return {void}.
   */
  load(page = "home") {
    const route = page.split('/')
    const dest = (route.length === 1 && route[0] !== 'home')
      ? 'campaign'
      : (route.length === 2)
        ? 'pc'
        : 'home'
    const campaignId = route[0]
    const pcId = (route.length === 2)
      ? route[1]
      : null
    const { paths } = this;
    const { template } = paths[dest] || paths.error;
    const $CONTAINER = document.querySelector("#app");
    $CONTAINER.innerHTML = template(campaignId, pcId);
    window.history.pushState({}, "Genial", `/${page}`);
  }

}