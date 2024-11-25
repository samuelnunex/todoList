import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles";

type Props = {
    tarefa: string;
    concluida: boolean;
    onToggle: () => void;
    onRemove: () => void;
};

export function Tarefa({ tarefa, concluida, onToggle, onRemove }: Props) {
    return (
        <View style={[styles.container, concluida ? styles.concluidaContainer : null]}>
            {/* Botão de Marcar/Desmarcar */}
            <TouchableOpacity style={styles.iconButton} onPress={onToggle}>
                <Icon
                    name={concluida ? "check-circle" : "radio-button-unchecked"}
                    size={24}
                    color={concluida ? "#4CAF50" : "#FFF"}
                />
            </TouchableOpacity>

            {/* Texto da Tarefa */}
            <Text style={[styles.tarefa, concluida ? styles.tarefaConcluida : null]}>
                {tarefa}
            </Text>

            {/* Botão para Remover */}
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            
        </View>
    );
}