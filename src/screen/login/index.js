import React, { Component } from 'react';
import { View, Text, Animated, StatusBar, TextInput, ImageBackground, Easing,Keyboard, ActivityIndicator } from 'react-native';



import { connect } from 'react-redux';


import { colors, styles } from '../../styles';
import { Button } from '../../components';
import {alert} from '../../util/alert';

import {login_app} from "../../actions/UserActions";



class Login extends Component {

    constructor(props){
        super(props)
        this.state ={
            nome:'',
            mensagem:'',
            disabled:true
        }
        this.animatedValue = new Animated.Value(0)
    }


    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow = () => {
        this.diminuiLogo();
    }
    
    _keyboardDidHide = () => {
        this.aumentaLogo();
    }
    
    checaTexto(nome){
      
        /*
        - No requisito: "Caso o usuário digite alguma letra maiuscula no formulário não deve habilitar o botão de entrar."
        - Seria melhor converter todo texto para letras minusculas, por uma questão de experiência de usuário. Essa é uma mensagem desnecessária, mas estou fazendo já que o teste esta pedindo.
        */
        let mensagem = '';
        let disabled = true;
        if (nome.toLowerCase() != nome){
            mensagem = 'Por fovor, não insira palavras com caracteres maiusculos.';
    
        }else{
            if(nome != ''){
                disabled = false;
            }

        }
        this.setState({nome:nome,mensagem:mensagem, disabled:disabled})
    }
    
    loga(){
        if(this.state.nome ==''){
            alert.show("Por favor, informe seu nome de usuário.","Usuário não pode ser vazio.");
        }else if (this.state.disabled){
            alert.show("Por favor, não insira caracteres maiusculos em seu nome de usuário.","Caracteres maiúsculos");
        }else{
            let obj = {
                nome:this.state.nome
            }
            /*
                Poderia fazer uma vaidação se o username inserido existe na listagem de users enviada, e com isso, listar apenas as tarefas do usuário logado.
                Mas isso implicaria em alguns problemas para a equipe de avaliação testar o app, pois seria necessário usar um login válido.
            */ 

            this.props.login_app(obj);
            
            
        }
    }

    anima(value){
        Animated.timing(this.animatedValue, {
            toValue: value,
            duration: 300,
            easing: Easing.ease
        }).start()
    }
    diminuiLogo(){
        this.anima(1);
    }
    aumentaLogo(){
        this.anima(0);
    }

    renderForm(){
        if(this.props.loading){
            return (
                <View style={styles.padding}>
                    <ActivityIndicator size={'large'} color={colors.primary}></ActivityIndicator>
                </View>
            );
        }
        return (

            <View>
                <View style={[styles.padding_horizontal]}>
                    <TextInput
                        ref={ref => (this.input = ref)} 
                        placeholder={'Informe seu Usuário'}
                        placeholderTextColor={colors.gray}
                        autoCapitalize={'none'}
                        value={this.state.nome}
                        style={[styles.input_login]}
                        onChangeText={(nome)=>{
                            this.checaTexto(nome);
                        }}
                    />

                </View>
                <View style={[styles.padding_horizontal,{minHeight:20}]}>

                        <Text style={styles.color_danger}>{this.state.mensagem}</Text>

                </View>
                <View style={[styles.padding_horizontal]}>
                    <Button 
                        onPress={()=>{
                            this.loga();
                        }}
                        disabled={this.state.disabled}
                        text={'Logar'}
                    />
                </View>
            </View>

        )
    }

    
    render() {

        return (
            <ImageBackground source={ require('../../assets/images/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={styles.flex}>
               
                    
                    <View style={styles.flex}>

                        <StatusBar backgroundColor={'transparent'} translucent barStyle="light-content"/>

                        {/* image login header */}


                        <View style={[styles.align_center,styles.mt_50]}>
                            <Text style={[styles.font_bigger,styles.color_white,styles.bold]}> Lista de Tarefas </Text>
                        </View>

                        <View style={[styles.align_center,styles.mt_30]}>
                            <Animated.Image 
                                source={ require('../../assets/images/logo_login.png')} 
                                style={{
                                    width: 120, 
                                    height: 120,
                                
                                    transform: [
                                       
                                        {
                                            scaleX: this.animatedValue.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 0.5]
                                            })
                                        },
                                        {
                                            scaleY: this.animatedValue.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 0.5]
                                            })
                                        }
                                    ]
                                
                                }} 
                                

                            />  
                        </View>

                    </View>

                    {this.renderForm()}

   
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        loading: state.UserReducer.loading
    }
)

export default connect(mapStateToProps, { login_app })(Login);