import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../../context/ThemeContext"; // Importa o contexto do tema
import { styles } from "./styles";

type Tarefa = {
    id: string;
    titulo: string;
    concluida: boolean;
};

export function Home() {
    const { theme, toggleTheme } = useTheme(); // Obtemos o tema atual e a função para alternar
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [tarefaName, setTarefaName] = useState("");

    // Adicionar uma nova tarefa
    function handleTarefaAdd() {
        if (!tarefaName.trim()) {
            return Alert.alert("Atenção!", "O título da tarefa não pode estar vazio.");
        }

        const novaTarefa: Tarefa = {
            id: String(new Date().getTime()),
            titulo: tarefaName,
            concluida: false,
        };

        setTarefas((prevState) => [...prevState, novaTarefa]);
        setTarefaName("");
    }

    // Remover uma tarefa
    function handleTarefaRemove(id: string) {
        Alert.alert("Remover", "Deseja remover esta tarefa?", [
            { text: "Não", style: "cancel" },
            {
                text: "Sim",
                onPress: () => {
                    setTarefas((prevState) => prevState.filter((tarefa) => tarefa.id !== id));
                },
            },
        ]);
    }

    // Alternar o status de uma tarefa
    function toggleTarefa(id: string) {
        setTarefas((prevState) =>
            prevState.map((tarefa) =>
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            )
        );
    }

    // Contadores
    const totalCriadas = tarefas.length;
    const totalConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

    // Decide a logomarca com base no tema
    const logoSource =
        theme.name === "dark" // Background do tema escuro
            ? require("../../../assets/logo-dark.png") // Logomarca para tema escuro
            : require("../../../assets/logo-light.png"); // Logomarca para tema claro

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Image source={logoSource} style={styles.logo} />
                <TouchableOpacity onPress={toggleTheme}>
                    <Icon
                        name={theme.name === "dark" ? "wb-sunny" : "nightlight-round"}
                        size={24}
                        color={theme.text}
                    />
                </TouchableOpacity>
            </View>

            {/* Formulário */}
            <View style={styles.form}>
                <TextInput
                    style={[
                        styles.input,
                        { backgroundColor: theme.inputBackground, color: theme.text },
                    ]}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={theme.text}
                    onChangeText={setTarefaName}
                    value={tarefaName}
                />
                <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                    <Icon name="add-circle-outline" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            {/* Contadores */}
            <View style={styles.counters}>
                <View style={styles.counter}>
                    <Text style={[styles.counterText, { color: theme.text }]}>Criadas</Text>
                    <Text style={styles.counterNumber}>{totalCriadas}</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={[styles.counterText, { color: theme.text }]}>Concluídas</Text>
                    <Text style={styles.counterNumber}>{totalConcluidas}</Text>
                </View>
            </View>

            {/* Lista de tarefas */}
            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.tarefaContainer,
                            { backgroundColor: theme.inputBackground },
                        ]}
                    >
                        <TouchableOpacity onPress={() => toggleTarefa(item.id)}>
                            <Icon
                                name={item.concluida ? "check-circle" : "radio-button-unchecked"}
                                size={24}
                                color={item.concluida ? "#1E6F9F" : "#4EA8DE"}
                            />
                        </TouchableOpacity>
                        <Text
                            style={[
                                styles.tarefaTexto,
                                { color: theme.text },
                                item.concluida ? styles.tarefaConcluida : null,
                            ]}
                        >
                            {item.titulo}
                        </Text>
                        <TouchableOpacity onPress={() => handleTarefaRemove(item.id)}>
                            <Icon name="delete" size={24} color="#E23C44" />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Icon name="format-list-bulleted" size={48} color="#6B6B6B" />
                        <Text style={[styles.emptyText, { color: theme.text }]}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.emptySubText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}