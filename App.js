import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Picker, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Contador from './Contador';


export default function App() {

  console.disableYellowBox=true;
  const [estado, setEstado] = useState('selecionar')
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(0);

  const [alarmSound, setAlarmSound] = useState([
    {
      id: 1,
      selected: false,
      sound: 'alarm 1',
      file: 'alarm 1.mp3',
    },

    {
      id: 2,
      selected: false,
      sound: 'alarm 2', 
      file: 'alarm 2.mp3',     
    },

    {
      id: 3,
      selected: false,
      sound: 'alarm 3', 
      file: 'alarm 3.mp3',     
    }
  ]);

  var numbers = [];
  for(var i = 1; i<=60; i++){
    numbers.push(i);
  }

  function setAlarm(id){
    let alarmsTmp = alarmSound.map((val)=>{
    if(id!= val.id){
     val.selected = false;
    }
     else{
       val.selected = true;
       return val;
     }   
     return val;
    })
    setAlarmSound(alarmsTmp);
  }

  if(estado=='selecionar'){
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(123, 0, 217,1)', 'rgba(66, 2, 115,1)'
        ]}
        style={{
          position:'absolute',
          left:0,
          right:0,
          top:0,
          height:'100%',
        }}
      />
  
      <Text style={styles.text}>Selecione o tempo: </Text>

      
      <View style={{flexDirection:'row',}}>
        <Text style={{color:'#fff', paddingTop:15}}>Min: </Text>
        <Picker
          style={{height:50, width:100, color:'#fff',}}
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
        <Text style={{color:'#fff', paddingTop:15}}>Seg: </Text>
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

      <View style={{flexDirection:'row'}}>
        {
          alarmSound.map(function(val){
            if(val.selected){
            return (
              <TouchableOpacity 
                style={styles.btnAlarmSelected}
                onPress={()=>setAlarm(val.id)}  
              >
                <Text style={{color:'#fff', fontWeight:'bold'}}>{val.sound}</Text>
              </TouchableOpacity>
            );
          }else{
            return (
              <TouchableOpacity 
                style={styles.btnAlarm}
                onPress={()=>setAlarm(val.id)}   
              >
                <Text style={{color:'#fff', fontWeight:'bold'}}>{val.sound}</Text>
              </TouchableOpacity>
            );
          }
          })

        }
      </View>

        <TouchableOpacity 
          onPress={()=>{
            setEstado('iniciar')
          }}
          style={styles.btnIniciar}>
          <Text style={styles.textBtnIniciar}>Iniciar</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
  }else if(estado == 'iniciar'){
    return(
        <Contador
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          setEstado={setEstado}
          minutes={minutes}
          seconds={seconds}
        />
      )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  backgroundColor: 'rgb(80, 50, 160)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    color: '#fff',
    fontSize:30,
  },

  btnAlarm:{
    padding:8,
    backgroundColor: 'rgb(116,67,191)',
    marginRight:10
  },

  btnAlarmSelected:{
    padding:8,
    backgroundColor: 'rgba(116,67,191,0.3)',
    marginRight:10,
    borderColor:'#fff',
    borderWidth:1,
  },

btnIniciar:{
  width:100,
  backgroundColor: 'rgb(116,67,191)',
  height:100,
  borderRadius: 50,
  marginTop:30,  
  borderColor: '#fff',
  borderWidth:2,
},

textBtnIniciar:{
  textAlign:"center",
  paddingTop:30,
  color:'#fff',
  fontSize:20
}
});
