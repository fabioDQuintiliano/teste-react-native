import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';


export const Button = (props) => {
    let {text, styleText, disabled } = props

 

    return( 
        
        <TouchableWithoutFeedback 
            onPress={props.onPress} 
            >
            <View style={[styles.botao,(disabled?styles.disabled:{})]}>
                <Text style={[styles.textBtn,styleText]}>{text}</Text> 
            </View>
        </TouchableWithoutFeedback> 
    
    )
}
