import React from "react";

interface NavbarItemProps {
    label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
    return (
        <div className="text-white opacity-0 cursor-pointer hover:opacity-100 transition">
            {label}
        </div>
    )
}

export default NavbarItem;