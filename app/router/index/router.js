'use strict'
import { Text, View, Button, ScrollView } from '../../component/index'
import style from './css.css'
class Index extends React.Component {
  render () {
    return (
      <ScrollView className={ style.container } mustScroll={true}>
        <View tap={() => { console.log(1) }} >
          Hello world
        </View>
      </ScrollView>
    )
  }
}
export default Index
