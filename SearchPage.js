import React, {Component} from 'react';

import {Image, Switch, Platform} from 'react-native';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

import { Container, Header, Content, Item, Input, List, ListItem, View } from 'native-base';
import { Title, Footer, FooterTab, Label, Badge, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Card, CardItem, Thumbnail, CheckBox, DeckSwiper, Fab, Form } from 'native-base';
import { Radio, Separator, Picker, Spinner, Tabs, Tab, TabHeading } from 'native-base';
import { Drawer, ScrollableTab, H1, H2, H3 } from 'native-base';

import Expo from 'expo';

import HomePage from  './App';

/*
 * Task 1 - TweetsPage.js
 *
 *
 */

export default class SearchPage extends Component {


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
		<Container>
		  <Item>
	            <Icon name="md-arrow-back" style={{color:'blue'}}
			  onPress={() => goBack()} />
        	    <Input placeholder="Search Twitter" />
	          </Item>

		<ScrollView/>
		<Footer style={{backgroundColor:'white'}}>
		  <FooterTab style={{backgroundColor:'white'}}>
		  <Button>
		  <Text style={{fontSize:15}}> All </Text>
		  </Button>
		  <Button>
		  <Text style={{alignItems:'flex-start', fontSize:15}}> Mentions </Text>
		  </Button>
		  <Button full>
		  <Icon name='settings' style={{color:'blue'}}/> 
		  </Button>
	 	  </FooterTab>
		</Footer>
		</Container>
    );
}
}
