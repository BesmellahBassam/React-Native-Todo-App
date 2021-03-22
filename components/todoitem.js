import React, {useState} from 'react'; 

import {StyleSheet,Text,TouchableOpacity} from 'react-native';

export default function TodoItem(props) {
    return (  
           <TouchableOpacity onPress={() => {props.pressHander(props.item.key)}}>
               <Text style={styles.item}>
                  {props.item.text}
               </Text>  
           </TouchableOpacity>
    ) 
}  
  
  

const styles = StyleSheet.create({
    item: {
        padding: 16,
        margin: 16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    } 
});