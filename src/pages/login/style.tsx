import { Text } from 'components'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const FormText = styled(Text)`
  color: #787a7e;
`
export const FormContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 30px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:first-child) {
    margin-left: 25px;
  }
`
export const RoundedIcon = styled.div`
  height: 60px;
  width: 60px;
  background-color: transparent;
  border: 1px solid #787a7e;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`
