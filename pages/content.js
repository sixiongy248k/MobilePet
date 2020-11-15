import * as React from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import { Divider, Button } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import { Table, Row, Rows } from 'react-native-table-component';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles';

export default class Contentscreen extends React.Component {

  constructor() {
    super();

    this.cleartableData = this.cleartableData.bind(this);
  }
  //clear current tableData individually
  cleartableData(index) {

    SECTIONS = SECTIONS.filter(function( element ){
      return element != undefined;
    });

    //alert('1 '+SECTIONS.length)
    if (SECTIONS.length == 1) {
      //alert('debug')
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
    return;
  }

  //alert('2 '+SECTIONS.length)
  //alert(SECTIONS.length);
  delete SECTIONS[index];
  };
  
  state = {
    activeSections: [],
  };

  //MAKE A RENDER IMAGE TO SHOW LATESTDOGFACE DETECTED WHILE MAKING TABS SMALLER MAYBE images are updated all called img1.jpg



  
 //implement onPress on this particular tab somehow
  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <View style={styles.Left}>

          <Text style={styles.headerText}>{section.title}</Text>
        </View>
        <View style={styles.Right}>
        
          <Button icon={<Ionicon name="trash-bin-outline" size={22} color="white"/>}
                buttonStyle={ styles.btnClear }
                raised type="outline" onPress={() => this.cleartableData(section.index)}/>
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>


        <Table borderStyle={{borderWidth: 1, borderColor: 'transparent'}}>
          <Row data={section.tableHead} style={{backgroundColor: '#3FECAD', justifyContent: 'center'}}/>
          <Rows data={section.tableData} style={{backgroundColor: '#EBECD0'}}/>
        </Table>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };
  
  //import the image somehow and save it remotely?
  //reduce pixel and resize and create function to imageDisplay(curr_imageURL)
  //[imageDisplay(ex), 'a', 'b', 'c', 'd'],


  render() {
    return (

      <ScrollView style={styles.scrollView}>
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
      </ScrollView>
    );
  }
}

//export default content;