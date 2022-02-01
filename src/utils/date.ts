export const getYear = (date: string) => {
  const formattedDate = new Date(date)
  return formattedDate.getFullYear().toString()
}
