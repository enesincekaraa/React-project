import { FilterTypes } from './../../components/filter/filter'
import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { getYear } from 'utils'

export const getDetailSelector = (state: AppState) =>
  state.movieReducer.detailReducer

export const getTrailer = createSelector(getDetailSelector, (details) => {
  if (details.videos.results.length !== 0) {
    const filteredData = details.videos.results.filter(
      (item) => item.type === 'Trailer'
    )
    return filteredData.length !== 0 ? filteredData[0].key : ''
  }
})

export const getStarringCast = createSelector(getDetailSelector, (details) => {
  if (details.casts.cast.length !== 0) {
    return details.casts.cast
      .filter(
        (item) =>
          item.known_for_department === 'Acting' && item.profile_path !== null
      )
      .slice(0, 14)
  }
})

export const getRecommended = createSelector(getDetailSelector, (details) => {
  if (details.recommended.length !== 0) {
    return details.recommended.slice(0, 6)
  }
})
const groupBy = (arr: any, property: string | number) => {
  return arr.reduce(
    (acc: { [x: string]: any }, cur: { [x: string]: string | number }) => {
      acc[cur[property]] = [...(acc[cur[property]] || []), cur]
      return acc
    },
    {}
  )
}

export const getCrew = createSelector(getDetailSelector, (details) => {
  if (details.casts.crew.length !== 0) {
    const filteredData = details.casts.crew.filter(
      (item) =>
        item.job === 'Director' ||
        item.job === 'Producer' ||
        item.job === 'Original Music Composer' ||
        item.job === 'Novel'
    )
    return groupBy(filteredData, 'job')
  }
})

export const getDetailInfoSelector = createSelector(
  getDetailSelector,
  (_: any, type: string) => type,
  (details, type) => {
    if (details.detail.length !== 0) {
      const { detail } = details

      const values = [
        {
          name: 'country',
          value: detail.production_countries
            .slice(0, 2)
            .map((item: any) => item.name)
            .join(' '),
        },
        {
          name: 'language',
          value: detail.spoken_languages
            .map((item: any) => item.name)
            .join(' '),
        },
        {
          ...(details.casts.crew.length !== 0 && {
            name: 'director',
            value: details.casts.crew.filter(
              (item) => item.job === 'Director'
            )[0]?.name,
          }),
          ...(details.casts.crew.length === 0 && {}),
        },
        {
          name: 'genre',
          value: detail.genres.map((item: any) => item.name).join(','),
        },
        { name: 'IMDB', value: detail.vote_average },
      ]

      switch (type) {
        case FilterTypes.Movie:
          values.push(
            {
              name: 'running',
              value: `${detail.runtime} min / ${
                Math.floor(detail.runtime / 60) +
                'h ' +
                (detail.runtime % 60) +
                'm'
              }`,
            },
            { name: 'year', value: getYear(detail.release_date) }
          )

          break
        case FilterTypes.Tv:
          values.push(
            {
              name: 'running',
              value: `${detail.episode_run_time} min`,
            },
            { name: 'year', value: getYear(detail.first_air_date) }
          )
          break
      }
      return values
    }
  }
)
