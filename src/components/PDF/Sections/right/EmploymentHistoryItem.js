import { Text, View } from '@react-pdf/renderer'
import styles from '../../../../styles'

export const EmploymentHistoryItem = ({
  text,
  date,
  company,
  description,
  responsibilities,
}) => (
  <View style={{ paddingBottom: '20px' , display: 'flex', width: '100%', justifyContent: 'space-evenly'}}>
    <View style={{ width: '20%'}}>
      <Text style={{ fontSize: '9', color: '#959ba6', paddingBottom: '5' }}>
        {date}
      </Text>
    </View>

    <View style={{ width: '80%', marginLeft: '23%', marginTop: '-4%'}}>
          <Text
            style={{
              color: '#000',
              fontSize: '13',
            }}
          >
            {text}
          </Text>
        <Text style={{fontSize: '11'}}>{company}</Text>
        <Text style={{ fontSize: '11' }}>{description}</Text>
        <Text style={{ fontSize: '11', marginLeft: '15px', marginTop: '4' }}>
          {responsibilities}
        </Text>
    </View>
  </View>
)
