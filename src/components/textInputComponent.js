import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const TextInputComponent = (props) => {
    return (
        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={props.onChangeText}
                onSubmitEditing={props.onSubmitEditing}
                value={props.itemName}
                placeholder="Add Task"
                maxLength={30}
                returnKeyType="done"
                returnKeyLabel="done"
            />
            <View style={styles.horizontalLine} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
      height: 40,
    },
    horizontalLine: {
      borderBottomWidth: 1,
      borderBottomColor: "#c6c6c6"
    }
  });

export default TextInputComponent;