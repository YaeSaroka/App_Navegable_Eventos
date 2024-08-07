import React from 'react',
import { StyleSheet, View } from 'react-native',

const Flex = () => {
    return(
        <View
            style={[
                styles.container, {flexDiretion: 'column',},
            ]}>
        <View style= {{flex:1}}></View>
        </View>
    ),
},
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 150,
        },
    }),


export default Flex,