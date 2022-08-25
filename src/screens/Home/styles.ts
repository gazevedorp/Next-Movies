import styled from 'styled-components';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: #000;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(26)}px;
    text-align: center;
    margin: 0px;
    padding: 20px 20px 0px 20px;
    font-family: 'Ronald-Charis';
`;

export const Card = styled.TouchableOpacity`
    align-items: center;
    width : 50%;
    padding: 10px;
`;

export const CardImage = styled.Image`
    width: 138px;
    height: 208px;
    border-radius: 10px;
`;

export const CardTitle = styled.Text`
    width: 100%;
    margin-top: 5px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    font-family: 'Ronald-Charis';
`;

export const LineHeader = styled.View`
    width: 80%;
    text-align: center;
    align-self: center;
    height: 1px;
    border-radius: 10px;
    background-color: #B7950B;
    margin-bottom: 10px;
`;