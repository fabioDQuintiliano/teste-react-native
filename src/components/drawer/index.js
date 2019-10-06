import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { colors } from '../../styles';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {alert} from '../../util/alert';

import {logout_app} from "../../actions/UserActions";



class MenuContainer extends Component {
    constructor(props){
        super(props);
    }
    _sair() {
        alert.confirm("Deseja sair?",()=>{

            this.props.logout_app()
            
        },"Sair");
       
    }

    render() {

        return (

            <View style={styles.content}>


                {/* user name  */}
                
                <View style={styles.nameUser}>

                    <Text style={styles.nameUserText}>{this.props.nome}</Text>

                    <Text style={styles.nameUserSubText}>Bem Vindo!</Text>

                    <View style={styles.lineUserName} />

                </View>

                {/* btns menu */}

                <View style={styles.contentMenu}>

                    <ScrollView>

                        <TouchableOpacity onPress={() => Actions.home()} style={styles.btnMenu}>

                            <Icon name="list" size={15} color={colors.dark} />
                            

                            <Text style={styles.btnMenuText}>Tarefas</Text>

                        </TouchableOpacity>

                     

                        <TouchableOpacity onPress={() => this._sair()}>

                            <View style={styles.btnMenu}>

                                <Icon name="power-off" size={15} color={colors.dark} />


                                <Text style={styles.btnMenuText}>Sair</Text>

                            </View>

                        </TouchableOpacity>

                    </ScrollView>

                </View>

            
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.UserReducer.nome
      
    }
)

export default connect(mapStateToProps, { logout_app })(MenuContainer);