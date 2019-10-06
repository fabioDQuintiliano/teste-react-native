import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts, metrics } from '.';

const styles = StyleSheet.create({


    // ---> Styles full

    content: {
        backgroundColor: colors.backgroud,
        flex:1 
    },

    flex:{flex:1},
    row:{flexDirection:'row'},

    radius:{borderRadius:5},
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 1,
    },

    align_center:{ alignItems:'center'},
    align_center_horizontal:{justifyContent:'center'},

    center:{ textAlign:'center'},
    
    font_small:{fontSize:fonts.small},
    font_bigger:{fontSize:fonts.bigger},
    font_big:{fontSize:fonts.big},
    font_default:{fontSize:fonts.default},
    bold:{fontWeight:'bold'},

    mb_10:{marginBottom:10},
    mb_20:{marginBottom:20},
    mb_30:{marginBottom:30},

    mt_30:{marginTop:30},
    mt_40:{marginTop:40},
    mt_50:{marginTop:50},
    margin:{margin:5},


    padding:{padding:10},
    padding_horizontal:{paddingHorizontal:30},
    pb_15:{paddingBottom:15},

    color_primary:{color:colors.primary},
    color_positive:{color:colors.positive},
    color_success:{color:colors.success},
    color_danger:{color:colors.danger},
    color_dark:{color:colors.dark},
    color_white:{color:colors.white},
    color_gray:{color:colors.gray},
    color_grayDark:{color:colors.grayDark},


    bg_primary:{backgroundColor:colors.primary},
    bg_positive:{backgroundColor:colors.positive},
    bg_success:{backgroundColor:colors.success},
    bg_danger:{backgroundColor:colors.danger},
    bg_dark:{backgroundColor:colors.dark},
    bg_white:{backgroundColor:colors.white},


    // ---> Login Styles

    input_login:{
        backgroundColor:colors.white,
        borderRadius:25,
        paddingVertical:8,
        paddingHorizontal:10
    },

    // user
    icon_list:{
        alignItems:'center',
        width:50,
        flexDirection:'row'
    },
    item_list:{
        flexDirection:'row',
        marginHorizontal:15,
        paddingVertical:15,
        borderBottomWidth:1,
        borderBottomColor:colors.gray

    },
    desc_list:{
        alignItems:'center',
        flexDirection:'row',
        alignContent:"flex-start",
        flex:1,
       
    },
    box_user_icon:{
        width:70,
        height:70,
        alignItems:'center',
        flexDirection:'row',

        borderWidth:3,
        borderRadius:35,
        borderColor:colors.white,
        justifyContent:"center"
    }
});

export default styles;
