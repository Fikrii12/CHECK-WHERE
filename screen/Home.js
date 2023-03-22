import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const rumah = ({navigation}) => {
     return (
          <View style={{flex: 1}}>
               <View style={{flex: 0.5, backgroundColor: '#212121', borderBottomEndRadius: 50, borderBottomStartRadius: 50}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                         <Text style={{color: '#fafafa', fontWeight: 'bold' }}>CHEK</Text>
                         <Text style={{color: '#fafafa', fontWeight: 'bold'}}>WHERE</Text>
                    </View>
                    
               </View>
               <View style={{flex: 1, backgroundColor: '#fafafa'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                         <Image source={require('../assets/Logo.png')}
                         style={{width: 100, 
                              height: 100, 
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 40,
                              backgroundColor: '#ffff',
                              position: 'absolute'}}/>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Detail')}
                         style={{
                         flex: 1, 
                         justifyContent: 'center', 
                         alignItems: 'center'}}>
                         <Icon name="map-marker-alt" size={40} color="#212121" />
                         <Text style={{fontWeight: 'bold'}}>Chek Location</Text>
                    </TouchableOpacity>
                    
               </View>

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