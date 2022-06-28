import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text, View } from 'react-native';

const TodoList = ({ todoList, handleDelete }) => {
    // renderItem will dispay each item in the list.
    // It will set the style according to the value of isCompleted.
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            {console.log(todoList)}
            {item.isCompleted
                ? <Text style={styles.done} onPress={() => handleDelete(item)}>{item.todo}</Text>
                : <Text style={styles.title} onPress={() => handleDelete(item)}>{item.todo}</Text>
            }
        </View>
    );
    // Here we are returning the whole list using FlatList core component of React Native.
    // SafeAreaView is also a core component of React Native.
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={todoList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
// This is how we can set style in React Native.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    item: {
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 4,
    },
    title: {
        fontSize: 15,
    },
    done: {
        fontSize: 15,
        textDecorationLine: 'line-through'
    }
});

export default TodoList;