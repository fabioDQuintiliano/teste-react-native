import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        flex:1,
        flexDirection:'row',
        backgroundColor:colors.white,
        padding:10,
        margin:5,
        borderRadius:3
    },
    concluido:{
        borderLeftColor:colors.success,
        borderLeftWidth:5
    },
    title:{
        textTransform: 'capitalize'
    },  
    info:{
        flexDirection:'column',
        flex:1
    },  
    resposavel:{
        backgroundColor:colors.primary,
        paddingHorizontal:10,
        paddingVertical:2,
        marginTop:5,
        borderRadius:15,
        alignSelf: 'flex-start',
        flexDirection:'row'
    },
    name:{
        color:colors.white,
        fontSize:fonts.small,
        marginHorizontal:5
    },
    check:{
        alignItems:'center',
        flexDirection:'row',
    }
   
});

export default styles;
