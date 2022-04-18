import { Text, View, Image } from '@react-pdf/renderer'
import styles from '../../../../styles'


export const ProfileContainer = ({ name, profession}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '20',
        marginBottom: '-65px',
        height: '130',
        fontFamily: 'Helvetica-Bold',
        paddingLeft: '4%'
      }}
    >

      <View style={{justifyContent: 'flex-start'}}>
        <Text style={styles.name_text}>{name}</Text>
      </View>
      <Text style={styles.profession_text}>{profession}</Text>
     
    </View>
  )
}
