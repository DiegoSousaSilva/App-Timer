import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , Picker, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Contador = (props) =>{
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
          <Text style={styles.textContador}>{props.minutes} : </Text>
          <Text style={styles.textContador}>{props.seconds}</Text>
        </View>

        <TouchableOpacity 
          onPress={()=>{
            props.setEstado('selecionar')
          }}
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