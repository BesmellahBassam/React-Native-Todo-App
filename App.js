import React, { useState } from "react";
import { FlatList, StyleSheet, View,Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addTodo";
  
export default function App() { 
  const [todos, setTodos] = useState([
    { text: "Study Scientific Writing", key: 1 },
    { text: "Write your proposal", key: 2 },
    { text: "Develop todo app", key: 3 },
  ]); 

  const pressHander = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  }; 
 
  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });  
    } 
    else { 
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }  
  }; 
  

  return (
 
  // <TouchableWithoutFeedback  onPress = {() => {Keyboard.dismiss();}}>
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        {/* To Do Form */}
          <AddTodo submitHandler={submitHandler}></AddTodo>
        <View> 
          {/* The list */} 
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHander={pressHander}></TodoItem>
              )}
            ></FlatList>
          </View>
        </View>
      </View>
    </View> 
  // </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    padding: 20,
    margin: 20,
  },
  list: {
    marginTop: 20,
  },
});
