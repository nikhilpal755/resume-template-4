
import React from 'react'
import TextInput from './TextInput'
import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import ActionMenu from './ActionMenu'

const Languages= ()  =>{
    const ctx = useContext(BuilderContext)
    const [languages, setLanguages] = useState(ctx.getComponentData('Languages'));

    const newItem = {
        text: 'English',
        level: 'Native',
    }
    const handleChange = (i, e) => {
        const targetName = e.target.name
        const modifiedItem = {
          ...languages.items[i],
          [targetName]: e.target.value,
        }
        // console.log(modifiedItem)
        languages.items.splice(i, 1, modifiedItem)
        // console.log(skills)
      }
      const handleAddClick = () => {
        setLanguages({
          ...languages,
          items: [...languages.items, newItem],
        })
      }
      const handleRemoveClick = () => {
        setLanguages({
          ...languages,
          items: languages.items.filter(
            (item, index) => index < languages.items.length - 1
          ),
        })
      }
      const handleSaveClick = () => ctx.updateInfo(languages)
  return (
    <div className='pt-10'>
   
    {languages.items.map((item, index) => (
      <div key={index} className='flex flex-row py-1'>
        <TextInput
          defaultValue={item.text}
          name='text'
          placeholder='Add Language'
          index={index}
          handleChange={(e) => handleChange(index, e)}
        />
        {/* <TextInput
          defaultValue={item.level}
          name='level'
          type='number'
          placeholder='%'
          style='w-1/3'
          index={index}
          handleChange={(e) => handleChange(index, e)}
        /> */}
      </div>
    ))}

    <ActionMenu
      handleSaveClick={handleSaveClick}
      handleAddClick={handleAddClick}
      handleRemoveClick={handleRemoveClick}
    />
  </div>
    
  )
}

export default Languages