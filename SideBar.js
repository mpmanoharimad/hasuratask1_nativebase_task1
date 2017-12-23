import React, {Component} from 'react';

import {Image, Switch, Platform} from 'react-native';

import { Container, Header, Content, Item, Input, List, ListItem, View } from 'native-base';
import { Title, Footer, FooterTab, Label, Badge, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Card, CardItem, Thumbnail, CheckBox, DeckSwiper, Fab, Form } from 'native-base';
import { Radio, Separator, Picker, Spinner, Tabs, Tab, TabHeading } from 'native-base';
import { Drawer, ScrollableTab, H1, H2, H3 } from 'native-base';
import { StyleProvider } from 'native-base';

import Expo from 'expo';

/*
 * Task 1 - SideBar.js
 *
 *
 */

export default class SideBar extends Component {


	constructor() {
	   super();
	    this.state={
			  isReady: false,
      			  selected1: "key1"
			};
	              }
	  onValueChange(value: string) {
  		  this.setState({
		  selected1: value
				});
				       }

	async componentWillMount() {
		   await Expo.Font.loadAsync({
		      'Roboto': require('native-base/Fonts/Roboto.ttf'),
		      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                	            });

			this.setState({isReady:true});
		                   }

	closeDrawer () {
	      this._drawer._root.close()
			    };
	openDrawer () {
	      this._drawer._root.open()
			   };
 	render(){
	
	 const twitterBlue='#1DA1F2';

            if (!this.state.isReady) {
	       return <Expo.AppLoading />;
                 }  

	return (
	      <Container style={{backgroundColor:'white'}}>
		   <Content> 
		     <Card> 
		       <CardItem header style={{paddingBottom:0}}> 
		         <Left>
		            <Thumbnail source={require('./images/homeProfileFotoIcon.png')}/>
		         </Left>
		       </CardItem> 
		       <CardItem style={{paddingBottom:0, paddingTop:0}}> 
		         <Left> 
		            <H1 style={{paddingTop:0, fontWeight:'bold'}}> Manohar M P </H1>
		         <Right>
		            <Icon name="ios-arrow-down" style={{color:twitterBlue}}/>
		         </Right>
			 </Left>
		         </CardItem> 
		         <CardItem style={{paddingTop:0, margin:0}}> 
		         <Text note> @mpmanohar </Text>
		         </CardItem> 
		         <CardItem> 
		         <View> 
		            <Text note> 
				<Text style={{fontWeight:'bold'}}> 590 </Text>
				<Text> Following </Text>
				<Text style={{fontWeight:'bold'}}> 678 </Text>
				<Text> Followers </Text>
		     	    </Text>
		         </View> 
            	       </CardItem>
            	       <CardItem>
			   <Icon active name="ios-person-outline" />
			   <Text header>Profile</Text>
            	       </CardItem>
            	       <CardItem>
			   <Icon active name="ios-list-box-outline" />
			   <Text header>Lists</Text>
            	       </CardItem>
            	       <CardItem>
			   <Icon active name="ios-flash-outline" />
			   <Text header>Moments</Text>
            	       </CardItem>
            	       <CardItem>
			   <Icon active name="ios-albums-outline" />
			   <Text header>Highlights</Text>
            	       </CardItem>
	             </Card> 
            	     <Card>
            	       <CardItem>
			   <Text header>Settings and privacy</Text>
            	       </CardItem>
            	       <CardItem style={{borderColor:'transparent'}}>
			   <Text header>Help Centre</Text>
            	       </CardItem>
	             </Card> 
	           </Content>
		<Footer style={{backgroundColor:'white'}}>
		  <FooterTab style={{backgroundColor:'white'}}>
		  <Left>
		  <Button transparent>
			<Icon name="ios-moon-outline" style={{color:twitterBlue}}/>
		  </Button>
		  </Left>
		  <Right>
		  <Button transparent>
			<Icon name="ios-qr-scanner" style={{color:twitterBlue}}/>
		  </Button>
		  </Right>
	 	  </FooterTab>
		</Footer>

	      </Container>
    );
  }
}


