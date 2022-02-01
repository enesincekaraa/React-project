import { Text } from 'components'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    margin-left: 10px;
  }
`
export const StyledTextInput = styled.input<{ withIcon: boolean }>`
  width: 400px;
  color: #dfe0e0;
  border: 1px solid #2c2e32;
  background: transparent;
  border-radius: 6px;
  height: 50px;
  padding: ${(props) => (props.withIcon ? '0 40px' : '0px 10px')};
  :focus {
    outline: none;
    border: 1px solid #4d5bba;
  }
`
export const Error = styled(Text)`
  margin-top: 10px;
  color: red;
`
