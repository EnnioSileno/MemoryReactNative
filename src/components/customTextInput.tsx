import React, { Dispatch, FC, SetStateAction } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';


interface Props {
    placeHolder: string;
    onChangeText: Dispatch<SetStateAction<string>>;
}

const CustomTextInput:FC<Props> = ({placeHolder, onChangeText}): JSX.Element => {
    return (
        <TextInput 
                    style={styles.textInput}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
        />
    )
}

export default CustomTextInput;


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
})