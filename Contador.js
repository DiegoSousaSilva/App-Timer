import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Audio} from 'expo-av';

const Contador = (props) =>{

  var done = false;



  useEffect(() => {
    const timer = setInterval(()=>{
      props.setSeconds(props.seconds-1);
      if(props.seconds <=0){
        if(props.minutes > 0){
          props.setMinutes(min-1);
          props.setSeconds(59);
        }else{
          if(!done){
            done = true;
            props.setEstado('selecionar');
            props.setMinutes(0);
            props.setSeconds(1);
            playSound();
          }
        }
      }
    },1000)

    return ()=> clearInterval(timer);
  });


  async function playSound(){
    const soundObject = new Audio.Sound();
    try{
      var alarm;
      props.alarms.map((val)=>{
        if(val.selected){
          alarm = val.file;
        }
      })
      await soundObject.loadAsync(alarm);
      await soundObject.playAsync();

      //await soundObject.unloadAsync();  
    }
    catch (error){

    }
  };


  function voltar(){
    props.setEstado('selecionar');
    props.setMinutes(0);
    props.setSeconds(1);
  };

  function numberFormat(number){
    var finalNumber = "";
    if(number < 10){
      finalNumber = "0"+number;
    }else{
      finalNumber=number;
    }
    return finalNumber;
  }

  var sec = numberFormat(props.seconds);
  var min = numberFormat(props.minutes);


  return(
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

        <View style={{flexDirection:'row'}}>
          <Text style={styles.textContador}>{min} : </Text>
          <Text style={styles.textContador}>{sec}</Text>
        </View>

        <TouchableOpacity 
          onPress={()=>{voltar()}}
          style={styles.btnVoltar}>
          <Text style={styles.textBtnVoltar}>Voltar</Text>
        </TouchableOpacity>

     <StatusBar style='auto' /> 
  </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContador:{
    color:'#fff',
    fontSize: 40,
  },

  btnVoltar:{
    width:100,
    backgroundColor: 'rgb(116,8,200)',
    height:100,
    borderRadius: 50,
    marginTop:30,  
    borderColor: '#fff',
    borderWidth:2,
  },
  
  textBtnVoltar:{
    textAlign:"center",
    paddingTop:30,
    color:'#fff',
    fontSize:20
  },

});

export default Contador;