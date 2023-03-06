import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

export const Container = styled.View`
    margin-top: ${statusBarHeight};
    background-color: #212121;
    justify-content: center;
`;

export const ProfileContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
`;