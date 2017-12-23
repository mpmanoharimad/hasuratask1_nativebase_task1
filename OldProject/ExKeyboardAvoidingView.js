import React from 'react';
import { TouchableHighlight, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native';
import { KeyboardAvoidingView} from 'react-native';

export default class App extends React.Component {
  render() {

    return (
	<View style={styles.container}>
	  <KeyboardAvoidingView behavior='padding' style={{flex:1}}>
	    <Text> Enter text </Text>
            <TextInput style={{width:100}} placeholder="Enter Text Input" />
	    <Text> text 01 </Text>
	    <Text> text 02 </Text>
	    <Text> text 03 </Text>
	    <Text> text 04 </Text>
	    <Text> text 05 </Text>
	    <Text> text 06 </Text>
	    <Text> text 07 </Text>
	    <Text> text 08 </Text>
	    <Text> text 09 </Text>
	    <Text> text 10 </Text>
	    <Text> text 11 </Text>
	    <Text> text 12 </Text>
	    <Text> text 13 </Text>
	    <Text> text 14 </Text>
	    <Text> text 15 </Text>
	    <Text> text 20 </Text>
          </KeyboardAvoidingView>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:30, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    },
    homeHeaderImage:{ 
	paddingRight:35, 
	paddingLeft:35, 
	paddingTop:25, 
	paddingBottom:25 },
    toolbarHeader:{
        alignItems:'center',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
    },
    toolbarFooter:{
        justifyContent:'flex-start',
        paddingTop:10,
        height: 50,
        flexDirection:'row'
    },
    toolbarTitle:{
        color:'gray',
        textAlign:'center',
        fontWeight:'bold',
	flex:1 
    },
    toolbarButton:{ width: 100, textAlign:'center' },
    tableHeader: { height: 40, backgroundColor: '#f1f8ff' },
    tableText: { marginLeft: 5 },
    tableRow: { height: 30 },
    button: {alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10, height:10 }
});

