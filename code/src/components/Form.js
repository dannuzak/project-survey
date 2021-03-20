import React, { useState } from 'react'
import Summary from 'components/Summary'
import CountryInputRadioButton from 'components/CountryInputRadioButton'
import NameInputText from 'components/NameInputText'
import CompanionDropDown from 'components/CompanionDropDown'
import ActivityInputRadioButton from './ActivityInputRadioButton'

const Form = () => {

//STATES
 
const [name, setName] = useState('')
const [country, setCountry] = useState('')
const [companion, setCompanion] = useState('')
const [activity, setActivity] = useState('')
const [summary, setSummary]= useState(false) 


//ARRAYS

const countries = ['France', 'Thailand', 'Iceland', 'Australia', 'Peru']
const activities = [' make a gastronomy tour', ' explore the cultural scene', ' hangout with the locals',' party till sunrise']
   

  //FUNCTIONS 

  const handleSubmit = event => {
    event.preventDefault();
    setSummary(true) 
  }
    
  const onNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const onCountryChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  } 
  
  const onCompanionChange = (e) => {
    console.log(e.target.value);
    setCompanion(e.target.value);
  }
  const onActivityChange = (e) => {
    console.log(e.target.value);
    setActivity(e.target.value);
  }

  // FORM & QUESTIONS

  return (
    <>
      
      {!summary && ( 

        <form onSubmit={handleSubmit}>
          
          <> 
            <NameInputText
             question={'What is your name?'}
             nameValue={name} 
             onNameChangeFunction={onNameChange}
             
            />
          </> 
        
          <>
            <p>2. Which country you want to travel to and spend 10 wonderful days?</p>
            {countries.map((country) => 
              <CountryInputRadioButton
                key={country} 
                countryValue={country}
                onCountryChangeFunction={onCountryChange}
              />
            )}
          </>

          <>
            <CompanionDropDown
            question={'Who would you like to take with you on this trip?'}
            dropDownvalue = {companion}
            onCompanionChangeFunction = {onCompanionChange}
            />
          </>
                
          <>
            <p>4. What's the main activity you are looking forward to?</p>
            {activities.map((activity) =>
              <ActivityInputRadioButton
                key={activity} 
                activityValue={activity}
                onActivityChangeFunction = {onActivityChange} 
              />
            )}
            <button 
              onSubmit= {handleSubmit}
              type="submit"
            >Submit</button>
          </>
        </form> 

      )} 
      
      {( 
        <>
          {summary && 
          <Summary
            nameValue={name}
            countryValue={country}
            companionValue={companion}
            activityValue={activity}
          />
          }
        </>
      )}
    </> 

  )
}

export default Form 
