import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({

    botao: {
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: colors.primary,
        paddingHorizontal:25
    },

    textBtn: {
        fontSize: fonts.default,
        color:colors.white,
        fontWeight: '800',  
    },
    disabled:{
        backgroundColor: colors.primaryLight,
        opacity:0.2

    }


});
