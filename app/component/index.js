import App from './app'
import View from './container/view'
import Text from './base/text'
import ScrollView from './container/scrollView'
import ListView from './container/listView'
import LoadIcon from './base/icon/loadIcon'
import Button from './base/button'
import Img from './base/image'

import supportWebp from './config/supportWebp'
import device from './config/device'
import loadImage from './config/loadImage'

window.Qapp = {
  showLoad: null,
  hideLoad: null,
  showToast: null,
  showAlert: null,
  copy: null,
  device
}
const utils = {
  loadImage,
  supportWebp
}
export {
  App,
  View,
  Text,
  Button,
  LoadIcon,
  ScrollView,
  ListView,
  Img,
  utils
}
