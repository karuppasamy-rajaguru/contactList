import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
export const ContactItems = ({Image1,Title, Id}) => {
    const { container, title, profileImage,flexDirectionRow, flexDirectionRowReverse } = styles;
    return (
        <View style={[container, Id%2 == 0 ? flexDirectionRow : flexDirectionRowReverse ]}>
        <Image source={{uri : Image1}} style={[{'width': 50, 'height': 50}, profileImage]}></Image>
        <Text style={title}>{Title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:10,
        marginLeft : 10,
        marginRight:10,
        backgroundColor:'#4567A1'
    },
    flexDirectionRow : {
        flexDirection: 'row',
    },
    flexDirectionRowReverse : {
        flexDirection: 'row-reverse',
    },
    title : {
        alignSelf : 'center',
        marginLeft : 10,
    },
    profileImage : {
        borderRadius:20
    }
});