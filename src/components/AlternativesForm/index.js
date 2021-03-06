import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
        background-color: ${({ theme }) => theme.colors.primary};
        
        &[data-status="SUCCESS"] {
          background-color: ${({ theme }) => theme.colors.success};
            @keyframes blinker {
              50% {
                  opacity: 0;
              }
            }
            animation: blinker 1s linear infinite;
          }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.primary}50;
      }
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong}10;
      }

    &[data-status="CORRECT"] {
        background-color: ${({ theme }) => theme.colors.success};

        @keyframes blinker {
        50% {
            opacity: 0;
        }
        }
        animation: blinker 1s linear infinite;
    }
    &:focus {
      opacity: 1;
    } 
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
