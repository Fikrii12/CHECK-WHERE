import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';

const Detail = (navigation) => {
     return (
          <View style={{flex: 1, }}>
               <View style={{flex: 1.2, backgroundColor: '#ffff'}}>
                    
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 50}}>
                         <MapView style={{width: '80%', height: '80%', }} />
                    </View>
               </View>
               <View style={{flex: 0.2, backgroundColor: '#212121', borderTopEndRadius: 50, borderTopStartRadius: 50}}>

                    <View style={{marginTop: 30, flexDirection: 'row'}}>
                         <TouchableOpacity onPress={ () => navigation.goBack()}
                              style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'
                         }}>
                              <Icon name="chevron-left" size={20} color="#fafafa" />
                         </TouchableOpacity>

                         <TouchableOpacity onPress={() => navigation.navigate('Home')}
                         style={{
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

export default Detail;

