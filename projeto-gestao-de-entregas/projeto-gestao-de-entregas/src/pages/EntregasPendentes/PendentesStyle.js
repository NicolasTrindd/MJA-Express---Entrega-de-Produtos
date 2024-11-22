import { StyleSheet } from 'react-native';

const COR_PRIMARIA = '#FF8C00';
const COR_FUNDO = '#FFFAF0';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_FUNDO,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginTop: 60,
    textAlign: 'center',
    color: COR_PRIMARIA,
  },
});
export default styles;
