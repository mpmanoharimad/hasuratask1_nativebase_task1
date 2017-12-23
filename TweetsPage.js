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
 * Task 1 - TweetsPage.js
 *
 *
 */

export default class TweetsPage extends Component {


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
	      <Container>
	      <Content>
		   <Card> 
		   <CardItem> 
		   <Left> 
			<Thumbnail small source={require('./images/homeText1Icon.png')}/>
			<Body>
				<Text> 
				   <Text style={{fontWeight:'bold'}}>PMO India </Text>
	    			    <Image source={require('./images/homeBlueTick.png')}/>
	                            @pmoinindia... - 30m
                                    <Image source={require('./images/homeDropdownArrowIcon.png')}/>
				 </Text>
				 <Text>
				    Congratulations on your excellent effort to learn cumbersome react native
				 </Text>
		        <Image source={require('./images/homeScroll1Pic.png')} style={{height:75, width:null, flex:1}}/>
		<View style={{justifyContent:'flex-start', flex:1, flexDirection:'row'}}>
                <Button transparent >
		  <Icon name="home"> <Text> 60 </Text></Icon>
                </Button>
                <Button transparent >
                  <Icon name="home"> <Text>30</Text></Icon>
                </Button>
                <Button transparent >
                  <Icon name="heart"> <Text>10</Text></Icon>
		</Button>
                <Button transparent >
                  <Icon name="mail"> <Text>10</Text></Icon>
		</Button>
		</View>
		</Body>
              </Left>
            </CardItem>
	   </Card> 

		   <Card> 
		   <CardItem> 
		   <Left> 
			<Thumbnail small source={require('./images/homeText2Icon.png')}/>
			<Body>
				<Text> 
				   <Text style={{fontWeight:'bold'}}>APJ Kalam </Text>
	    			    <Image source={require('./images/homeBlueTick.png')}/>
	                            @officeKalam... -60m
                                    <Image source={require('./images/homeDropdownArrowIcon.png')}/>
				 </Text>
				 <Text>
				    All the best with your excellent efforts to learn cumbersome react native.
				 </Text>
		        <Image source={require('./images/homeScroll2Pic.png')} style={{height:75, width:null, flex:1}}/>
		<View style={{justifyContent:'flex-start', flex:1, flexDirection:'row'}}>
                <Button transparent >
		  <Icon name="home"> <Text> 10 </Text></Icon>
                </Button>
                <Button transparent >
                  <Icon name="home"> <Text>40</Text></Icon>
                </Button>
                <Button transparent >
                  <Icon name="heart"> <Text>20</Text></Icon>
		</Button>
                <Button transparent >
                  <Icon name="mail"> <Text>50</Text></Icon>
		</Button>
		</View>
		</Body>
              </Left>
            </CardItem>
	   </Card> 


	      </Content>
		<Footer style={{backgroundColor:'white'}}>
		  <FooterTab style={{backgroundColor:'white'}}>
		  <Button>
		  <Text style={{color:twitterBlue, fontSize:15}}> All </Text>
		  </Button>
		  <Button>
		  <Text style={{alignItems:'flex-start', fontSize:15}}> Mentions </Text>
		  </Button>
		  <Button full>
		  <Icon name='settings' style={{alignItems:'flex-end', color:twitterBlue}}/>
		  </Button>
	 	  </FooterTab>
		</Footer>

	      </Container>
    );
  }
}


