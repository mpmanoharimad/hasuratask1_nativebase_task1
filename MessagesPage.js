import React, {Component} from 'react';

import {Image, Switch, Platform} from 'react-native';

import { Container, Header, Content, Item, Input, List, ListItem, View } from 'native-base';
import { Title, Footer, FooterTab, Label, Badge, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Card, CardItem, Thumbnail, CheckBox, DeckSwiper, Fab, Form } from 'native-base';
import { Radio, Separator, Picker, Spinner, Tabs, Tab, TabHeading } from 'native-base';
import { Drawer, ScrollableTab, H1, H2, H3 } from 'native-base';

import Expo from 'expo';

/*
 * Task 1 - TweetsPage.js
 *
 *
 */

export default class MessagesPage extends Component {


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
	      <Content>
		    <Text> Messages Page </Text>
	      </Content>
	      </Container>
    );
  }
}


