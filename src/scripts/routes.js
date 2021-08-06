import home from '../views/home';
import campaign from '../views/campaign';
import pc from '../views/pc';

const PATHS = {
  home: {
    path: "/",
    template: home,
  },
  campaign: {
    path: "/campaign",
    template: campaign,
  },
  pc: {
    path: "/pc",
    template: pc,
  }
}

export default PATHS