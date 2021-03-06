import React from 'react';
import { StyleSheet } from 'react-native';

//Style Sheet
const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontSize: 15,
    },
    header: {
      color: 'black',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontSize: 35,
      fontStyle: 'italic',
    },
    goalText: {
      color: 'black',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontSize: 15,
    },
    goalTextHeader: {
      color: 'black',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: 20,
    },
    logoImage: {
      width: 60,
      height: 60,
    },
    walletIcon: {
      width: 50,
      height: 50,
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 50/ 2,
    },
    container: {
      width: 500,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#57b27a',
    },
    outerContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      height: 35, 
      width: 100,
      borderColor: '#234041', 
      borderWidth: 1,
      color: 'black',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontSize: 20,
    },
    goalTextInput: {
      height: 35, 
      width: 200,
      borderColor: '#234041', 
      borderWidth: 1,
      color: 'black',
      fontFamily: 'sans-serif-light',
      fontWeight: 'bold',
      fontSize: 20,
    },
    goalWindow: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 5,
      backgroundColor: 'white',
    },
    scrollView: {
      width: 400,
      borderColor: '#234041', 
      borderWidth: 1,
      backgroundColor: '#ccffcc',
    },
    padding: {
      padding: 5,
    },
  });

module.exports = styles;
