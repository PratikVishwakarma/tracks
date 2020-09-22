import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import Spacer from '../components/Spacer'
import ClickLink from '../components/ClickLink'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'


const SignupScreen = ({ navigation }) => {
    const { state, signUp, clearError } = useContext(AuthContext)


    return <View style={styles.container}>
        <AuthForm
            onButtonClick={(email, password) => {
                signUp({ email, password })
            }}
            isSignUp={true}
            errorMessage={state.errorMessage} />
        <Spacer>
            <ClickLink
                title={"Already have an account?\n Sign In instead."}
                callBack={() => {
                    navigation.navigate('Signin')
                    clearError()
                }} />
        </Spacer>
    </View>
}


// SignupScreen.navigationOptions = () => {
//     return {
//         header: null
//     }
// }

SignupScreen.navigationOptions = {
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
    },

})

export default SignupScreen