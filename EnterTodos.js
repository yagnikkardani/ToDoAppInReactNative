import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import TodoList from './TodoList';

const EnterTodos = () => {
    // State to save entered text in TextInput
    const [text, setText] = useState('');
    // State to store an array of all todos entered using TextInput
    const [todoList, setTodoList] = useState([]);

    // On submitting the text of TextInput, this method will be called
    // Here, it generates a unique ID everytime, and store it together with todo in state Array.
    const handleSubmit = () => {
        const random = Math.random();
        setTodoList([...todoList, { id: random, todo: text, isCompleted: false }])
        // Initially isCompleted will be false.
    }

    // This method will be called when you touch any item of todo List.
    // Here, its isCompleted attribute will be set to true.
    const handleDelete = (item) => {
        const filteredList = todoList.map(i => {
            if (i.id !== item.id) {
                return i
            }
            else {
                return i.isCompleted ? { ...i, isCompleted: false } : { ...i, isCompleted: true }
            }
        })
        setTodoList(filteredList)
    }

    return (
        // View is one the core components of React Native. Read the article to learn more about it.
        <View style={{ padding: 10 }}>
            {/* TextInput is also a core component used to enter the text */}
            <TextInput
                style={{ height: 50, borderWidth: 1, width: 300, textAlign: 'center' }}
                placeholder="Enter Your Todo Here!!"
                onChangeText={newText => setText(newText)}
                onSubmitEditing={handleSubmit}
                defaultValue={''}
                clearTextOnFocus
            />
            {/* This is another component created by us to display the list. */}
            <TodoList todoList={todoList} handleDelete={handleDelete} />
        </View>
    );
}

export default EnterTodos;