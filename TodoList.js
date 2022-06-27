import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text, View } from 'react-native';

const TodoList = ({ todoList, handleDelete }) => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            {console.log(todoList)}
            {item.isCompleted
                ? <Text style={styles.done} onPress={() => handleDelete(item)}>{item.todo}</Text>
                : <Text style={styles.title} onPress={() => handleDelete(item)}>{item.todo}</Text>
            }
        </View>
    );

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