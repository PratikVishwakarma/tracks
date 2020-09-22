import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from './Spacer'


const AuthForm = ({ isSignUp, onButtonClick, errorMessage }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return <View>
        <Text h3>{isSignUp ? "Sign Up for tracker" : "Sign In for tracker"}</Text>
        <Spacer>
            <Input
                label='Email'
                value={email}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={setEmail}
            />
        </Spacer>
        <Spacer>
            <Input
                label='Password'
                secureTextEntry
                value={password}
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={setPassword}
            />
        </Spacer>
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage} </Text> : null}
        <Spacer>
            <Button type="solid" raised={true} title={isSignUp ? "Sign Up" : "Sign In"} onPress={() => {
                onButtonClick(email, password)
            }} />
        </Spacer>
    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginTop: 8,
        marginLeft: 8
    },

})

export default AuthForm
