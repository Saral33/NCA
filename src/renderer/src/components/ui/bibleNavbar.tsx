import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { bibleBooks } from "../../expressions/bibleBooks"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/renderer/src/components/ui/select'

interface IProps {
    book: string
    setBook: (book: string) => void
    chapter: number
    setChapter: (chapter: number) => void
}
const BibleNavbar = ({ book, setBook, chapter, setChapter }: IProps): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col ">
            <div className="flex items-center gap-2">
                <ChevronLeft onClick={() => navigate(-1)} className="cursor-pointer " size={38} />
            </div>
            <div className="flex mt-5 items-center gap-2">
                <Select value={book} onValueChange={(value) => setBook(value)}>
                    <SelectTrigger >
                        <SelectValue placeholder="Select Book" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {bibleBooks.map((book) => (
                                <SelectItem key={book.name} value={book.name}>
                                    {book.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select value={chapter.toString()} onValueChange={(value) => setChapter(Number(value))}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Chapter" />
                    </SelectTrigger>
                    <SelectContent>
                        {Array.from({ length: bibleBooks.find((b) => b.name === book)?.chapters || 0 }, (_, i) => (
                            <SelectItem key={i} value={(i + 1).toString()}>
                                {i + 1}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value="NNRV">
                    <SelectTrigger>
                        <SelectValue placeholder="Select Version" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="NNRV">NNRV</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default BibleNavbar