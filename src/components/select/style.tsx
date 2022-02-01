import styled from 'styled-components'

export const StyledSelect = styled.select`
  padding: 0 20px;
  background-color: #111822;
  color: #343b42;
  border: 1px solid #343b42;
  font-weight: bold;
  appearance: none;
  outline: none;
  position: relative;
  background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='gray' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
    no-repeat;
  background-position: calc(100% - 0.3rem) center !important;

  &::-ms-expand {
    display: none;
  }
`
export const StyledOption = styled.option``
