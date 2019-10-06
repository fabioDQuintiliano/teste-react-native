import React, { Component } from 'react';
import { View, Text, ActivityIndicator,StatusBar} from 'react-native';
import { colors, styles } from '../../styles';

export default class Loading extends Component {


    

    render() {

        return (

            <View style={[styles.flex,styles.bg_primary, styles.align_center_horizontal, styles.align_center]}>

                
                <StatusBar backgroundColor={colors.primary} />

                <ActivityIndicator
                    size="large" color={colors.white} 
                ></ActivityIndicator>
                    <Text style={[styles.color_white, styles.center]}>Carregando</Text>

                   
            </View>

        );
    }
}
