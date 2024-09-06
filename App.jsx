import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const App = () => {
  useEffect(()=>{
        fetch("http://10.0.2.2:3000/users").then((response)=>{
               response.json().then((result)=>{
                  console.log(result)
               })
        })
  },[])
  return (
    <View>
      <Text style={{fontSize:30}}>GET_API</Text>
    </View>
  )
}

export default App
