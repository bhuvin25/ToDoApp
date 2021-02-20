import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListComponent = (props) => {

    const renderSeparator = () => {
        return (
            <View style={styles.separator} />
        );
    }

    return (
        <View>
            <FlatList
                data={props.taskList}
                renderItem={({ item }) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 0.6 }}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        <View style={{ flex: 0.4 }}>
                            <Text style={styles.date}>{item.createdTime}</Text>
                        </View>
                    </View>}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={renderSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View>);
}

const styles = StyleSheet.create({
    name: {
        color: "#000000",
        fontSize: 14,
    },
    date: {
        color: "#000000",
        fontSize: 12,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: "#CED0CE",
        marginVertical: 10,
    }
});

export default ListComponent;