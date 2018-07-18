'use strict'
import View from '../../container/view'
import style from '../../css.css'
import ClipboardJS from 'clipboard'
class Text extends React.Component {
  _handleCopy = this._handleCopy.bind(this)
  ref = React.createRef()
  clipboard = null
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    copy: PropTypes.func
  }
  static defaultProps = {
    children: null,
    className: ''
  }
  constructor (props) {
    super(props)
    if (!this.props.copy) { this._handleCopy = null }
  }
  componentDidMount () {
    if (this._handleCopy) { this._handleCopy() }
  }
  _handleCopy () {
    const { children } = this.props
    console.log(this.ref.current)
    this.clipboard = new ClipboardJS(this.ref.current, {
      text: children
    })

    this.clipboard.on('success', function (e) {
      console.log('成功')
      e.clearSelection()
    })

    this.clipboard.on('error', function (e) {
      console.log('错误')
    })
  }
  componentWillUnmount () {
    this.clipboard.destroy()
  }
  render () {
    const { children, className } = this.props
    return (
      <div
        data-clipboard-text ={'HAHAH'}
        ref = { this.ref }
        className={`${className} ${style.text}`}>
        { children }
      </div>
    )
  }
}

export default Text
