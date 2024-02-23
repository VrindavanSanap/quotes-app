import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const { type, content, onPress } = props;

    const backgroundColor = '#000000';
    const textColor = 'white';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button,
                { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>
                    {content}
                </Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;