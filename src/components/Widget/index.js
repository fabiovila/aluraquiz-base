import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};

  background-color: ${({ theme }) => `${theme.colors.mainBg}80`};
   border-radius: 5px; 
  overflow: hidden;
  box-shadow: 5px 5px 5px #00000099;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p, input, button {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  button, input{
    width: 100%;
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 1em;
  }
  button {
    color: ${({ theme }) => theme.colors.contrastText}; 
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0px ${({ theme }) => theme.colors.primary} solid ;  
    padding: 5px;  
  }
  button:disabled, button[disabled] {
    color: ${({ theme }) => theme.colors.disabled}; 
  }
  input {
    border: 0px ${({ theme }) => theme.colors.primary} solid ;   
    padding: 5px; 
  }
`;

Widget.Splash = styled.div`
background-image: url(${({ splashimg }) => splashimg});
background-size: cover;
width: 50px;
height: 50px;
position:relative;
top: -15px;
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  font-size: 13px;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText}90;
  background-color: #00000040;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;  
  &:hover,
  &:focus {
    /* opacity: .5; */
    background-color: ${({ theme }) => `${theme.colors.primary}95`};
  }
  &:checked + a{
    background-color: ${({ theme }) => `${theme.colors.primary}95`};
  }
`;

export default Widget;
