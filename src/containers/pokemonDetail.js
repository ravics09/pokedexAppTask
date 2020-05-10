import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import apiHelper from './../utils/apiHelper';
import { connect } from 'react-redux';
import { addPokemon } from './../actions/pokemonAction';

class PokemonDetails extends Component {

    addPokemonInList = (item) => {
        const { addPokemonData } = this.props;
        addPokemonData(item);
    }

    openPokemonTrackerList = () => {
        const { navigation: { navigate } } = this.props;
        navigate('PokemonTrackerList');
    }

    render() {
        const { navigation } = this.props;
        const dataProps = navigation.getParam('pokemonDataProps');
        const pokeName = navigation.getParam('name');

        return (
            <View style={styles.container}>
                <View style={{ marginHorizontal: 8 }}>
                    <Text style={styles.pokemonProperty}>{pokeName}</Text>
                    <Image
                        source={{ uri: dataProps.sprites.front_default }}
                        style={styles.ImageStyle}
                        />

                    {
                        dataProps.stats.map((element) => {
                            if (element.stat.name == 'attack') {
                                return <Text style={styles.pokemonProperty}>Attack: {element.base_stat}</Text>
                            } else if (element.stat.name == 'hp') {
                                return <Text style={styles.pokemonProperty}>HP: {element.base_stat}</Text>
                            } else if (element.stat.name == 'defense') {
                                return <Text style={styles.pokemonProperty}>Defence: {element.base_stat}</Text>
                            }
                        })
                    }
                    <Text style={styles.pokemonProperty}>Type:</Text>
                    {
                        dataProps.types.map((element) => {
                            return (
                                <Text style={{ fontSize: 16, margin: 8 }}>
                                    - {element.type.name}
                                </Text>
                            )
                        })
                    }
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={{ backgroundColor: '#5DADE2'}} onPress={this.addPokemonInList.bind(this, pokeName)}>
                        <Text style={{ margin: 8, color: 'white'}}>Add</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: '#5DADE2', marginLeft: 8 }} onPress={this.openPokemonTrackerList}>
                        <Text style={{ margin: 8, color: 'white' }}>TrackList</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )   
    }
}

mapDispatchToProps = dispatch => ({
    addPokemonData: (item) => {
        dispatch(addPokemon(item));
    }
})

export default connect(null, mapDispatchToProps)(PokemonDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    pokemonProperty: {
        fontSize: 24,
        margin: 8
    },
    ImageStyle: {
        width: '100%',
        height: 300,
        margin: 8
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 8
    }
})