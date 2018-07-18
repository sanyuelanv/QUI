'use strict'
import { Text, View, Button, ScrollView, Img } from '../../component/index'
import style from './css.css'
class Index extends React.Component {
  state = {
    image: {
      src: 'https://im5.ezgif.com/tmp/ezgif-5-8eb446af35.jpg',
      webp: 'https://im5.ezgif.com/tmp/ezgif-5-5b539feade.webp'
    }
  }
  componentDidMount () {
    setTimeout(() => {
      const image = {
        src: 'https://im5.ezgif.com/tmp/ezgif-5-c1196f7e82.jpg',
        webp: 'https://im5.ezgif.com/tmp/ezgif-5-c50dd27c86.webp'
      }
      this.setState({ image })
    }, 3000)
  }
  render () {
    return (
      <ScrollView className={ style.container } mustScroll={true}>
        <Text copy={(text) => { console.log(text) }} className={style.textBox} copy={(value) => { window.Qapp.showToast({ content: `复制${value}成功` }) }}>122131</Text>
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
