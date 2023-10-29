import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";

const Home = () => {
    const location = useLocation();
    const [users, setUsers] = useState([]);
    const pathname = location.pathname;
    const user_id = pathname.split('/')[2];

    useEffect(() => {
        fetch(`http://localhost:8000/api/recommendation/${user_id}`)
            .then(res => res.json())
            .then(data => setUsers(data.data))
    }, [user_id]);

    console.log(users);

    return (
        <div className="flex">
            <div className="mx-auto w-3/4">
                {users.map((user: any) => (
                    <Card key={user.user_id} className="mt-2">
                        <CardBody>
                            {user.image_url ? (
                                <Image
                                    width="100%"
                                    height="100%"
                                    src={user.image_url}
                                    alt="user_image"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-400"></div>
                            )}
                        </CardBody>
                        <CardFooter>
                            <div className="flex flex-col">
                                <p className="text-3xl font-bold">{user.user_name}</p>
                                <p className="text-xl">趣味:{user.user_hobby}</p>
                                <p className="text-xl">性格:{user.user_personality}</p>
                                <p className="text-xl">自己紹介:{user.self_introduction}</p>
                                {/* <Link href={user.line_url} showAnchorIcon color="success" className="text-xl">Line</Link> */}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;