import React, {Component} from 'react';

import {Image, Switch, Platform} from 'react-native';

import { Container, Header, Content, Item, Input, List, ListItem, View } from 'native-base';
import { Title, Footer, FooterTab, Label, Badge, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Card, CardItem, Thumbnail, CheckBox, DeckSwiper, Fab, Form } from 'native-base';
import { Radio, Separator, Picker, Spinner, Tabs, Tab, TabHeading } from 'native-base';
import { Drawer, ScrollableTab, H1, H2, H3 } from 'native-base';

import TweetsPage from './TweetsPage';
import SearchPage from './SearchPage';
import NotificationsPage from './NotificationsPage';
import MessagesPage from './MessagesPage';

import Expo from 'expo';

/*
 * Task 1 implementation in NativeBase
 *
 *
 */

export default class HomePage extends Component {


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

            if (!this.state.isReady) {
	       return <Expo.AppLoading />;
                 }  

	    return (
		<Container style={{paddingTop:25, backgroundColor:'white'}}>
			<Header hasTabs style={{backgroundColor:'white'}}>
			   <Left> 
			        <Thumbnail source={require('./images/homeProfileFotoIcon.png')}/>
			   </Left> 
			   <Body><Text> 
			        Home 
		   	    </Text></Body>
			</Header>
			<Tabs initialPage={0} 
		    		tabBarBackgroundColor='white' 
		   	        tabStyle={{backgroundColor:'white'}}>
		    	  <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>} tabStyle={{backgroundColor:'white'}}>
		    	    <TweetsPage/>
		    	  </Tab>
		    	  <Tab heading={ <TabHeading><Icon name="search"/></TabHeading>} tabStyle={{backgroundColor:'white'}}>
		    	    <SearchPage/>
		    	  </Tab>
		    	  <Tab heading={ <TabHeading><Icon name="ios-notifications-outline" /></TabHeading>} 
		    		tabStyle={{backgroundColor:'white'}}>
		    	    <NotificationsPage/>
		    	  </Tab>
		    	  <Tab heading={ <TabHeading><Icon name="mail" /></TabHeading>} tabStyle={{backgroundColor:'white'}}>
		    	    <MessagesPage/>
		    	  </Tab>
		    	</Tabs>
		</Container>
    );
  }
}


