import { useEffect, useState } from "react"
import BibleNavbar from "../components/ui/bibleNavbar"
import { bibleBooks } from "../expressions/bibleBooks"
import { bookMapper } from "../mapper/bookMapper"

const BibleScreen = (): JSX.Element => {
    const [book, setBook] = useState<string>(bibleBooks[0]?.name)
    const [chapter, setChapter] = useState<number>(1)
    const [data, setData] = useState({})

    useEffect(() => {
        setData(bookMapper(book))
        setChapter(1)
    }, [book])

    return (
        <div className="container mx-auto h-screen flex flex-col overflow-y-hidden">
            <div className="mt-8 mx-5 flex flex-col flex-1">
                <BibleNavbar book={book} setBook={setBook} chapter={chapter} setChapter={setChapter} />
                <div className="mt-8 flex flex-col">
                    <div className="text-2xl text-center mb-4 font-bold">{book} {chapter}</div>
                    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)]">
                        <div className="mt-4 space-x-2 w-full mb-10 max-w-[650px] leading-[40px] mx-auto">

                            {data && Object.values(data)?.length > 0 && Object.entries(data?.[chapter]).map((el: any) => (
                                <div key={el[0]} className="inline items-baseline">
                                    {el[1]?.title && <div className="text-[24px] font-[600] text-center my-2">{el[1]?.title}</div>}

                                    <span><sup className="font-[700] text-[14px]">{el[0]}</sup></span>
                                    <span className="text-[20px] whitespace-pre-line font-[400] ml-2">{el[1].text}</span>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BibleScreen
