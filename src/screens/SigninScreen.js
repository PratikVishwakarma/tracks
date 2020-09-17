import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const SigninScreen = ({ navigation }) => {
    return <View>
        <Text style={styles.heading}>SigninScreen</Text>
        <Button title='Go to Signup' onPress={() => {
            navigation.pop()
        }} />
    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48
    }
})

export default SigninScreen