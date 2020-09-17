import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const SignupScreen = ({ navigation }) => {
    return <View>
        <Text style={styles.heading}>SignupScreen</Text>
        <Button title='Go to Signin' onPress={() => {
            navigation.navigate('Signin')
        }} />

        <Button title='Go to Main folw' onPress={() => {
            navigation.navigate('mainFlow')
        }} />
    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48
    }
})

export default SignupScreen