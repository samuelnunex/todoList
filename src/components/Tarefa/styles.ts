import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        padding: 10,
    },
    concluidaContainer: {
        backgroundColor: '#2D2D30', // Fundo mais claro para tarefas concluídas
    },
    tarefa: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    tarefaConcluida: {
        textDecorationLine: 'line-through',
        color: '#737373', // Cor mais clara para texto concluído
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
    iconButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});