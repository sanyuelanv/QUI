'use strict'
import { Text, View, Button, ScrollView, Img, utils } from '../../component/index'
import style from './css.css'
class Index extends React.Component {
  state = {
    image: {
      src: 'https://static.haodan123.com/static/test.jpg',
      webp: 'https://static.haodan123.com/static/test.webp'
    },
    text: 123121
  }
  componentDidMount () {
    setTimeout(() => {
      const text = 'dsadsa'
      this.setState({ text })
    }, 3000)
  }
  render () {
    return (
      <ScrollView className={ style.container } mustScroll={true}>
        <Button tap={() => {
          window.Qapp.copy.setCopy({
            text: '复制',
            success: (text) => {
              console.log(`复制${text}成功`)
            },
            error: (text) => {
              console.log(`复制${text}失败`)
            }
          })
        }}>复制</Button>
        <Button tap={() => {
          window.Qapp.copy.setCopy({
            text: '复制2',
            success: (text) => {
              console.log(`复制${text}成功`)
            },
            error: (text) => {
              console.log(`复制${text}失败`)
            }
          })
        }}>复制2</Button>
        <Text
          copy = {true}
          className={style.textBox}
          success={(value) => { window.Qapp.showToast({ content: `复制${value}成功` }) }}
        >{ this.state.text }</Text>
        <Img
          className={style.image}
          webp ={this.state.image.webp}
          src ={this.state.image.src}
        />
        <Img
          className={style.image}
          webp ={this.state.image.webp}
          src ={this.state.image.src}
        />
      </ScrollView>
    )
  }
}
export default Index
