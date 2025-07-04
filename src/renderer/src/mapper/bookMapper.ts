import Genesis from '../books/Genesis.json'
import Exodus from '../books/Exodus.json'

export const bookMapper = (book: string) => {
  console.log(book)
  switch (book) {
    case 'उत्‍पत्ति':
      return Genesis
    case 'प्रस्थान':
      return Exodus
    default:
      return {}
  }
}
