import styles from '../../../styles'
import About from './right/About'
import EmploymentHistory from './right/EmploymentHistory'
import { View, Text } from '@react-pdf/renderer'
import { BuilderContext } from '../../../App'
import { useContext } from 'react'
import Divider from './right/Divider'


const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginTop: '15'}}>
      <Text
        style={{

          fontSize: '15',
  
        }}
      >
        {heading}
      </Text>
      <Divider/>
      {props.children}
    </View>
  )
}
const EducationText = ({ text, date }) => (
  <View  key={text} style={{display: 'flex'}}>
    <Text style={{  fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
    <Text style={{ fontSize: '12' ,marginLeft: '25%' ,marginTop: '-2.5%'}}>{text}</Text>
  </View>
)


export const Right = () => {
  const ctx = useContext(BuilderContext)
  const education = ctx.getComponentData('Education')
  const certifications = ctx.getComponentData('Certifications')
  return (
    <View style={styles.section__right}>
      <About text={ctx.getComponentData('Profile').about} />
      <EmploymentHistory items={ctx.getComponentData('Employment').items} />
      <Wrapper heading={education.header}>
          {education.items.map((item, index) => (
            <EducationText key={index} text={item.degree} date={item.date} />
          ))}
      </Wrapper>
      <Wrapper heading={certifications.header}>
            {certifications.items.map((item, index) => (
              <EducationText key={index} text={item.name} date={item.date} />
            ))}
      </Wrapper>
    </View>
  )
}
