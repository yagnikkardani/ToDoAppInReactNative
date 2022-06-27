import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import TodoList from './TodoList';

const EnterTodos = () => {
    const [text, setText] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleSubmit = () => {
        const random = Math.random();
        setTodoList([...todoList, { id: random, todo: text, isCompleted: false }])
    }

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
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 50, borderWidth: 1, width: 300, textAlign: 'center' }}
                placeholder="Enter Your Todo Here!!"
                onChangeText={newText => setText(newText)}
                onSubmitEditing={handleSubmit}
                defaultValue={''}
                clearTextOnFocus
            />
            <TodoList todoList={todoList} handleDelete={handleDelete} />
        </View>
    );
}

export default EnterTodos;