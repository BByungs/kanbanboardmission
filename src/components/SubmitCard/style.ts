import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > .button {
    border: none;
    border-radius: 5px;
    width: 130px;
    padding: 5px 16px;
  }
`;

export const SubmitButton = styled.button`
  background: #2da44e;
  margin-right: 5px;
  color: white;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const CancelButton = styled.button`
  background: #f6f8fa;
  cursor: pointer;
`;

export const Input = styled.textarea`
  resize: vertical;
  padding: 7px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.form`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;
