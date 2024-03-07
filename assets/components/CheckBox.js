import React from 'react';
import { Wrapper, Box, Label } from './src/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckBox = ({
    value = false,
    onChange
}) => {
    const handleChange = () => {
        if (onChange) {
            onChange(!value);
        }
    };
    return (
        <Wrapper>
            <Box onPress={handleChange}>
                {value ? <Icon size={28} name="check" /> : null}
            </Box>
            <Label />
        </Wrapper>
    );
};

export default CheckBox;