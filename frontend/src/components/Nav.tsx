import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default Nav;

function Nav() {
    const navigate = useNavigate();
    return (
        <Navbar>
            <NavbarBrand onClick={() => navigate("/")} style={{cursor: "pointer"}}>
                <p className="font-bold text-inherit">ともレコ</p>
            </NavbarBrand>
            {/* <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent> */}
        </Navbar>
    );
}