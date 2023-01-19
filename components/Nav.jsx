import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Nav() {
  const [user, loading] = useAuthState(auth);
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href={"/"} className="font-bold text-2xl">
        Logo
      </Link>
      <ul>
        {!user && (
          <Link href={"/auth/login"}>
            <div className="py-2 px-4 text-lg bg-teal-500 max-w-fit text-white font-bold rounded-lg">
              Join Now
            </div>
          </Link>
        )}
        {user && (
          <div>
            <Link href={"/dashboard"}>
              <img
                referrerPolicy=" no-referrer"
                className="rounded-full w-12"
                src={user.photoURL}
                alt="avatar"
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
