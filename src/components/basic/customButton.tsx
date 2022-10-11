import React, { FC } from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
}

const CustomButton:FC<Props> = ({title, onPress}): JSX.Element => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text} >{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8
    },
    text: {
        color: '#fff'
    }
});