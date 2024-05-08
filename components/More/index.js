"use client";

import { useCallback, useState } from "react";
import NavbarItem from "../NavbarItem";

const moreItem = {
  id: 1,
  title: "More",
  name: "more",
};

export default function More() {
  const [clicked, setClicked] = useState(false);
  const toggle = useCallback(() => {
    setClicked((clicked) => !clicked);
  }, []);

  return (
    <div className="relative">
      <NavbarItem {...moreItem} onClick={toggle} clicked={clicked} />
      {clicked && (
        <div className="absolute bottom-16 flex flex-col z-10 w-64 bg-white border rounded">
          <a className="p-3 py-2 border-b" href="#">
            Settings
          </a>
          <a className="p-3 py-2 border-b" href="#">
            Your activity
          </a>
          <a className="p-3 py-2 border-b" href="#">
            Saved
          </a>
          <a className="p-3 py-2 border-b" href="#">
            Switch appearance
          </a>
          <a className="p-3 py-2 border-b" href="#">
            Report a problem
          </a>
          <a className="p-3 py-2 border-b" href="#">
            Switch accounts
          </a>
          <a className="p-3 py-2" href="#">
            Log out
          </a>
        </div>
      )}
    </div>
  );
}
