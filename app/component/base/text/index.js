'use strict'
import View from '../../container/view'
import style from '../../css.css'
import ClipboardJS from 'clipboard'
class Text extends React.Component {
  _handleCopy = this._handleCopy.bind(this)
  ref = null
  clipboard = null
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    copy: PropTypes.bool,
    success: PropTypes.func,
    err: PropTypes.func
  }
  static defaultProps = {
    children: null,
    copy: false,
    className: ''
  }
  constructor (props) {
    super(props)
    if (!this.props.copy) { this._handleCopy = null }
  }
  _handleCopy () {
    const { children, success, err } = this.props
    window.Qapp.copy.setCopy({
      text: children,
      success: (text) => { success && success(text) },
      error: (text) => { err && err(text) }
    })
  }
  render () {
    const { children, className } = this.props
    return (
      <View
        tap={this._handleCopy}
        className={`${className} ${style.text}`}>
        { children }
      </View>
    )
  }
}

export default Text
