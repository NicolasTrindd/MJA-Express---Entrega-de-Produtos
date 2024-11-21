import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
const navigation = useNavigation();

return (
<View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.logoContainer}>
    <Image source={require('../../assets/MJA.png')} style={styles.logo} />
    </TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
position: 'absolute',
top: 0,
left: 0,
right: 0,
zIndex: 1000,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingHorizontal: 10,
height: 60,
backgroundColor: '#FFFAF0',
borderBottomWidth: 1,
borderBottomColor: '#ddd',
},
logoContainer: {
flex: 1,
alignItems: 'center',
},
logo: {
width: 800,
height: 150,
resizeMode: 'contain',
},
});

export default TopBar;