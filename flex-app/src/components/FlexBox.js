import React from 'react';
import { View, StyleSheet } from 'react-native';

export class FlexBox extends React.Component {

    render(){
        const { firstContainer, secondContainer, basicGridStyle} = styles;
        return(
            <View style={{flex:2}}>
                <View style={firstContainer}>
                    <View style={{backgroundColor: 'red', height:125}}></View>
                    <View style={{backgroundColor: 'green', height:125}}></View>
                </View>
                <View style={secondContainer}>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>
                    <View style={basicGridStyle}></View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstContainer : {
    },

    secondContainer:{
        flexDirection:'column',
        flexWrap:'wrap',
        flexShrink:2,
        alignContent:'stretch'
    },

    basicGridStyle : {
        backgroundColor: 'blue',
        height:100, 
        width:100,
        marginTop:10,
        alignSelf:'center'
    }
});