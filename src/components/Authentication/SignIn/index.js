import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";

export default function SignInIndex() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${!load && "LoadingAnimation"}`}>
      <div className="flex flex-col justify-center items-center m-0 p-0 box-border">
        <div className="max-w-[1280px] w-[100%] ss:px-4 md:px-0 flex justify-center items-center m-auto">
          <div className="w-[100%] h-fit">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
