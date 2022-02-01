import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
  DetailContainer,
  DetailTitle,
  ImgContainer,
  VideoContainer,
  LeftSide,
  RightSide,
  InfoContainer,
  InfoItemContainer,
  DetailPartContainer,
  StarringContainer,
  CrewContainer,
  CrewItemContainer,
  StyledDetailSubText,
  StyledDetailText,
  RecommendedContainer,
} from 'pages/detail/style'
import { Card, FilterTypes, YoutubeVideo } from 'components'
import { useDispatch } from 'react-redux'
import { clearDetail, getDetail, getTvDetail } from 'store'
import { useDetail } from 'hooks'
import { IMAGE_BASE_URL } from 'utils'
import { LoadingState } from 'types'
import { ICrew } from 'services'
import { TextProps } from 'components'
import { Loading } from 'components'
import { FilmSeries, Movies } from 'components/movies/movies'

export const Detail = () => {
  const params = useParams<{ id: string }>()
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    generalDetail,
    detailInfo,
    trailer,
    starringCast,
    crew,
    recommended,
  } = useDetail(history.location.pathname.split('/')[2])
  const { detail, loading } = generalDetail
  useEffect(() => {
    const { id } = params
    const isFilm = history.location.pathname.includes(FilterTypes.Movie)
    if (isFilm) {
      dispatch(getDetail(parseInt(id)))
    } else {
      dispatch(getTvDetail(parseInt(id)))
    }

    return () => {
      dispatch(clearDetail())
    }
  }, [params.id])

  if (loading === LoadingState.Loading) {
    return <Loading />
  }

  return (
    loading !== LoadingState.Idle && (
      <DetailContainer>
        <ImgContainer>
          <DetailTitle text={detail.original_title} />
          <img
            style={{ height: 'auto', maxWidth: '100%' }}
            src={`${IMAGE_BASE_URL}/w300/${detail.poster_path}`}
          />
        </ImgContainer>
        <LeftSide>
          <InfoContainer>
            {detailInfo?.map((item) => (
              <InfoItemContainer
                extraMargin={item.name === 'IMDB'}
                key={item.name}
              >
                <DetailSubText text={item.name} />
                <DetailText
                  size={item.name !== 'IMDB' ? 'medium' : 'large'}
                  text={item.value}
                />
              </InfoItemContainer>
            ))}
          </InfoContainer>
        </LeftSide>
        <VideoContainer>
          <YoutubeVideo id={trailer} />
        </VideoContainer>
        <RightSide>
          <DetailPartContainer>
            <DetailSubText text='Plot' />
            <DetailText text={detail.overview} />
          </DetailPartContainer>
          <DetailPartContainer>
            <DetailSubText text='Starring' />
            <StarringContainer>
              {starringCast?.map((item) => (
                <>
                  <Card key={item.id} small>
                    <Card.Image
                      src={`${IMAGE_BASE_URL}/w200/${item.profile_path}`}
                    />
                    <Card.Footer>
                      <Card.Text text={item.name} />
                    </Card.Footer>
                  </Card>
                </>
              ))}
            </StarringContainer>
          </DetailPartContainer>
          <DetailPartContainer>
            <CrewContainer>
              {crew?.['Director'] && (
                <CrewItem arr={crew['Director']} title='Directed By' />
              )}
              {crew?.['Producer'] && (
                <CrewItem arr={crew['Producer']} title='Produced By' />
              )}
              {crew?.['Novel'] && (
                <CrewItem arr={crew['Novel']} title='Written By' />
              )}
              {crew?.['Original Music Composer'] && (
                <CrewItem
                  arr={crew['Original Music Composer']}
                  title='Music By'
                />
              )}
            </CrewContainer>
          </DetailPartContainer>
          <DetailPartContainer>
            <DetailSubText text='Recommended' />
            <RecommendedContainer>
              {recommended && (
                <Movies>
                  <FilmSeries films={recommended} />
                </Movies>
              )}
            </RecommendedContainer>
          </DetailPartContainer>
        </RightSide>
      </DetailContainer>
    )
  )
}

const CrewItem = ({ arr, title }: any) => {
  return arr ? (
    <CrewItemContainer>
      <DetailSubText text={title} />
      {(arr as ICrew[]).map((item) => (
        <DetailText key={item.id} text={item.original_name} />
      ))}
    </CrewItemContainer>
  ) : null
}

const DetailSubText = ({ ...props }: TextProps) => {
  return <StyledDetailSubText size='medium' bold {...props} />
}

const DetailText = ({ ...props }: TextProps) => {
  return <StyledDetailText size='medium' {...props} />
}
