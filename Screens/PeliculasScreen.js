import React, {useContext} from 'react'
import { StyleSheet, Text, View, Dimensions,TextInput } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PeliculasContext} from '../Context/PeliculasContext';

const PeliculasScreen = ({navigation}) => {
    const {compra,calcular,eliminarCompra,comprar} = useContext(PeliculasContext);
    
    const styles = StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: '#d3d4dc',
      alignItems: 'center',
      justifyContent: 'space-around',
     
    },
    container2: {
        flex: 0,
        backgroundColor: '#d3d4dc',
        
      },
    buttonStyle: {
        color: 'black',
        marginBottom: 15,
    },
    inputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    paragraph: {
        margin: 2,
        marginTop: 2,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});
    return (
        <View style={styles.container2}>
            <Header
                centerComponent={{ text: 'Carrito', style: { fontfamily:'Arial',color: '#fff' , fontSize:25}}}
                containerStyle={{borderBottomColor:'black',borderBottomWidth:5, backgroundColor:'#0c1b57'}}
            />
            <View style={styles.container}>
                    <Text>{compra.nombre}({compra.idioma})</Text>
                    <Text>Precio: ${compra.precio}.00</Text>
                    <Text>Hora: {compra.horario}</Text>
                <SafeAreaView>
                    <View style={styles.inputView}>
                    <Text>Cantidad: </Text>
                        <TextInput onChangeText={(e)=>{calcular(e,compra)}} maxLength={20}placeholder="Ingresar cantidad" keyboardType='numeric'/>
                    </View>
                </SafeAreaView>
                    <Text>Total: ${compra.total}.00</Text>
                <View>
                    
                    <Button style={styles.buttonStyle}buttonStyle={{backgroundColor:'red'}}title="Cancelar"
                    onPress={()=>(eliminarCompra(),navigation.goBack())}/>
                </View>
                <View>
                    <Button style={styles.buttonStyle}buttonStyle={{backgroundColor:'green'}}title="Comprar"
                    onPress={()=>{comprar(compra),navigation.goBack()}}/>  
                </View>
            </View>
        </View>
    )
}
export default PeliculasScreen

 