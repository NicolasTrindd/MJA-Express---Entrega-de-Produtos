import { StyleSheet } from 'react-native';

const COR_PRIMARIA = '#FF8C00';
const COR_FUNDO = '#FFFAF0';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: COR_FUNDO,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COR_PRIMARIA,
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: COR_PRIMARIA,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;