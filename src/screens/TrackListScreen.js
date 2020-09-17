import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
    return <View>
        <Text style={styles.heading}>TrackListScreen</Text>
        <Button title='Go to Track Details' onPress={() => {
            navigation.navigate('TrackDetail')
        }} />

    </View>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48
    }
})

export default TrackListScreen