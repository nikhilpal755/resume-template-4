import React, { useContext } from 'react'
import { View, Text } from '@react-pdf/renderer'
import { ProfileContainer } from './top/ProfileContainer'
import { SVGItem } from './left/SVGItem'
import styles from '../../../styles'
import { SkillItem } from './left/SkillItem'
import { BuilderContext } from '../../../App'
import Divider from './right/Divider'


const Wrapper = ({ heading, ...props }) => {
  return (
    <View style={{ marginRight: '10', marginTop: '10', marginLeft: '5' }}>
      <Text
        style={{
         
          fontSize: '15',
         
        }}  
      >
        {heading}
      </Text>
      <Divider />
      {props.children}
    </View>
  )
}
const EducationText = ({ text, date }) => (
  <View style={{ paddingBottom: '10' }} key={text}>
    <Text style={{ fontSize: '12' }}>{text}</Text>
    <Text style={{  fontSize: '9', paddingTop: '3' }}>
      {date}
    </Text>
  </View>
)

export const Left = () => {
  const ctx = useContext(BuilderContext)
  const skills = ctx.getComponentData('Skills')
  const contact = ctx.getComponentData('Contact')
  const keySkills = ctx.getComponentData('KeySkills')
  const languages = ctx.getComponentData('Languages')

  return (
    <View style={styles.section__left}>
     
      <View>
        
        {skills.display && (
          <Wrapper heading={skills.header}>
            {skills.items.map((item, index) => (
              <SkillItem key={index} name={item.text} fillSkill={item.level} />
            ))}
          </Wrapper>
        )}
      
        
          <Wrapper heading={contact.header}>
            {contact.items.map((item, index) => (
              <>
               <Text
                key={index}
                style={{ fontSize: '12', marginBottom: '8px', fontWeight: '900' , color: 'black'}}
                  >
                    {item.name}
                </Text>
                <Text
                  key={index}
                  style={{ fontSize: '12', marginBottom: '8px' }}
                >
                  {item.text}
                </Text>
              </>
            ))}
          </Wrapper>

          
         <Wrapper heading={keySkills.header}>
           {keySkills.items.map((item, index) =>{
              return (
                <Text
                  key={index}
                  style={{ fontSize: '11', marginBottom: '5' }}
                >
                  {item}
                </Text>
              )

           })}
            {/* <Text style={{ fontSize: '11', marginTop: '4' , marginBottom: '5'}}>{keySkills.text}</Text> */}
         </Wrapper>
          
          <Wrapper heading={languages.header}>
            {languages.items.map((item, index) => (
            <View>
              <Text key={index}
              style={{fontSize: '11', marginBottom: '5'}}>
                {item.text}- {item.level}
              </Text>
            </View>

            ))}
          </Wrapper>
     
           
        {/* <Socials /> */}
      </View>
    </View>
  )
}
