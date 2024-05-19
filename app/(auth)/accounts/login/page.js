"use client";

import useForm from "@/hooks/useForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [formState, handleInputChange, handleSubmit] = useForm(
    {
      username: "",
      password: "",
    },
    "/api/auth/login"
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center h-[727px]">
        <div className="mb-11 w-full max-w-[350px]">
          <div className="mt-2 border border-gray-200 p-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-[51px] w-[175px]">
                <Image
                  priority
                  src="/navbar/instagram.svg"
                  height={51}
                  width={175}
                  alt="Instagram"
                  className="h-full"
                />
              </div>

              <div className="w-full space-y-1">
                <input
                  className="w-full border border-gray-200 focus:border-gray-400 focus:ring-gray-400 rounded-sm px-2 py-1 text-xs"
                  placeholder="Phone number, username, or email"
                  name="username"
                  value={formState.username}
                  onChange={handleInputChange}
                />
                <input
                  className="w-full border border-gray-200 focus:border-gray-400 focus:ring-gray-400 rounded-sm px-2 py-1 text-xs"
                  placeholder="Password"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
              </div>

              <button className="px-4 py-2 text-sm bg-[rgb(0_149_246)] text-white rounded-lg w-full">
                Log In
              </button>

              <div>OR</div>

              <button className="px-4 py-2 text-md bg-white text-[rgb(56_81_133)] rounded-lg w-full">
                Log in with Facebook
              </button>

              <Link href="#" className="text-xs text-[rgb(0_55_107)]">
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="mt-2 border border-gray-200 p-4 text-center text-sm">
            {`Don't have an account? `}
            <Link href="/accounts/signup" className="text-[rgb(0_149_246)]">
              Sign up
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="text-center text-sm my-[10px]">Get the app.</div>

            <div className="flex space-x-2 justify-center my-[10px]">
              <Image
                src="/accounts/apple.png"
                height={40}
                width={136}
                alt="Apple"
              />
              <Image
                src="/accounts/android.png"
                height={40}
                width={136}
                alt="Android"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
