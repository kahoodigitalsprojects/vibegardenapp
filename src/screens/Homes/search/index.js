import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';



const Search = () => {
    return (

        <SafeAreaView style={styles.main}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#000" />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fefe'
    },

})
export default Search;
