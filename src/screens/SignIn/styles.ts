import styled from 'styled-components';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: #000;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: ${RFValue(46)}px;
    text-align: center;
    font-family: 'Ronald-Charis';
`;

export const Description = styled.Text`
    color: #fff;
    font-size: ${RFValue(20)}px;
    text-align: center;
    margin: 20px 20px 50px 20px;
    font-family: 'Ronald-Charis';
`;

export const Button = styled.TouchableOpacity`
    border-color: #fff;
    padding: 10px 30px 10px 30px;
    border-radius: 30px;
    background-color: #B7950B;
`;

export const ButtonText = styled.Text`
    color: #000;
    font-size: ${RFValue(20)}px;
    text-align: center;
    font-family: 'Ronald-Charis';
`;