/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { type } from 'os'
import { Middleware } from 'redux'
import toast from 'react-hot-toast'
import { IMovie } from 'services'
import { AppState } from 'store/store'
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from 'utils'

// const TMDB_IMAGE_BASE_URL = (isPoster = false) => {
//   return isPoster
//     ? `${IMAGE_BASE_URL}/${POSTER_SIZE}`
//     : `${IMAGE_BASE_URL}/${BACKDROP_SIZE}`
// }

// export const changeImagePathMiddleware: Middleware<{}, AppState> =
//   () => (next) => (action) => {
//     const type = action.type as string
//     if (!type.includes('SUCCESS')) {
//       next(action)
//     } else if (type.includes('OPTIONS')) {
//       next(action)
//     } else {
//       !/[0-9]/.test(Object.keys(action.payload).toString())
//       if ('toprated' in action.payload) {
//         Object.keys(action.payload).forEach((item) => {
//           action.payload[item].forEach((movies: any) => {
//             movies.backdrop_path = `${TMDB_IMAGE_BASE_URL()}${
//               movies.backdrop_path
//             }`
//             movies.poster_path = `${TMDB_IMAGE_BASE_URL(true)}${
//               movies.poster_path
//             }`
//           })
//         })
//       } else if (/[0-9]/.test(Object.keys(action.payload).toString())) {
//         action.payload = action.payload.map((item: IMovie) => {
//           return {
//             ...item,
//             ...(item.backdrop_path !== null && {'backdrop_path':`${TMDB_IMAGE_BASE_URL()}${item.backdrop_path}`}),
//             poster_path: `${TMDB_IMAGE_BASE_URL(true)}${item.poster_path}`,
//           }
//         })
//       }

//       next(action)
//     }
//   }

export const populateYearsMiddleware: Middleware<{}, AppState> =
  () => (next) => (action) => {
    const type = action.type as string

    if (type === 'OPTIONS_SUCCESS') {
      const years: number[] = []

      const currentYear = new Date().getFullYear()

      for (let i = 1990; i <= currentYear; i++) {
        years.push(i)
      }
      action.payload.years = years

      next(action)
    } else {
      next(action)
    }
  }

export const authErrorMiddleware: Middleware<{}, AppState> =
  () => (next) => (action) => {
    const type = action.type as string

    if (type === 'AUTH_ERROR') {
      const { code, message } = action.payload
      switch (code) {
        case 'auth/popup-closed-by-user':
          break

        default:
          toast.error(message)
          break
      }
    }

    next(action)
  }
