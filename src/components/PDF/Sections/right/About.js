import { Text, View } from '@react-pdf/renderer'
import styles from '../../../../styles'
import Divider from './Divider'

const About = ({ text }) => (
  <View style={{marginRight: '20'}}>

    <Text style={styles.main__text}>{text}</Text>
  </View>
)
export default About
