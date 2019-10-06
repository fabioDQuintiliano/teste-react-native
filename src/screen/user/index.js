import React, { Component } from 'react';
import { View, Text, Linking,ScrollView, TouchableWithoutFeedback } from 'react-native';

// import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { colors, styles } from '../../styles';
import { Content } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';

class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            pessoa:this.props.pessoa
        }
    }
    componentDidMount(){
           
    }
    getUser(){
        
        
    }
    openLink(url){
        if(url !='')
        Linking.openURL(url);
    }

    _renderTelefone(dados){
        if(!dados.phone || dados.phone == ''){return <View />}
        return(
        <TouchableWithoutFeedback onPress={()=>{
            this.openLink("tel:"+dados.phone);
        }}>
            <View style={[styles.item_list]}>
                <View style={[styles.icon_list]}>
                    <Icon name="phone" size={19} color={colors.dark} />
                </View>
                <View style={[styles.desc_list]}>
                    <Text  numberOfLines={1}>{dados.phone}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
       );
    }
    _renderEmail(dados){
        if(!dados.email || dados.email == ''){return <View />}
        return(
        <TouchableWithoutFeedback onPress={()=>{
            this.openLink("mailto:"+dados.email);
        }}>
            <View style={[styles.item_list]}>
                <View style={[styles.icon_list]}>
                    <Icon name="envelope" size={17} color={colors.dark} />
                </View>
                <View style={[styles.desc_list]}>
                    <Text numberOfLines={1}>{dados.email}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        );
    }
    _renderSite(dados){
        if(!dados.website || dados.website == ''){return <View />}

        return(
        <TouchableWithoutFeedback onPress={()=>{
            let link  = (dados.website.indexOf('http://') >= 0 || dados.website.indexOf('https://') >=0)?dados.website:'http://'+dados.website;
            this.openLink(link);
        }}>
            <View style={[styles.item_list]}>
                <View style={[styles.icon_list]}>
                    <Icon name="globe" size={17} color={colors.dark} />
                </View>
                <View style={[styles.desc_list]}>
                    <Text numberOfLines={1}>{dados.website}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        );
    }

    _renderEmpresa(dados){
        if(!dados.company || dados.company.name == ''){return <View />}

        return(
        <TouchableWithoutFeedback onPress={()=>{
            
        }}>
            <View style={[styles.item_list]}>
                <View style={[styles.icon_list]}>
                    <Icon name="building" size={17} color={colors.dark} />
                </View>
                <View style={[styles.desc_list,{flexDirection:'column', alignItems:'flex-start'}]}>
                    <Text>{dados.company.name}</Text>
                    <Text style={[styles.font_small,styles.color_grayDark]} >{dados.company.catchPhrase}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        );
    }
    _renderEndereco(dados){
        if(!dados.address){return <View />}
        let endereco = '';
        if(dados.address.street){
            endereco += dados.address.street+'. ';
        }
        if(dados.address.suite){
            endereco += dados.address.suite+'. ';
        }
        if(dados.address.city){
            endereco += dados.address.city+'. ';
        }
        if(dados.address.zipcode){
            endereco += dados.address.zipcode+'. ';
        }
        return(
        <TouchableWithoutFeedback onPress={()=>{
            if(dados.address.geo.lat != '' && dados.address.geo.lng != ''){
                this.openLink("geo:"+dados.address.geo.lat+","+dados.address.geo.lng);
            } 
        }}>
            <View style={[styles.item_list]}>
                <View style={[styles.icon_list]}>
                    <Icon name="map-marker" size={20} color={colors.dark} />
                </View>
                <View style={[styles.desc_list]}>
                    {endereco != '' &&
                        <Text>{endereco}</Text>
                    }
                
                </View>
            </View>
         </TouchableWithoutFeedback>
        );
    }


    render() {
        let dados = this.state.pessoa;
        return( 

            <Content noLogo={true} noElevation={true}>
                <ScrollView>
                    <View>
                        <View style={[styles.bg_primary, styles.pb_15, styles.align_center]}>
                            <View style={styles.box_user_icon}>
                                <Icon name="user" size={50} color={colors.white} />
                            </View>
                            <Text style={[styles.center,styles.font_bigger, styles.color_white,styles.bold]}>{dados.name}</Text>

                        </View>


                        <View>

                            {this._renderTelefone(dados)}
                            {this._renderEmail(dados)}
                            {this._renderSite(dados)}
                            {this._renderEndereco(dados)}
                            {this._renderEmpresa(dados)}

                        </View>

                    </View>
                </ScrollView>
            </Content>

        );
    }
}

const mapStateToProps = state => (
    {
        
    }
)

export default connect(mapStateToProps, { })(User);
