import React,{useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {addition,subtraction} from '../store/actions/Number'
const Number = (props) => {

    const data = useSelector(state=>state.count.counter);
    const dispatch = useDispatch();
   /* const [counter,setCounter] = useState(0);

    const additionHandler = () => {
        setCounter(counter+1)
    }
    const subtractionHandler = () => {
        setCounter(counter-1)
    }*/

    return(
        <View style={styles.container}>
            <Button title="Add" onPress={()=>dispatch(addition())}/>
            <Text>{data}</Text>
            <Button title="Subtract" onPress={()=>dispatch(subtraction())}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Number;