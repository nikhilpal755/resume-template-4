import { EmploymentHistoryItem } from './EmploymentHistoryItem'
import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

const EmploymentHistory = ({ items }) => {
  return (
    <View style={{ paddingTop: '20px' ,marginRight: '20'}}>
      <Text
        style={{
          color: '#000',
          fontSize: '15',
        }}
      >
        Experience
      </Text>
      <Divider />
      {items.map((item, index) => (
        <EmploymentHistoryItem
          key={index}
          text={item.position}
          date={item.date}
          company={item.company}
          description={item.description}
          responsibilities={item.responsibilities}
        />
      ))}
    </View>
  )
}

export default EmploymentHistory
