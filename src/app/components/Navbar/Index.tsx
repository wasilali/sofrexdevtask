
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Image from "next/image";

export default  function Component() {
  return (
    <Navbar fluid rounded className="px-7 h-">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image src="/Logo.svg" width={253} height={52} className="h-6 sm:h-9" alt="Flowbite React Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className="text-bluishCyan" href="#" active>
        App
        </NavbarLink>
        <NavbarLink className="text-bluishCyan" as={Link} href="#">
        Security
        </NavbarLink>
        <NavbarLink className="text-bluishCyan" href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
