import Genesis from '../books/Genesis.json'
import Exodus from '../books/Exodus.json'
import Leviticus from '../books/Leviticus.json'
import Numbers from '../books/Numbers.json'
import Deuteronomy from '../books/Deuteronomy.json'
import Joshua from '../books/Joshua.json'
import Judges from '../books/Judges.json'
import Ruth from '../books/Ruth.json'
import Samuel1 from '../books/1 Samuel.json'
import Samuel2 from '../books/2 Samuel.json'
import Kings1 from '../books/1 Kings.json'
import Kings2 from '../books/2 Kings.json'
import Chronicles1 from '../books/1 Chronicles.json'
import Chronicles2 from '../books/2 Chronicles.json'
import Ezra from '../books/Ezra.json'
import Nehemiah from '../books/Nehemiah.json'
import Esther from '../books/Esther.json'
import Job from '../books/Job.json'
import Psalms from '../books/Psalms.json'
import Proverbs from '../books/Proverbs.json'
import Ecclesiastes from '../books/Ecclesiastes.json'
import SongOfSongs from '../books/SongOfSongs.json'
import Isaiah from '../books/Isaiah.json'
import Jeremiah from '../books/Jeremiah.json'
import Lamentations from '../books/Lamentations.json'
import Ezekiel from '../books/Ezekiel.json'
import Daniel from '../books/Daniel.json'
import Hosea from '../books/Hosea.json'
import Joel from '../books/Joel.json'
import Amos from '../books/Amos.json'
import Obadiah from '../books/Obadiah.json'
import Jonah from '../books/Jonah.json'
import Micah from '../books/Micah.json'
import Nahum from '../books/Nahum.json'
import Habakkuk from '../books/Habakkuk.json'
import Zephaniah from '../books/Zephaniah.json'
import Haggai from '../books/Haggai.json'
import Zechariah from '../books/Zechariah.json'
import Malachi from '../books/Malachi.json'
import Matthew from '../books/Matthew.json'
import Mark from '../books/Mark.json'
import Luke from '../books/Luke.json'
import John from '../books/John.json'
import Acts from '../books/Acts.json'
import Romans from '../books/Romans.json'
import Corinthians1 from '../books/1 Corinthians.json'
import Corinthians2 from '../books/2 Corinthians.json'
import Galatians from '../books/Galatians.json'
import Ephesians from '../books/Ephesians.json'
import Philippians from '../books/Philippians.json'
import Colossians from '../books/Colossians.json'
import Thessalonians1 from '../books/1 Thessalonians.json'
import Thessalonians2 from '../books/2 Thessalonians.json'
import Timothy1 from '../books/1 Timothy.json'
import Timothy2 from '../books/2 Timothy.json'
import Titus from '../books/Titus.json'
import Philemon from '../books/Philemon.json'
import Hebrews from '../books/Hebrews.json'
import James from '../books/James.json'
import Peter1 from '../books/1 Peter.json'
import Peter2 from '../books/2 Peter.json'
import John1 from '../books/1 John.json'
import John2 from '../books/2 John.json'
import John3 from '../books/3 John.json'
import Jude from '../books/Jude.json'
import Revelation from '../books/Revelation.json'

export const bookMapper = (book: string) => {
  console.log(book)
  switch (book) {
    case 'उत्‍पत्ति':
      return Genesis
    case 'प्रस्थान':
      return Exodus
    case 'लेवी':
      return Leviticus
    case 'गन्ती':
      return Numbers
    case 'व्यवस्था':
      return Deuteronomy
    case 'यहोशू':
      return Joshua
    case 'न्यायकर्ता':
      return Judges
    case 'रूत':
      return Ruth
    case '१ शमूएल':
      return Samuel1
    case '२ शमूएल':
      return Samuel2
    case '१ राजा':
      return Kings1
    case '२ राजा':
      return Kings2
    case '१ इतिहास':
      return Chronicles1
    case '२ इतिहास':
      return Chronicles2
    case 'एज्रा':
      return Ezra
    case 'नहेम्या':
      return Nehemiah
    case 'एस्तर':
      return Esther
    case 'अय्यूब':
      return Job
    case 'भजनसंग्रह':
      return Psalms
    case 'हितोपदेश':
      return Proverbs
    case 'उपदेशक':
      return Ecclesiastes
    case 'श्रेष्‍ठगीत':
      return SongOfSongs
    case 'यशैया':
      return Isaiah
    case 'यर्मिया':
      return Jeremiah
    case 'विलाप':
      return Lamentations
    case 'इजकिएल':
      return Ezekiel
    case 'दानियल':
      return Daniel
    case 'होशे':
      return Hosea
    case 'योएल':
      return Joel
    case 'आमोस':
      return Amos
    case 'ओबदिया':
      return Obadiah
    case 'योना':
      return Jonah
    case 'मीका':
      return Micah
    case 'नहूम':
      return Nahum
    case 'हबकूक':
      return Habakkuk
    case 'सपन्या':
      return Zephaniah
    case 'हाग्गै':
      return Haggai
    case 'जकरिया':
      return Zechariah
    case 'मलाकी':
      return Malachi
    case 'मत्ती':
      return Matthew
    case 'मर्कूस':
      return Mark
    case 'लूका':
      return Luke
    case 'यूहन्ना':
      return John
    case 'प्रेरित':
      return Acts
    case 'रोमी':
      return Romans
    case '१ कोरिन्थी':
      return Corinthians1
    case '२ कोरिन्थी':
      return Corinthians2
    case 'गलाती':
      return Galatians
    case 'एफिसी':
      return Ephesians
    case 'फिलिप्पी':
      return Philippians
    case 'कलस्सी':
      return Colossians
    case '१ थिस्सलोनिकी':
      return Thessalonians1
    case '२ थिस्सलोनिकी':
      return Thessalonians2
    case '१ तिमोथी':
      return Timothy1
    case '२ तिमोथी':
      return Timothy2
    case 'तीतस':
      return Titus
    case 'फिलेमोन':
      return Philemon
    case 'हिब्रू':
      return Hebrews
    case 'याकूब':
      return James
    case '१ पत्रुस':
      return Peter1
    case '२ पत्रुस':
      return Peter2
    case '१ यूहन्ना':
      return John1
    case '२ यूहन्ना':
      return John2
    case '३ यूहन्ना':
      return John3
    case 'यहूदा':
      return Jude
    case 'प्रकाश':
      return Revelation

    default:
      return {}
  }
}
