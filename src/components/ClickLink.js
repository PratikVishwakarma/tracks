import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'


const ClickLink = ({ title, callBack }) => {
    return <TouchableOpacity
        onPress={() =>
            callBack()
        }>
        <Text style={styles.link}> {title} </Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        fontWeight: 'bold'
    }
})

export default ClickLink