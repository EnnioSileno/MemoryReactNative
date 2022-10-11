import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
    winner: string,
}

const MemoryWinnerView:FC<Props> = ({ winner }) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The Game is finished</Text>
            <Text style={styles.text}>{winner} won!</Text>
        </View>
    );
}

export default MemoryWinnerView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent:'center',
        alignItems: "center",
        padding: 10,     
    },
    title: {
        fontSize: 20,
    },
    text: {
        marginTop: 10,
    },
});