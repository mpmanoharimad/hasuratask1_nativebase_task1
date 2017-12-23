import React from 'react';
import { TouchableHighlight, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native';

export default class App extends React.Component {
  render() {

    return (
	<View style={{flex: 1}}>

	    { /* content header */ }
	    <View style={{paddingTop:30, paddingLeft:20, flexDirection:'row'}}>
	    	<Image source={require('./images/homeProfileFotoIcon.png')} style={{paddingLeft:25}}/>
	    	<Text style={{paddingLeft:20, paddingRight:50, fontWeight:'bold', fontSize:20 }}>
	    		<Text></Text> Home
	        </Text>
	    </View>

	    <View style={styles.toolbarHeader}> 
	         <Image style={styles.homeHeaderImage} source={require('./images/homeHomeIcon.png')} /> 
	         <Image style={styles.homeHeaderImage} source={require('./images/homeSearchIcon.png')} />
	         <Image style={styles.homeHeaderImage} source={require('./images/homeNotificationIcon.png')} />
	         <Image style={styles.homeHeaderImage} source={require('./images/homeMessagesIcon.png')} />
             </View>

    	     <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 4, }} />

	    { /* content body */ }
	  <ScrollView style={{flex:1, flexGrow:1, paddingTop:10, paddingBottom:20 }}>
	        { /* content 1 - start */ }
	        <View style={{flex:1, flexDirection:'row' }}>
	        	<View style={{paddingRight:20}}>
	    		<Image style={{paddingRight:10}} source={require('./images/homeText1Icon.png')}/>
	        	</View> 
	        	<View style={{flex:1, flexDirection:'column'}}>
		    	   <View>
				<Text style={{fontWeight:'bold'}}> 
	                            PMO India 
	    			    <Image source={require('./images/homeBlueTick.png')}/>
	                            @pmoinindia... - 30m 
                                    <Image source={require('./images/homeDropdownArrowIcon.png')}/>
	    			</Text>
		    	   </View>
		           <View>
		    		<Text style={{fontSize:14}}> 
	    			Congratulations on your excellent effort to learn cumbersome react native
	    			</Text>
	    		    </View>
		            <View style={{paddingTop:5}}>
	    			<Image style={{height:75, width:280}} source={require('./images/homeScroll1Pic.png')}/>
	    		    </View>
		            <View style={{paddingTop:10, flexDirection:'row'}}>
	    			<View style={{paddingRight:40}}>
	    			<Text>
	    			<Image style={{height:40, width:40}} source={require('./images/homeCommentsIcon.png')}/>
	    			60
	    			</Text>
	    			</View>
	    			<View style={{paddingRight:40}}>
	    			<Text>
	    			<Image style={{height:40, width:40}} source={require('./images/homeRetweetsIcon.png')}/>
	    			6
	    			</Text>
	    			</View>
	    			<View style={{paddingRight:40}}>
	    			<Text>
	    			<Image style={{height:40, width:40}} source={require('./images/homeLikesIcon.png')}/>
	    			10
	    			</Text>
	    			</View>
	    			<View style={{paddingRight:40}}>
	    			<Text>
	    			<Image style={{height:40, width:40}} source={require('./images/homeMessagesIcon.png')}/>
	    			</Text>
	    			</View>
	    		    </View>
	    		</View>
	        </View>
	        { /* content 1 - end */ }

		<View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 2, }} />

	        { /* content 2 - start */ }
	        <View style={{flex:1, flexDirection:'row', paddingTop:10 }}>
	        	<View style={{paddingRight:20}}>
	    		<Image style={{paddingRight:10}} source={require('./images/homeText2Icon.png')}/>
	        	</View>
	        	<View style={{flex:1, flexDirection:'column'}}>
		    	   <View>
				<Text style={{fontWeight:'bold'}}> Office Kalam @presidentIndia... -60m 
	    			<Image source={require('./images/homeDropdownArrowIcon.png')}/>
	    			</Text>
		    	   </View>
		           <View>
		    		<Text style={{fontSize:14}}> 
	    			God bless on your excellent effort to learn very cumbersome react native
	    			</Text>
	    		    </View>
		            <View style={{paddingTop:5}}>
	    			<Image style={{height:75, width:280}} source={require('./images/homeScroll2Pic.png')}/>
	    		    </View>
	    		</View>
	    	  </View>
	        { /* content 2 - end */ }
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

