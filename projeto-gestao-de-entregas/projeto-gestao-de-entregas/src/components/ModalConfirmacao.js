import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ModalConfirmacao = ({ visible, onClose, onConfirm, loading, title, message, confirmText }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>{message}</Text>
                    <View style={styles.modalButtons}>
                        <Button title="Cancelar" onPress={onClose} color="#FF8C00" />
                        <Button
                            title={loading ? `${confirmText}...` : confirmText}
                            onPress={onConfirm}
                            disabled={loading}
                            color="#FF8C00"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
});

export default ModalConfirmacao;