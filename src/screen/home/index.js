import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';

import { connect } from 'react-redux';
import {get_lista_tarefas} from "../../actions/TarefasActions";
import { colors, styles } from '../../styles';
import { Content } from '../../components';
import Tarefa from '../../components/tarefa';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {

    constructor(props){
        super(props);
    
    }
    componentDidMount(){
        this.getListaTarefas();    
    }
    getListaTarefas(){
        
        this.props.get_lista_tarefas();
    }

    renderItem({item,index}){
        return (
            <Tarefa
                index={index}
                dados={item}
                onPress={(obj)=>{

                }}
                onPressUser={(obj)=>{
                    Actions.user({pessoa:obj.user})
                }}
            />
            
        );
    }
    _renderEmpty = () => {
        if(!this.props.loading){
            return (
                <View style={[styles.align_center,styles.align_center_horizontal,styles.mt_30]}>

                    <Icon name="frown-o" size={80} color={colors.dark} />

                    <Text>Nenhum item encontrado</Text>

                </View>

            )
        }


        return <View />
    }
    render() {
        return( 

            <Content menu={true}>
 
                

                <FlatList
                    
                    data={this.props.lista}
                    refreshing={this.props.loading}
                    onRefresh={()=>{this.getListaTarefas()}}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id+''}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={this._renderEmpty}
                   
                />
     
                

            </Content>

        );
    }
}

const mapStateToProps = state => (
    {
        lista: state.TarefasReducer.lista,
        loading: state.TarefasReducer.loading
    }
)

export default connect(mapStateToProps, { get_lista_tarefas })(Home);
