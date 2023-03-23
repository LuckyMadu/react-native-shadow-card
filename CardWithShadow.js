import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardWithShadow = ({ children, shadowColor, shadowRadius, shadowOpacity, shadowOffset }) => {
    const shadowStyle = {
        shadowColor: shadowColor || '#000',
        shadowRadius: shadowRadius || 2,
        shadowOpacity: shadowOpacity || 0.3,
        shadowOffset: shadowOffset || { width: 0, height: 2 },
    };

    return (
        <View style={[styles.card, shadowStyle]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
    },
});

export default CardWithShadow;
