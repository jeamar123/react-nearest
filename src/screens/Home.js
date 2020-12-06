import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar,
  SafeAreaView,
  Image
} from 'react-native';

import * as Constants from '../config/constants';

import { Header } from '../components/Header';
import { HomeSearch } from '../components/HomeSearch';
import { Categories } from '../components/Categories';
import { Shops } from '../components/Shops';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <SafeAreaView style={{ backgroundColor: Constants.HEADER_BG_COLOR }}/>
        <StatusBar 
          // hidden={false} 
          barStyle="light-content"
          backgroundColor="#FFF"
        />
        <Header 
          toggleDrawer={() => this.props.navigation.toggleDrawer()} 
          leftIcon="bars"
          rightIcon="user-circle"
        />
        <View style={styles.homeContentContainer}>
          <HomeSearch/>
          <Categories/>
          <Shops/>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  homeContainer:  {
    flex: 1,
  },
  homeContentContainer:  {
    backgroundColor: '#fafafa',
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5
  },
  
});



export default Home;
