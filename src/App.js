import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import moment from 'moment'
import PickerComponent from './components/pickerComponent'
import TextInputComponent from './components/textInputComponent'
import SearchBarComponent from './components/searchBarComponent'
import ListComponent from './components/listComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [],
      itemName: '',
      sortedby: 'Name'
    }
    this.arrayholder = [];
  }

  onChangeText = (value) => {
    this.setState({ itemName: value })
  }
  
  onSubmitEditing = () => {
    let { taskList, itemName, sortedby } = this.state;
    if (itemName.length > 0) {
      let task = {
        name: itemName,
        createdTime: moment(new Date()).format('DD MMM YYYY hh:mm:ss A')
      }
      taskList.push(task);
      if (sortedby == 'Name') {
        taskList.sort((a, b) => a.name > b.name ? 1 : -1)
      }
      this.setState({
        taskList,
        itemName: ''
      },
        function () {
          this.arrayholder = taskList;
        })
    } else {
      Alert.alert('Please Enter Item Name')
    }
  }

  onValueChange = (value) => {
    let newData
    if (value == 'Name') {
      newData = this.arrayholder.sort(((a, b) => a.name > b.name ? 1 : -1))
    } else if (value == 'Date') {
      newData = this.arrayholder.sort((a, b) => { return new Date(a.createdTime) - new Date(b.createdTime) })
    }
    this.setState({
      taskList: newData,
      sortedby: value
    })
  }

  onSearch = (searchText) => {
    const newData = this.arrayholder.filter((item) => {
      const itemData = item.name ? item.name.toUpperCase() : '';
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      taskList: newData,
    });
  };

  render() {
    const { itemName, taskList, sortedby } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <SearchBarComponent
            onSearch={this.onSearch}
          />
          <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
            <PickerComponent
              selectedValue={sortedby}
              onValueChange={this.onValueChange}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <ListComponent
              taskList={taskList}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <TextInputComponent
              itemName={itemName}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEditing}
            />
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5da'
  },
  textInput: {
    height: 40,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#c6c6c6"
  }
});

export default App;