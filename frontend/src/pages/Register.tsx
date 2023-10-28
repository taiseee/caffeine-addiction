export default Register;

function Register() {
    return (
        <div className="container mx-auto px-4">
            <h1>ユーザー登録</h1>
            <form>
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
                                            id="name"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                                            id="personality"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                                            id="hobby"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
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