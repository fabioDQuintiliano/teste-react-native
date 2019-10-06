import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({

    // header style

    header: {
        
        height: metrics.headerHeight, // height full header
        paddingTop: metrics.headerPadding, // this if u need on IOS
        paddingHorizontal: metrics.padding, // padding horizontal buttons header
        backgroundColor: colors.primary, // background color header 
        alignItems: 'center',
        flexDirection: 'row', 
        
        elevation: 4,
   
    },

    // left flex header

    headerViewLeft: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    // center flex header 

    headerViewCenter: {

        flex: 6, // six because title head, if have another icon in right content this is not necessery
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 

    },

    // right flex header

    headerViewRight: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
 
    },

    // title text header

    headerText: {

        color: colors.white,
        fontWeight: 'bold',
        fontSize: fonts.default,
        flexDirection: 'row',

    },
    
    // logo header 

    logo: {

        width: 100, 
        height: 48, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'transparent',
        flexDirection:'row',

    },

    // btns header

    btnHead: {

        width: 42,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'transparent',

    },

});

export default styles;
