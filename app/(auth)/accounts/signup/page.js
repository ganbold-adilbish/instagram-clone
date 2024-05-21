"use client";

import useForm from "@/hooks/useForm";
import Image from "next/image";
import Link from "next/link";

const inputFields = [
  {
    name: "email",
    type: "text",
    label: "Mobile Number or Email",
  },
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
  },
  {
    name: "username",
    type: "text",
    label: "Username",
  },
  {
    name: "password",
    type: "password",
    label: "Password",
  },
];

export default function SignUp() {
  const [formState, handleInputChange, handleSubmit] = useForm(
    {
      email: "",
      username: "",
      fullName: "",
      password: "",
    },
    "/api/auth/signup"
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center">
        <div className="mt-3 mb-11 w-full max-w-[350px]">
          <div className="border border-gray-200 py-[10px] px-10">
            <div className="flex flex-col items-center mb-5">
              <div className="h-[51px] w-[175px] mt-9 mb-3">
                <Image
                  priority
                  src="/navbar/instagram.svg"
                  height={51}
                  width={175}
                  alt="Instagram"
                  className="h-full"
                />
              </div>

              <h2 className="mb-[10px] text-neutral-500 font-semibold text-center text-base/5">
                Sign up to see photos and videos from your friends.
              </h2>

              <button className="my-2 px-4 py-[7px] text-sm font-semibold bg-[rgb(0_149_246)] text-white rounded-lg w-full">
                Log in with Facebook
              </button>

              <div className="flex w-full mt-[10px] mb-[18px]">
                <div className="top-[0.45em] h-px relative shrink grow bg-[rgb(219_219_219)]"></div>
                <div className="uppercase mx-[18px] shrink-0 grow-0 relative font-semibold text-neutral-500 text-[13px]/[1.1538]">
                  or
                </div>
                <div className="top-[0.45em] h-px relative shrink grow bg-[rgb(219_219_219)]"></div>
              </div>

              <div className="w-full">
                {inputFields.map(({ name, type, label }) => (
                  <div key={name} className="mb-[6px]">
                    <label className="relative flex flex-[1_0_0] text-[100%] h-9">
                      <span
                        className={`text-neutral-500 text-xs/9 h-9 left-2 right-0 m-0 p-0 overflow-hidden text-ellipsis absolute transform origin-left ease-out duration-100 ${
                          formState[name] &&
                          "-translate-y-[10px] scale-[calc(10/12)]"
                        }`}
                      >
                        {label}
                      </span>
                      <input
                        className={`w-full rounded-[3px] px-2 text-left flex-[1_0_auto] border border-[rgb(219_219_219)] focus:border-[rgb(168_168_168)] focus:outline-none ${
                          formState[name]
                            ? "pt-[14px] pb-[2px] text-xs"
                            : "pt-[9px] pb-[7px] text-base"
                        }`}
                        autoCapitalize="off"
                        autoCorrect="off"
                        name={name}
                        type={type}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                ))}
              </div>

              <p className="my-[10px] text-neutral-500 text-xs text-center font-normal">
                <span>
                  {
                    "People who use our service may have uploaded your contact information to Instagram. "
                  }
                  <Link
                    href="https://www.facebook.com/help/instagram/261704639352628"
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="text-[rgb(56_88_152)]"
                  >
                    Learn More
                  </Link>
                </span>

                <br />
                <br />

                {"By signing up, you agree to our "}
                <Link
                  href="https://help.instagram.com/581066165581870/?locale=en_US"
                  target="_blank"
                  className="text-[rgb(56_88_152)]"
                >
                  Terms
                </Link>
                {" , "}
                <Link
                  href="https://www.facebook.com/privacy/policy"
                  rel="nofollow noreferrer"
                  target="_blank"
                  className="text-[rgb(56_88_152)]"
                >
                  Privacy Policy
                </Link>
                {" and "}
                <Link
                  href="https://www.instagram.com/legal/cookies/"
                  target="_blank"
                  className="text-[rgb(56_88_152)]"
                >
                  Cookies Policy
                </Link>
                {" ."}
              </p>

              <button
                className="my-2 px-4 py-[7px] text-sm bg-[rgb(0_149_246)] text-white rounded-lg w-full"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="mt-2 border border-gray-200 p-4 text-center text-sm">
            {"Have an account? "}
            <Link
              href="/accounts/signup"
              className="text-[rgb(0_149_246)] font-semibold"
            >
              Log in
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
