import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    logo: {
        width: "50%",
        height: 100,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    tituloLogo: {
        fontSize: 16,
        fontFamily: "Inter_600SemiBold",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    form: {
        flexDirection: "row",
        marginTop: 20,
    },
    input: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        borderRadius: 5,
        color: "#FFF",
        padding: 10,
        marginRight: 10,
    },
    button: {
        backgroundColor: "#1E6F9F",
        padding: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    counters: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 10,
    },
    counter: {
        flexDirection: "row",
        alignItems: "center",
    },
    counterText: {
        color: "#FFF",
        fontSize: 16,
        marginRight: 5,
    },
    counterNumber: {
        color: "#1E6F9F",
        fontSize: 16,
        fontWeight: "bold",
    },
    tarefaContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    tarefaTexto: {
        flex: 1,
        color: "#FFF",
        marginLeft: 10,
    },
    tarefaConcluida: {
        textDecorationLine: "line-through",
        color: "#737373",
    },
    emptyList: {
        alignItems: "center",
        marginTop: 50,
    },
    emptyText: {
        color: "#FFF",
        fontSize: 16,
        marginTop: 10,
    },
    emptySubText: {
        color: "#737373",
        fontSize: 14,
        marginTop: 5,
    },
});