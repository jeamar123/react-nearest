import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import * as Constants from '../config/constants';

import { Header } from '../components/Header';
import { FormInput } from '../components/FormInput';
import { Button } from '../components/Button';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View style={styles.authContainer}>
        <SafeAreaView style={{ backgroundColor: Constants.HEADER_BG_COLOR }}/>
        <StatusBar 
          // hidden={false} 
          barStyle="light-content"
          backgroundColor="#FFF"
        />
        <Header 
          title="Login"
        />
        <View style={styles.authContentContainer}>
          <FormInput
            placeholder="Username"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />
          <FormInput
            placeholder="Password"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />

          <Button
            buttonContainerStyle={styles.buttonContainerStyle}
          >
            Save
          </Button>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  authContainer:  {
    flex: 1,
  },
  authContentContainer:  {
    backgroundColor: '#fafafa',
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5
  },
  formInputContainer:  {
    // padding: 10,
    backgroundColor: '#FFF',
    height: 50,
    marginBottom: 2,
  },
  inputStyle: {
    // textAlign: 'right',
  },
  buttonContainerStyle: {
    marginTop: 50,
  }
});



export default Home;
