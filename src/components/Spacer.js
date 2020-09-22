import React from 'react'
import { View, StyleSheet } from 'react-native'


const Spacer = ({ children }) => {
    return <View style={styles.spacer}>{children}</View>
}

const styles = StyleSheet.create({
    spacer: {
        marginTop: 16,
        marginBottom: 0,
        marginLeft: 16
    }
})

export default Spacer