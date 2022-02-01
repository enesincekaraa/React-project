import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import { Container } from 'components/loading/style'

export const Loading = () => {
  return (
    <Container>
      <HashLoader color='white' size={50} />
    </Container>
  )
}
