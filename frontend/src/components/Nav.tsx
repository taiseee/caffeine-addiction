import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default Nav;

function Nav() {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">TITLE</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}