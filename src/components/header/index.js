import React, { Component, } from 'react';
import { View, Text, Image, StatusBar, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Header extends Component {

  

 

  _menuLeft() { 

    // menu icon

    if (this.props.hasOwnProperty("menu") && this.props.menu) {

      return (
      
        <TouchableWithoutFeedback onPressOut={() => Actions.drawerOpen()}>

          <View style={styles.btnHead}>

            <Icon name="bars" size={25} color={colors.white} />

          </View>
  
        </TouchableWithoutFeedback>
         
      );

    }

    // arrow left

    return (
    
      <TouchableWithoutFeedback onPressOut={() => Actions.pop()}>

        <View style={styles.btnHead}>

          <Icon name="chevron-left" size={25} color={colors.white} />

        </View>

      </TouchableWithoutFeedback>
    
    );

  }

  _menuCenter() {

    // text

    if (this.props.hasOwnProperty("noLogo") && this.props.noLogo) {
      return <View />
    }
    if (this.props.hasOwnProperty("title") && this.props.title) {

      return <Text style={styles.headerText}>{this.props.title}</Text>;

    }

    // logo

    return (
    
      <View style={styles.logo}>  

         <Image source={ require('../../assets/images/logo_login.png')} style={{width: 40, height: 40,}} />  
 
      </View>    
          
    );    

  }


  render() {

    return(

      <View style={[styles.header,(this.props.noElevation?{elevation:0}:{})]}>

        <StatusBar backgroundColor={colors.primary} barStyle="light-content"/>


        <View style={[styles.headerViewLeft]}>

          {this._menuLeft()}

        </View>

        <View style={[styles.headerViewCenter]}>

          {this._menuCenter()}
  
        </View>
  
        <View style={[styles.headerViewRight]}>  
  
     

        </View>

      </View>

    );

  }

}

