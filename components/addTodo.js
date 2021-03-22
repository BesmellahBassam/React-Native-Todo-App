import React ,{useState} from 'react';
import {Button, StyleSheet,TextInput,View} from 'react-native';

export default function AddTodo({submitHandler}) {

const [text, setText] = useState(' ');

const changeHandler = (val) => {
    setText(val);
 }     
                 
return (
        <View> 
            <TextInput
                style={styles.input}
                placeholder="Add Task ..."
                onChangeText={changeHandler}
                >  
            </TextInput>     
            <Button title='Submit Task' color="coral" onPress={() => submitHandler(text)}></Button>
        </View>
    ) 
}
 

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    }
});