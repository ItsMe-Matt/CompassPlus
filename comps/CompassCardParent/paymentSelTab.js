import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";



const Payment = [
    { title: 'Mastercard', id: '1' },
    { title: 'Visa', id: '2' },
    { title: 'Add Payment', id: '3' },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

const PaymentTab = ({
    selectThis = () => { },
}) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#E3E3E4" : "transparent";
        const color = item.id === selectedId ? 'black' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Payment}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                onPress={selectThis}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 30,
        marginTop: StatusBar.currentHeight || 0,
        overflow: 'hidden',
    },
    item: {
        paddingTop: 5,
    },
    title: {
        fontSize: 18,
        margin: 10,
    },
});

export default PaymentTab;