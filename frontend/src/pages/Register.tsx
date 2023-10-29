import React, { useState, useEffect } from "react"
import register from "../apiCalls/register"
import uploadImageToS3 from "../s3/s3"
import { MAN, WOMAN, OTHER } from "../consts/sex"
import {Input} from "@nextui-org/react";
import {Select, SelectItem, Textarea, Button} from "@nextui-org/react";

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

    const sexList = [
        {label: "男性", value: MAN},
        {label: "女性", value: WOMAN},
        {label: "その他", value: OTHER}
    ]

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        switch (event.target.value) {
            case MAN.toString():
                setSex(MAN);
                break
            case WOMAN.toString():
                setSex(WOMAN);
                break
            case OTHER.toString():
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

    const handleSelfIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        label="名前"
                                        name="name"
                                        value={name}
                                        id="name"
                                        onChange={handleNameChange}
                                        isRequired
                                    />
                                </div>
                            </div>

                            {/* パスワード */}
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        label="パスワード"
                                        name="password"
                                        value={password}
                                        id="password"
                                        onChange={handlePasswordChange}
                                        isRequired
                                    />
                                </div>
                            </div>

                            {/* 性別 */}
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                <Select
                                    label="性別"
                                    name="sex"
                                    id="sex"
                                    className="max-w-xs"
                                    onChange={handleSexChange}
                                    isRequired
                                >
                                    {sexList.map((sex) => (
                                    <SelectItem key={sex.value} value={sex.value}>
                                        {sex.label}
                                    </SelectItem>
                                    ))}
                                </Select>
                                </div>
                            </div>

                            {/* 性格 */}
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        label="性格"
                                        name="personality"
                                        value={personality}
                                        id="personality"
                                        onChange={handlePersonalityChange}
                                        isRequired
                                    />
                                </div>
                            </div>

                            {/* 趣味 */}
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        label="趣味"
                                        name="hobby"
                                        value={hobby}
                                        id="hobby"
                                        onChange={handleHobbyChange}
                                        isRequired
                                    />
                                </div>
                            </div>

                            {/* LINEのURL */}
                            <div className="sm:col-span-4">
                                <div className="mt-2">
                                    <Input
                                        type="text"
                                        label="LINEのURL"
                                        name="line_url"
                                        value={lineURL}
                                        id="line_url"
                                        onChange={handleLINEURLChange}
                                        isRequired
                                    />
                                </div>
                            </div>

                            {/* 自己紹介 */}
                            <div className="col-span-full">
                                <div className="mt-2">
                                    <Textarea
                                        label="自己紹介"
                                        name="self_introduction"
                                        value={selfIntroduction}
                                        id="self_introduction"
                                        onChange={handleSelfIntroductionChange}
                                        isRequired
                                    />
                                </div>
                            </div>

                            {/* 画像 */}
                            <div className="col-span-full">
                                <label htmlFor="imageURL" className="block text-sm font-medium leading-6 text-gray-900">
                                    プロフィール写真
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="imageURL"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
                                            >
                                            <span>Upload a file</span>
                                                <input
                                                    id="imageURL"
                                                    name="imageURL"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleImageURLChange}
                                                    accept="image/png, image/jpeg"
                                                    required
                                                />
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

                <div className="mt-6 flex gap-x-6 justify-end">
                    <Button color="primary" variant="flat" type="submit">
                        登録
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Register;