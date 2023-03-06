import styled from 'styled-components/native';

export const AccountNotifications = styled.TouchableOpacity`
    width: 47px;
    height: 47px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const NotificationValue = styled.Text`
    position: absolute;
    background-color: #ad8f67;
    border-radius: 50px;
    padding: 2px;
    color: #ffffff;
    z-index: 1;
    font-weight: bold;
    transform: translateX(10px) translateY(-10px);
`;