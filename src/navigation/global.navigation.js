import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PokemonListScreen from './../containers/pokemonList';
import PokemonDetailsScreen from './../containers/pokemonDetail';
import PokemonTrackerListScreen from './../containers/pokemonTrackerList';

const AppNavigator = createStackNavigator({
    PokemonList: {
        screen: PokemonListScreen,
        navigationOptions: {
            title: 'Pokemon List',
            headerStyle: { backgroundColor: '#5DADE2' },
            headerTitleStyle: { color: '#FFFFFF' },
        }
    },
    PokemonDetails: {
        screen: PokemonDetailsScreen,
        navigationOptions: {
            title: 'Pokemon Details',
            headerStyle: { backgroundColor: '#5DADE2' },
            headerTitleStyle: { color: '#FFFFFF' },
            headerBackTitleStyle: { color: '#FFFFFF' },
            headerTintColor: '#FFFFFF'
        }
    },
    PokemonTrackerList: {
        screen: PokemonTrackerListScreen,
        navigationOptions: {
            title: 'Pokemon Tracker List',
            headerStyle: { backgroundColor: '#5DADE2' },
            headerTitleStyle: { color: '#FFFFFF' },
            headerBackTitleStyle: { color: '#FFFFFF' },
            headerTintColor: '#FFFFFF'
        }
    }
}, {
        initialRouteName: 'PokemonList'
    })

const GlobalNavigator = createAppContainer(AppNavigator);

export default GlobalNavigator;