import React, { useState, useEffect } from "react"
import register from "../apiCalls/register"
import uploadImageToS3 from "../s3/s3"
import { MAN, WOMAN, OTHER } from "../consts/sex"

const Register = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [sex, setSex] = useState<number>(MAN);
    const [personality, setPersonality] = useState<string>("");
    const [hobby, setHobby] = useState<string>("");
    const [selfIntroduction, setSelfIntroduction] = useState<string>("");
    const [lineURL, setLINEURL] = useState<string>("");
    const [imageURL, setImageURL] = useState<string>("");

    const handleSubmit = async () => {
        const data = await register({
            name: name,
            password: password,
            sex: sex,
            personality: personality,
            hobby: hobby,
            self_introduction: selfIntroduction,
            line_url: lineURL,
            image_url: imageURL,
        })
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.value) {
            case '男性':
                setSex(MAN);
                break
            case '女性':
                setSex(WOMAN);
                break
            case 'その他':
                setSex(OTHER);
                break
            default:
                window.alert("性別の入力が無効です");
        }
    }

    const handlePersonalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonality(event.target.value)
    }

    const handleHobbyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHobby(event.target.value)
    }

    const handleLINEURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLINEURL(event.target.value)
    }

    const handleSelfIntroductionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSelfIntroduction(event.target.value)
    }

    const handleImageURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        uploadImageToS3(event.target.files[0])
            .then((imageUrl) => {
                setImageURL(imageUrl);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container mx-auto px-4">
            <h1>ユーザー登録</h1>
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            {/* 氏名 */}
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    氏名
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            id="name"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            onChange={handleNameChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* パスワード */}
                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    パスワード
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="password"
                                            value={password}
                                            id="password"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* 性別 */}
                            <div className="sm:col-span-4">
                                <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900">
                                    性別
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="sex"
                                        name="sex"
                                        value={sex}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        onChange={handleSexChange}
                                    >
                                        <option>男性</option>
                                        <option>女性</option>
                                        <option>その他</option>
                                    </select>
                                </div>
                            </div>

                            {/* 性格 */}
                            <div className="sm:col-span-4">
                                <label htmlFor="personality" className="block text-sm font-medium leading-6 text-gray-900">
                                    性格
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="personality"
                                            value={personality}
                                            id="personality"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            onChange={handlePersonalityChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 趣味 */}
                            <div className="sm:col-span-4">
                                <label htmlFor="hobby" className="block text-sm font-medium leading-6 text-gray-900">
                                    趣味
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="hobby"
                                            value={hobby}
                                            id="hobby"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            onChange={handleHobbyChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* LINEのURL */}
                            <div className="sm:col-span-4">
                                <label htmlFor="lineURL" className="block text-sm font-medium leading-6 text-gray-900">
                                    LINEのURL
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="lineURL"
                                            value={lineURL}
                                            id="lineURL"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            onChange={handleLINEURLChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 自己紹介 */}
                            <div className="col-span-full">
                                <label htmlFor="self_introduction" className="block text-sm font-medium leading-6 text-gray-900">
                                    自己紹介
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="self_introduction"
                                        name="self_introduction"
                                        value={selfIntroduction}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleSelfIntroductionChange}
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                            </div>

                            {/* 画像 */}
                            <div className="col-span-full">
                                <label htmlFor="imageURL" className="block text-sm font-medium leading-6 text-gray-900">
                                    画像
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="imageURL"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                        <span>Upload a file</span>
                                            <input id="imageURL" name="imageURL" type="file" className="sr-only"
                                                onChange={handleImageURLChange}/>
                                        </label>
                                        {/* <p className="pl-1">or drag and drop</p> */}
                                    </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        登録
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;