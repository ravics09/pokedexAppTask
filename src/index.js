import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import GlobalNavigator from './navigation/global.navigation';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Provider store={store}>
                    <GlobalNavigator />
                </Provider>
            </SafeAreaView>
        )
    }
}
export default App;