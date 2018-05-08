import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {ContactItems} from './ContactItems';

export default class ContactList extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=20').then(res => res.json())
        .then(contact => {
            this.setState({
                contacts: contact.results
            });
        })
    }

    getList() {
        return (
            this.state.contacts.map(( contact, index) => {
                const  { name, picture } = contact;
                return(
                    <ContactItems Title={`${name.first} ${name.last}`} Id={index} Image1={picture.thumbnail}/>
                );
            }) 
        )
    }

    render(){
        return(
            <ScrollView style={styles.container}>
                {this.getList()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
    }
});