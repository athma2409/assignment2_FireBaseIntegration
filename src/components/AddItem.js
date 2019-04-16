import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import { db } from '../config';

let addItem = (item) => {
    db.ref('/items').push({
        itemInfo: item
    })
}

let itemsRef = db.ref('/items');
export default class AddItem extends Component {
    static navigationOptions = ({ navigation }) => {
        navigation.title = "AddItem"
        return {
            header: <TopNav navigation={navigation} />
        }
    }
    constructor(props) {
        super(props);

        this.state = {
            itemInfo: "",
            items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.clickToAddItem = this.clickToAddItem.bind(this);
    }

    clickToAddItem() {
        addItem(this.state.itemInfo);
    }
    handleChange(e) {
        this.setState({ itemInfo: e.nativeEvent.text })
    }

    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="AddItem"
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChange={this.handleChange}
                />
                <Button
                    title="Add"
                    color="#841584"
                    onPress={this.clickToAddItem}
                />

                {this.state.items.map(x => {
                    return <Text style={styles.container}> {x.itemInfo}</Text>
                })}

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderColor: "#841584",
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});