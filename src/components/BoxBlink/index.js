import styled from 'styled-components';

const BoxBlink = styled.div`
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
animation: blinker 1.5s linear infinite;
width: ${(props) => props.width};
min-height: ${(props) => props.height};
background-color: ${(props) => props.color};
border-radius: ${(props) => props.radius};
margin-bottom: 1em;
`;

export default BoxBlink;

BoxBlink.defaultProps = {
  color: '#ddd',
  width: '100%',
  height: '1.1em',
  radius: '4px',
};
