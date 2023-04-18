import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import React from "react";
import { useRouter } from 'next/router';

interface AccountMenuProps {
    visible?: boolean;
}


const AccountMenu: React.FC<AccountMenuProps> = ({
    visible
}) => {
const { data } = useCurrentUser();
const router = useRouter();
    if (!visible){
        return null;
    }
//"bg-white w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex"

return (
    <div className="flex flex-col gap-3 bg-white w-56 absolute top-14 right-0 py-5 border-2 border-gray-800">
      <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
        <img className="w-8 rounded-md" src="/images/f26d21.png" alt="" />
        <p className="text-black text-sm group-hover/item:underline">
          {data?.name}
        </p>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div onClick={() => router.push('/profiles')} className="px-3 text-center text-black text-sm hover:underline">
        Switch Profile
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div onClick={() => signOut()} className="px-3 text-center text-black text-sm hover:underline">
        Sign Out
      </div>
    </div>
  );
}

export default AccountMenu;