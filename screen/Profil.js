import React, {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profil = ({navigation}) => {
     return (
          <View style={{flex: 1}}>
               <View style={{flex: 0.5, backgroundColor: '#212121', borderBottomEndRadius: 50, borderBottomStartRadius: 50}}></View>
               <View style={{flex: 1, backgroundColor: '#FFFF'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                         <Image source={require('../assets/Fikri.jpg')}
                         style={{width: 100, 
                              height: 100, 
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 100,
                              position: 'absolute'}}/>
                    </View>
                    <View style={{marginTop: 70}}>
                         <Text style={{textAlign: 'center', fontWight: 'bold', fontSize: 18}}>Nurul Fikri</Text>
                         <Text style={{textAlign: 'center'}}>120140053</Text>

                         <View style={{marginLeft: 70}}>
                              <View style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 10}}>
                                   <Icon name="graduation-cap" size={20} color="#212121" />
                                   <View style={{
                                        justifyContent: 'center',
                                        marginLeft: 5,
                                        flex: 1}}>
                                        <Text>Teknik Informatika</Text>
                                   </View>
                              </View>

                              <View style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 10}}>
                                   <Icon name="university" size={15} color="#212121" />
                                   <View style={{
                                        justifyContent: 'center',
                                        marginLeft: 15,
                                        flex: 1}}>
                                        <Text>Institut Teknologi Sumatra</Text>
                                   </View>
                              </View>
                         
                              <View
                              style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 10,
                              marginLeft: 2}}>
                                   <Icon name="mobile" size={21} color="#212121" />
                                   <View style={{
                                   justifyContent: 'center',
                                   marginLeft: 15,
                                   flex: 1}}>
                                        <Text>+6289603305317</Text>
                                   </View>
                              </View>
                         </View>
                         
                         <View style={{flexDirection: 'row', marginTop: 60}}>
                              <TouchableOpacity style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'}}>
                                   <Icon name="facebook" size={20} color="#212121" />
                              </TouchableOpacity>

                              <TouchableOpacity style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'}}>
                                   <Icon name="github" size={20} color="#212121" />
                              </TouchableOpacity>

                              <TouchableOpacity style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'}}>
                                   <Icon name="instagram" size={20} color="#212121" />
                              </TouchableOpacity>

                              <TouchableOpacity style={{
                              flex: 1, 
                              justifyContent: 'center', 
                              alignItems: 'center'}}>
                                   <Icon name="linkedin" size={20} color="#212121" />
                              </TouchableOpacity>
                         </View>
                    </View>
               </View>
               <View style={{flex: 0.3, backgroundColor: '#212121', borderTopEndRadius: 50, borderTopStartRadius: 50}}>

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

                         <TouchableOpacity 
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
export default Profil;