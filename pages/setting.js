import * as React from "react";
import { Platform, View, Text, LayoutAnimation, UIManager, TouchableOpacity} from "react-native";
import SettingsList from 'react-native-settings-list';

import { styles } from '../styles';
import resetDataJSON from '../inputdata.json';
import { db } from "../fbConfig";

export default class Settingscreen extends React.Component {

  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);

    this.state = {switchValue: false, expanded: false};

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }


  changeVerticalLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }


  onSwitch = () => {
    SECTIONS = [
        {
          "id": 0,
          "title": "EMPTY",
          "tableHead": [""],
          "tableData": [
            ["", "", "", "", "", ""],
          ],
        },
      ];
    this.setState({
      SECTIONS: ''
    })
    //alert(SECTIONS);
  }
  
  resetDataBase = () => {
    //resetState = require('../inputdata.json')
    db.ref().set(resetDataJSON);
  }

  render () {
    return (

      //make a function to clear database
      //either clear all subchilds of tabledata
      //or clear all and remake skeleton structure somewhere
      //inputdata.json is a simple barren json

      <View style={styles.settingContainer}>
        <View style={styles.rowContainer}>
        
       
        <SettingsList>
          <SettingsList.Header headerText='App Config' headerStyle={[styles.header, styles.headerText]}/>
            <SettingsList.Item
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onSwitch}
              hasSwitch={true}
              itemBoxStyle={{backgroundColor: 'white', padding: 4, borderWidth: 0}}
              title='DELETE ALL ACTIVITIES'/>
            
            <SettingsList.Item
              hasNavArrow={false}
              switchState={this.state.switchValue}
              switchOnValueChange={this.resetDataBase}
              hasSwitch={true}
              itemBoxStyle={{backgroundColor: 'white', padding: 4, borderWidth: 0}}
              title='CLEAR DATABASE'/>
            <SettingsList.Header headerText='About Section' headerStyle={[styles.header, styles.headerText]}/>

            <View style={styles.container}>
              <View style={styles.btnTextHolder}>
                <TouchableOpacity activeOpacity={0.8} onPress={this.changeVerticalLayout} style={{padding: 10, backgroundColor: 'black', }}>
                  <Text style={styles.btnText}>Credits and Disclaimer</Text>
                </TouchableOpacity>
                <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                  <TouchableOpacity activeOpacity={0.8} onPress={this.changeVerticalLayout} style={styles.Btn}>
                    <Text style={styles.btnText}>Disclaimer</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>

                    Usage of the App is at your own risk. The app is provied on an "AS IS" BASIS. It's not industry standard application
                    any means. Users of the App is using its data freely of their choice. We do not take responsibility for anything done
                    on this app the users do with this application even for its intended purposes. It is not intended for any commerical usages.
                    This app is mainly made for the purpose of Group 11's CREOL based Senior Design Project. 
                  </Text>
                  <TouchableOpacity activeOpacity={0.8} onPress={this.changeVerticalLayout} style={styles.Btn}>
                    <Text style={styles.btnText}>About Us</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>
                    App made for the purpose of Group 11 CREOL Fall 2020 Senior Design Project. 
                    {"\n\n"}The Group members are:{"\n\n"}Brandon Gordon{"\n"}Katherine Gerosa{"\n"}Sixiong Yang{"\n"}Shravan Yandra
                  </Text>
                </View>
                
              </View>
            </View>

          </SettingsList>

        </View>
      </View>
    );
  }

  onValueChange(value){
    this.setState({switchValue: value});
  }
}

//export default setting;