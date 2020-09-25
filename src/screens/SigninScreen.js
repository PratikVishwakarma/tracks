import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import Spacer from '../components/Spacer'
import ClickLink from '../components/ClickLink'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {
    const { state, signIn, clearError } = useContext(AuthContext)
    return <View style={styles.container}>
        <NavigationEvents onWillBlur={clearError} />
        <AuthForm
            onButtonClick={(email, password) => {
                signIn({ email, password })
            }}
            isSignUp={false}
            errorMessage={state.errorMessage} />
        <Spacer>
            <ClickLink
                title={"Don't have an account?\n Go back to sign up."}
                callBack={() => {
                    navigation.pop()
                }} />
        </Spacer>
    </View>
}

SigninScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        paddingTop: 100,
        paddingLeft: 16,
        paddingRight: 16,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginTop: 8,
        marginLeft: 8
    }
})

export default SigninScreen