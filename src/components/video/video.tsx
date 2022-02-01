import React from 'react'
import { Container, Video } from 'components/video/style'

type YoutubeVideoProps = {
  id: string | undefined
}
export const YoutubeVideo = ({ id }: YoutubeVideoProps) => {
  return (
    <Container>
      <Video
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Container>
  )
}
