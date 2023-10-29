import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Image } from "@nextui-org/react";

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

    return (
        <div className="flex">
            <div className="mx-auto w-3/4">
                {users.map((user: any) => (
                    <Card key={user.user_id} className="mt-2">
                        <CardHeader>
                            <Image
                                width="100%"
                                height="100%"
                                src={user.image_url}
                                alt="user_image"
                            />
                        </CardHeader>
                        <CardBody>
                            <h1>{user.user_name}</h1>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;