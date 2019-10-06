import { Alert } from 'react-native';
class AlertCuston{

    constructor() {
      
    }


    show(text,title,func){
        Alert.alert(
            title || "Alerta",
            text,
            [
              {text: 'OK', onPress: () => { if (func) func(); }},
            ],
            { cancelable: false }
        )
    }
    confirm(text, func = null, title = "Confirmar", func_cancel = null) {
        Alert.alert(
          title,
          text,
          [
            { text: 'Cancelar', onPress: () => { if (func_cancel) func_cancel(); } },
            { text: 'Confirma', onPress: () => { if (func) func(); } },
          ],
          { cancelable: false }
        )
    }

    
}
var alert = new AlertCuston();
export var alert;
