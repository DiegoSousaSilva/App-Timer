import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Picker} from 'react-native';

export default function App() {

  console.disableYellowBox=true;
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [alarmSound, setAlarmSound] = useState([
    {
      selected: true,
      sound: 'alarm 1',
      file: 'alarm 1.mp3',
    },

    {
      selected: false,
      sound: 'alarm 2', 
      file: 'alarm 2.mp3',     
    }
  ]);

  var numbers = [];
  for(var i = 1; i<=60; i++){
    numbers.push(i);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selecione o tempo: </Text>

      
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'#fff'}}>Min: </Text>
        <Picker
          style={{height:50, width:100, color:'#fff'}}
          selectedValue={minutes}
          onValueChange={(itemValue, itemIndex)=> setMinutes(itemValue)}
        >
          <Picker.Item label='0'  value='0' />
          {
            numbers.map(function(val){
              return  <Picker.Item label={val.toString()} value={val.toString()} />
            })
           
          }
        </Picker>
        <Text style={{color:'#fff'}}>Seg: </Text>
        <Picker
          selectedValue={seconds}
          onValueChange={(itemValue, itemIndex)=> setSeconds(itemValue)}        
          style={{height:50, width:100, color:'#fff'}}
        >
          {
            numbers.map(function(val){
              return  <Picker.Item label={val.toString()} value={val.toString()} />
            })
           
          }
        </Picker>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(80, 50, 160)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color: '#fff',
    fontSize:30,
  },
});
