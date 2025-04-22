import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const imageStyles = { flex: 1, justifyContent: 'center' }
const imageUrl = "https://img.freepik.com/premium-photo/mountain-landscape-with-fog-clouds-mountains-sunrise_495907-288.jpg"
const image = { uri: imageUrl}


const App = () => {
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode='cover' style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'auto'
            }}>
                <Text style={styles.text}>breathe</Text>
                <Icon name="arrow-right" size={30} color="#900" />
            </ImageBackground>
        </View>
    );
};


const styles = StyleSheet.create({
    view: {
        flex: 1,
        experimental_backgroundImage: '/'
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        color: "#4e4d49",
        bottom: 50
    },
    textRed: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'red'
    }
});


export default App;


