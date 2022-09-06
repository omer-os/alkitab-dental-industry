import { ButtonBase } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function CardContainer({ subjects }) {
  return (
    <>
      {/* <div className="card-container pl-11  scroll-pr-10 flex mt-5 overflow-x-scroll gap-5 snap-x rounded-xl overflow-hidden">
        {subjects.map((sub, index) => (
          <Link key={sub.slug + index} href={`/subjects/${sub.slug}`}>
            <a>
              <ButtonBase className="rounded-xl text-left">
                <div className="min-w-[19em] snap-center flex text-sm h-[15em] rounded-xl p-4 text-white relative overflow-hidden items-end">
                  <div className="absolute inset-0 rounded-xl">
                    <img
                      src={sub.img}
                      className="h-[99.9%] z-10 w-full rounded-xl object-cover"
                    />
                    <div className="z-20 h-full w-full absolute bottom-0 left-0 bg-gradient-to-t from-black/80" />
                  </div>
                  <div className="absolute bg-gradient-to-tr from-pink-500 py-1 px-1.5 to-pink-400 top-2 right-2 text-xs rounded-full">
                    {sub.files} files
                  </div>
                  <div className="bottom-funcs z-30">
                    <div className="text-xl font-bold capitalize">
                      {sub.title}
                    </div>
                    <div className="text-sm line-clamp-2">{sub.subtitle} </div>
                  </div>
                </div>
              </ButtonBase>
            </a>
          </Link>
        ))}
      </div> */}

      <div className="flex mt-3 z-10 flex-col gap-3">
        {subjects.map((sub, index) => (
          <Link key={sub.slug + index} href={sub.link}>
            <a>
              <ButtonBase className="rounded-xl text-left">
                <div className="min-w-[19em] snap-center flex text-sm h-[15em] rounded-xl p-4 text-white relative overflow-hidden items-end">
                  <div className="absolute inset-0 rounded-xl">
                    <img
                      src={sub.img}
                      className="h-[99.9%] z-10 w-full rounded-xl object-cover"
                    />
                    <div className="z-20 h-full w-full absolute bottom-0 left-0 bg-gradient-to-t from-black/80" />
                  </div>
                  <div className="absolute bg-gradient-to-tr from-pink-500 py-1 px-1.5 to-pink-400 top-2 right-2 text-xs rounded-full">
                    {sub.files} files
                  </div>
                  <div className="bottom-funcs z-30">
                    <div className="text-xl font-bold capitalize">
                      {sub.title}
                    </div>
                    <div className="text-sm line-clamp-2">{sub.subtitle} </div>
                  </div>
                </div>
              </ButtonBase>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
