"use client";

import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import router, { useRouter } from "next/router";

const ProfileButton = () => {
    const Router = useRouter();
    return (
        <UserButton>
            <UserButton.MenuItems>
                <UserButton.Action 
                label = "see orders"
                labelIcon = {<ShoppingBag className="w-4 h-4"/>}
                onClick={()=>router.push("/orders")}
                />


            </UserButton.MenuItems>
        </UserButton>
    );
};