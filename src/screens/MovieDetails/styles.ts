import styled from 'styled-components';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: #000;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Image = styled.Image`
    width: 138px;
    height: 208px;
    border-radius: 20px;
`;

export const Title = styled.Text`
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: ${RFValue(24)}px;
    font-family: 'Ronald-Charis';
`;

export const Description = styled.Text`
    margin-top: 10px;
    font-size: ${RFValue(14)}px;
    font-family: 'Ronald-Charis';
    width: 100%;
    text-align: justify;
`;

export const ReleaseDate = styled.Text`
    font-size: ${RFValue(18)}px;
    margin-top: 10px;
    text-align: center;
    font-family: 'Ronald-Charis';
`;

export const LineHeader = styled.View`
    width: 95%;
    text-align: center;
    align-self: center;
    height: 1px;
    border-radius: 10px;
    background-color: #B7950B;
    margin: 5px 0px 5px 0px;
`;