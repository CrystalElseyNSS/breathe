import React from 'react';
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';


interface AppProps { }

const imageStyles = { flex: 1, justifyContent: 'center' }
const imageUrl = "https://img.freepik.com/premium-photo/mountain-landscape-with-fog-clouds-mountains-sunrise_495907-288.jpg"
const image = { uri: imageUrl}

const App: React.FC<AppProps> = () => {
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode='cover' style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'auto'
            }}>
                <Text style={styles.text}>Breathe</Text>
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
    },
    textRed: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'red'
    }
});


export default App;


