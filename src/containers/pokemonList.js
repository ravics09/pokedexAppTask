import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import apiHelper from './../utils/apiHelper';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: [],
            pokemonDetail: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const res = await apiHelper.getPokemonData();
        this.setState({ pokemonData: res.data.results });
    }

    openPokemonDetail = async (name, index) => {
        const { navigation } = this.props;
        const res = await apiHelper.getPokemonDetail(index);
        this.setState({ pokemonDetail: res.data });
        navigation.navigate('PokemonDetails', { pokemonDataProps: res.data, name: name });
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item, index}) => {
        return (
            <TouchableOpacity key={index} style={{ marginHorizontal: 8 }} onPress={this.openPokemonDetail.bind(this, item.name, index)}>
                <Text style={{ fontSize: 24 }}>
                    {item.name = item.name[0].toUpperCase() +
                        item.name.slice(1)}
                </Text>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
                />
        );
    };

    render() {
        const { pokemonData } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={pokemonData}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    ItemSeparatorComponent={this.renderSeparator}
                    />
            </View>
        )
    }
}

export default PokemonList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})