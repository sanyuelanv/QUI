'use strict'
import View from '../../container/view'
import style from '../../css.css'
import supportWebp from '../../config/supportWebp'
import loadImage from '../../config/loadImage'
const SIZE = [
  '100% auto',
  'auto 100% ',
  'contain',
  'cover'
]
const POSTION = [
  'center center',
  'center left',
  'center right',
  'top center',
  'top left',
  'top right',
  'bottom center',
  'bottom left',
  'bottom right'
]
class Img extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    webp: PropTypes.string,
    size: PropTypes.number,
    postion: PropTypes.object,
    className: PropTypes.string
  }
  static defaultProps = {
    src: '',
    webp: '',
    size: 0,
    postion: 0,
    className: ''
  }
  state = {
    isLoading: true,
    src: ''
  }
  _renderLoading () {
    if (this.state.isLoading) {
      return (
        <div className={style.imageLoadBox}>
          <div className={style.imageLoad}></div>
          <div className={style.imageLoad}></div>
          <div className={style.imageLoad}></div>
        </div>
      )
    }
  }
  componentDidMount () {
    this.loadSrcImage()
  }
  componentDidUpdate () {
    if (this.state.src === '') { this.loadSrcImage() }
  }
  static getDerivedStateFromProps (props, state) {
    if (props.src === state.src || props.webp === state.src) {
      return null
    }
    else {
      return {
        isLoading: true,
        src: ''
      }
    }
  }
  async loadSrcImage () {
    const isSupportWebp = await supportWebp()
    const { src, webp } = this.props
    let res
    if (webp && isSupportWebp) {
      res = await loadImage(webp)
    }
    else {
      res = await loadImage(src)
    }

    if (res) {
      this.setState({ isLoading: false, src: res })
    }
  }
  render () {
    const { className, size, postion } = this.props
    const { src } = this.state
    return (
      <View
        {...this.props}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: POSTION[postion],
          backgroundSize: SIZE[size]
        }}
        className={`${className} ${style.image}`}
      >
        {this._renderLoading()}
      </View>
    )
  }
}

export default Img
