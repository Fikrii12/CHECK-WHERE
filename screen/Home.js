import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const rumah = ({navigation}) => {
     return (
          <View style={{flex: 1}}>
               <View style={{flex: 0.5, backgroundColor: '#212121'}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                         <Text style={{color: '#fafafa' }}>CEK</Text>
                         <Text style={{color: '#fafafa'}}>DIMANA</Text>
                    </View>
               </View>
               <View style={{flex: 1, backgroundColor: '#fafafa'}}></View>

               <View style={{flex: 0.3, backgroundColor: '#212121', borderTopEndRadius: 50, borderTopStartRadius: 50}}>

                    <View style={{marginTop: 30, flexDirection: 'row'}}>
                         <TouchableOpacity style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'
                         }}>
                              <Icon name="chevron-left" size={20} color="#fafafa" />
                         </TouchableOpacity>
                         <TouchableOpacity style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'
                         }}>
                              <Icon name="home" size={20} color="#fafafa" />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => navigation.navigate('Profil')}
                         style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'
                         }}>
                              <Icon name="user" size={20} color="#fafafa" />
                         </TouchableOpacity>
                    </View>
               </View>
          </View>
     );
}

export default rumah;