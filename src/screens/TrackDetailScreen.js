import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const TrackDetailScreen = ({ navigation }) => {
    return <View>
        <Text style={styles.heading}>TrackDetailScreen</Text>
        <Button title='Go to Track List' onPress={() => {
            navigation.pop()
        }} />

    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48
    }
})

export default TrackDetailScreen