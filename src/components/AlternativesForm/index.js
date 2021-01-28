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
        animation: blinker 3s linear infinite;
        }
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }

    }
    &[data-status="CORRECT"] {
        background-color: ${({ theme }) => theme.colors.success};

        @keyframes blinker {
        50% {
            opacity: 0;
        }
        }
        animation: blinker 3s linear infinite;
        }
        
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
