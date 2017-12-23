import React from 'react';
import { TouchableHighlight, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native';
import { DrawerLayoutAndroid } from 'react-native';

export default class App extends React.Component {
  render() {

	var navigationView = (
	    <View style={{flex: 1, paddingLeft:15, paddingTop:20, flexDirection:'column', backgroundColor: '#fff'}}>
	    	<Image source={require('./images/drawerProfileFotoIcon.png')} 
			style={{paddingLeft:25, paddingRight:25}}/>

		<View style={{flexDirection:'row', paddingTop:5}}> 
		   <View>
	             <Text style={{fontWeight:'bold', fontSize:18, alignItems:'flex-start'}}> M P Manohar 
		     </Text>
		   </View>
	           <View style={{flex:2, justifyContent:'flex-end', alignItems:'flex-end', paddingRight:20}}>
	              <Image style={{justifyContent:'flex-end', alignItems:'flex-end'}} 
		             source={require('./images/homeDropdownArrowIcon.png')}/>
		   </View>
	    	</View>

		<View style={{flexDirection:'row', paddingTop:5}}> 
		<Text> @mp_manohar </Text>
	    	</View>

		<View style={{flexDirection:'row', paddingTop:10}}> 
		<Text> 
		      <Text style={{fontWeight:'bold'}}> 1000 </Text>
		      <Text> Following </Text>
		      <Text style={{fontWeight:'bold'}}> 1500 </Text>
		      <Text> Followers </Text>
		</Text>
	    	</View>

		{/* profile */ }
	        <View style={{flex:2, justifyContent:'flex-start', alignItems:'flex-start', 
			      paddingTop:20, paddingBottom:25, paddingRight:15}}>
		  <View style={{paddingTop:5, paddingBottom:10}}>
	          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, paddingLeft:20}}> 
	          <Image style={{alignItems:'center', justifyContent:'flex-start'}} 
		         source={require('./images/drawerProfileIcon.png')}/> Profile
		  </Text>
		  </View>
		  <View style={{paddingTop:5, paddingBottom:10}}>
	          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, paddingLeft:20}}> 
	          <Image style={{alignItems:'center', justifyContent:'flex-start'}} 
		         source={require('./images/drawerListsIcon.png')}/> Lists
		  </Text>
		  </View>
		  <View style={{paddingTop:5, paddingBottom:10}}>
	          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, paddingLeft:20}}> 
	          <Image style={{alignItems:'center', justifyContent:'flex-start'}} 
		         source={require('./images/drawerMomentsIcon.png')}/> Moments
		  </Text>
		  </View>
		  <View style={{paddingTop:5, paddingBottom:10}}>
	          <Text style={{fontWeight:'bold', textAlign:'center', fontSize:16, paddingLeft:20}}> 
	          <Image style={{alignItems:'center', justifyContent:'flex-start'}} 
		         source={require('./images/drawerHighlightsIcon.png')}/> Highlights
		  </Text>
		  </View>
		  <View style={{paddingTop:30, paddingBottom:10}}>
	             <Text style={{fontWeight:'bold', textAlign:'center', fontSize:18, paddingLeft:20}}> 
		         Settings and privacy 
		     </Text>
		  </View>
		  <View style={{paddingTop:20, paddingBottom:10}}>
	             <Text style={{fontWeight:'bold', textAlign:'center', fontSize:18, paddingLeft:20}}> 
		         Help Centre 
		     </Text>
		  </View>
		</View>

		{ /*  footer with qr code and night mode*/ }
	        <View style={styles.drawerToolbarFooter}>
		    <View style={{justifyContent:'flex-start', alignItems:'flex-start'}}>
	            <Image source={require('./images/drawerNightModeIcon.png')} />
		    </View>
		    <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
	            <Image source={require('./images/drawerQRCodeIcon.png')} />
		    </View>
                </View>
	    </View>
			  );

	/*
	  return (
		  <View style={{flex:1, paddingLeft:30, paddingTop:20}}>
		  {navigationView}
		  </View>
	  );
	*/

	  return (
	    <DrawerLayoutAndroid
		      drawerWidth={300}
		      drawerPosition={DrawerLayoutAndroid.positions.Left}
		      renderNavigationView={() => navigationView}>
		    <View style={{flex: 1, alignItems: 'center'}}>
		        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
		  		Hello World! Swipe from right to see drawer content
		        </Text>
		    </View>
	    </DrawerLayoutAndroid>
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
    drawerToolbarFooter:{
        justifyContent:'space-between',
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
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

