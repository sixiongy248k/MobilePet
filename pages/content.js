import * as React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { Button } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import { Table, Row, Rows } from 'react-native-table-component';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { styles } from '../styles';
import { app } from '../fbConfig';


let imgREF = app.storage().ref()
global.newstra = 'https://banner2.cleanpng.com/20180320/rve/kisspng-computer-icons-directory-computer-file-png-transparent-no-5ab134add61177.5306856715215627978768.jpg';
global.newimage = '';
export default class Contentscreen extends React.Component {

  constructor() {
    super();
    this.state = {newimageURL: newstra, activeSections: []}
    this.cleartableData = this.cleartableData.bind(this);

    //if (updateFlag == true) {
      this.getImage();
    //}
  }

  getImage() {
    imgREF.child('img/img1.jpg').getDownloadURL().then((url) => {

      newimage = url;
      this.setState({newimageURL: newimage})
      //alert(this.state.newimageURL)
    }).catch((error) => {
      //console.log(error);
    })
    
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
  
  //state = {
  //  activeSections: [],
  //};
  
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
        <Text style={[styles.header, styles.headerText]}>Recent Image Capture</Text>
        <Image key={Date.now()} source={{uri: this.state.newimageURL}} style={styles.currImage}/>
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