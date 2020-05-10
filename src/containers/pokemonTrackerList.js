import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removePokemon } from './../actions/pokemonAction';

class PokemonTrackerList extends Component {

    removePokemonFromList = (item) => {
        // console.log("pokemon to delete", item);
        const { removePokemonData } = this.props;
        removePokemonData(item);
    }

    render() {
        const { pokemonList } = this.props;
        return (
            <View style={styles.Container}>
                {
                    pokemonList.length > 0 ?
                        pokemonList.map((item) =>
                            (
                                <View style={styles.renderItemStyle} key={item}>
                                    <View style={styles.itemStyle}>
                                        <Text style={{ fontSize: 24 }}>
                                            {item = item[0].toUpperCase() +
                                                item.slice(1)}
                                        </Text>
                                    </View>

                                    <TouchableOpacity style={{ backgroundColor: '#5DADE2' }} onPress={this.removePokemonFromList.bind(this, item)}>
                                        <Text style={{ margin: 8, color: 'white' }}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        ) :
                        <View style={styles.messageContainer}>
                            <Text style={styles.messageStyle}> No Item in the  List. Please Add....</Text>
                        </View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { pokemonList } = state.PokemonReducer;
    return { pokemonList }
};

const mapDispatchToProps = dispatch => ({
    removePokemonData: (item) => {
        dispatch(removePokemon(item));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTrackerList);

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    renderItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 16
    },
    itemStyle: {
        justifyContent: 'center',
    },
    messageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 16
    },
    messageStyle: {
        fontSize: 16,
        margin: 8
    }
});