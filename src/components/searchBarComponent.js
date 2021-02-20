import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from 'react-native-elements'

const SearchBarComponent = (props) => {
    const [searchText, setSearchText] = useState('');

    return (
        <View>
            <SearchBar
                placeholder="Search by Item"
                value={searchText}
                onChangeText={value => setSearchText(value)}
                searchIcon={{ size: 20, color: '#000000' }}
                onClear={() => props.onSearch('')}
                onSubmitEditing={() => props.onSearch(searchText)}
                inputStyle={styles.inputStyle}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                returnKeyType="search"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        width: '100%',
    },
    inputStyle: {
        fontSize: 11,
        color: '#0f1618',
    },
    inputContainerStyle: {
        backgroundColor: '#ffffff',
        height: 20,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        paddingVertical: 18,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        borderColor: '#000000',
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        borderLeftWidth: 0.7,
        borderRightWidth: 0.7,
        width: '100%',
    }
});

export default SearchBarComponent;