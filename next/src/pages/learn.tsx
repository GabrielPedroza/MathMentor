import Image from "next/image"
import React, { useState } from "react"

const learn = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-center bg-slate-100">
            <div className="relative m-3 ml-4 h-[95vh] w-[50vw] overflow-hidden rounded-md">
                <Image
                    src={
                        "https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg"
                    }
                    alt="sheesh"
                    fill={true}
                />
            </div>
            <div>
                <InteractivityArea />
            </div>
        </div>
    )
}

// [&>*:nth-child(2)]:relative [&>*:nth-child(2)]:top-[26.5rem]

function InteractivityArea() {
    const [inputText, setInputText] = useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(`User submitted: ${inputText}`)
        setInputText("")
    }

    return (
        <>
            <div className="relative w-[50vw] h-[90vh] -top-[1.75rem] border-2 border-red-500 right-3">
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex w-[45vw] items-center bg-gray-100 px-4 py-3 absolute bottom-3 right-12"
            >
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={handleInputChange}
                    className="mr-2 w-full resize-none rounded-md border border-gray-300 px-4 py-2"
                />
                <button
                    type="submit"
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                    Send
                </button>
            </form>
        </>
    )
}

export default learn
