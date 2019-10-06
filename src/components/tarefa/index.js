import React, { Component, } from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';
import { colors } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tarefa extends Component {

 
  render() {
    let dados = this.props.dados;
    return(
      <TouchableWithoutFeedback onPress={()=>{
        if(this.props.onPress){
          this.props.onPress(dados);
        }
      }}>
        <View style={[styles.container,(dados.completed?styles.concluido:{})]}>

          <View style={styles.info}>
            <Text style={styles.title}>{dados.title}</Text>
            <TouchableWithoutFeedback onPress={()=>{
              if(this.props.onPressUser){
                this.props.onPressUser(dados);
              }
            }}>
              <View style={styles.resposavel}>
                <Icon name="user" size={15} color={colors.white} />
                <Text style={styles.name} numberOfLines={1}>{dados.user.name} </Text>
              </View>
            </TouchableWithoutFeedback>
            
          </View>
          {dados.completed &&
            <View style={styles.check}>
              <Icon name="check" size={25} color={colors.success} />
            </View>
          }
        </View>
      </TouchableWithoutFeedback>

    );

  }

}

