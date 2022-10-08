import React, { FC } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationArguments';
import { CustomButton, CustomTextInput } from '../components';


type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

const MainScreen:FC<MainScreenProps> = ({ navigation }): JSX.Element => {
    const [player1, onPlayer1Changed] = React.useState<string>('Player 1')
    const [player2, onPlayer2Changed] = React.useState<string>('Player 2')

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>This is Memory</Text>
                <Text>For two Players!</Text>
            </View>
            <View>
                <CustomTextInput placeHolder={player1} onChangeText={onPlayer1Changed} />
                <CustomTextInput placeHolder={player2} onChangeText={onPlayer2Changed} />
            </View>
            <CustomButton 
                title='Start game'
                onPress={() => navigation.navigate('InGame',  {
                                                    nameOfPlayer1: player1, 
                                                    nameOfPlayer2: player2, })}
            />
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        
    },
    headerContainer: {
        alignItems:'center'
    },
    header: {
        fontSize: 24,
    }
})