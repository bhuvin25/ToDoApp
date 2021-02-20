import React from "react";
import { View, Text } from "react-native";
import { Picker } from '@react-native-community/picker'

const PickerComponent = (props) => {
    return (
        <View>
            <View style={{ flexDirection: 'row'}}>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={{ fontSize: 12, color: '#000000' }}>SORT BY</Text>
                </View>
                <Picker
                    itemStyle={{ fontSize: 12}}
                    mode='dropdown'
                    selectedValue={props.selectedValue}
                    style={{ height: 25, width: 150 }}
                    onValueChange={props.onValueChange}
                >
                    <Picker.Item label="Name" value="Name" />
                    <Picker.Item label="Date" value="Date" />
                </Picker>
            </View>
        </View>);
}

export default PickerComponent;