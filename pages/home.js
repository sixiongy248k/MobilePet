
import * as React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Button } from 'react-native-elements';
import Ionicon from 'react-native-vector-icons/Ionicons';


import { styles } from '../styles';
import { app, db } from '../fbConfig';


var randHomeImgs = [
  require('../images/dog1.jpg'),
  require('../images/dog2.jpg'),
  require('../images/dog3.jpg'),
  require('../images/dog4.jpg'),
  require('../images/dog5.jpg'),
  require('../images/dog6.jpg'),
  require('../images/dog7.jpg'),
  require('../images/dog8.jpg'),
  require('../images/dog9.jpg'),
  require('../images/dog10.jpg'),
  require('../images/dog11.jpg'),
  require('../images/dog12.jpg'),
];

//set default no activity box
global.SECTIONS = [
  {
    "id": 0,
    "title": "EMPTY",
    "tableHead": [""],
    "tableData": [
      ["", "", "", "", "", ""],
    ],
  },
];

global.newData = [];

export default class HomeScreen extends React.Component  {
  
  //create a function to load database JSON entire data\
  //and load/download/overwrite the current img1.jpg
  loadData = () => {

    db.ref().once('value', snapshot => {

      //let newdata = snapshot.val();
      newData = snapshot.val();
      //Just in case random indexing occurs
      //alert(JSON.stringify(SECTIONS));
    });

  }


  //create read from .txt/.csv file
  //Don't really need this function but time is limited
  readJSON = () => {

    SECTIONS = Object.values(newData);
    //alert(JSON.stringify(SECTIONS));
  }


    render() {
      

      return (
        <View style={ styles.supercontainer }>
          <ImageBackground source={randHomeImgs[Math.floor(Math.random()*randHomeImgs.length)]} style={styles.image}>
          <View style={ styles.subcontainer }>
              <Text style={ styles.homeTitle }>Pet App</Text>
            
              <Button icon={<Ionicon name="md-sync-outline" size={25} color="white"/>}
                buttonStyle={ styles.button }
                titleStyle={ styles.title }
                raised title=" Sync with Firebase" type="outline" onPress={this.loadData}/>

              <Button icon={<Ionicon name="download-sharp" size={25} color="white"/>} 
                buttonStyle={ styles.button }
                titleStyle={ styles.title }
                raised title=" Import Activity Data" type="outline" onPress={this.readJSON}/>

          </View>
          </ImageBackground>
        </View>
      );
    }
  }


//export default home;