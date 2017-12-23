import React from 'react';
import { TouchableHighlight, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput, Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native';

export default class App extends React.Component {
  render() {

    return (
	<View style={{flex: 1 }}>

	    { /* content header */ }
	    <View style={{paddingTop:30, paddingLeft:20, height:50, flexDirection:'row', justifyContent:'center'}}>
	    	<Image source={require('./images/searchBackButton.png')} 
	    		style={{paddingTop:20, paddingLeft:25, paddingBottom:10}}/>
	        <TextInput 	underlineColorAndroid={'transparent'}
	    			placeholder='Search Twitter'
				onChangeText={(searchText) => this.setState({searchText})}
	    			style={{width:200, flexGrow:1, height:30, fontSize:18, paddingTop:10}}/> 
	    	<Text style={{paddingLeft:20, paddingRight:50, fontWeight:'bold', fontSize:20 }}> </Text>
	    </View>

	    <View style={styles.toolbarHeader}> 
            </View>

    	     <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 4, }} />

	   { /* content middle section */ }
	  <ScrollView style={{flex:1, flexGrow:1, flexShrink:1 }}>
	  </ScrollView>

	    { /* content footer */ }
	    <View style={styles.toolbarFooter}> 
	           <Text style={{paddingLeft:20, paddingRight:175, fontSize:20}}> 
			   <Text style={{color:'blue', paddingRight:30}}> All </Text>
		    	   <Text style={{paddingRight:90}}> Mentions </Text>
	            </Text>
	            <Image source={require('./images/homeSettingsIcon.png')} style={{height:35, width:35,paddingRight:20}}/>
            </View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
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

