import React from 'react';
import { StatusBar, View } from 'react-native';


import Header from '../header';
import { colors, styles } from '../../styles';

export const Content = (props) => (
    <View style={{flex: 1}}>
        <StatusBar backgroundColor={colors.primary} />
        {!props.noHeader && <Header {...props} />}
        
        <View style={styles.content} {...props} />
    </View>
);
