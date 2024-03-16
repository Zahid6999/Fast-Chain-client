import React from "react";
import bgImg from "../../../assets/hero-dot-bg.png";

const LatestUpdate = () => {
  return (
    <div className="bg-[#000307] py-[100px] mt-[100px]">
      <section
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/420a/bbd7/e72557703a044e2100633a7b3e9ef7ea?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGIdTgK9tNX-ABvw491faPjBzbDbifi2nvCPZxeLe-y0l7ewOj4vIfuYc0V5pDdXqV8-afpmFT-UCXkJecZMrcDI2giG-mjamtfoFeICluKoWza42EmsrXh5J4XiUmdUL7x-JLlSzL2BbGOXN2zxbzzUAUqXJ90ZColq1xiB0Lbmhc82jzNjw2FVHbRuIKiVIXsgnw8gFKk-AHFTyoapaIYeZ9o8QrG5h~-zqLNwx3ftXzExKKpKUxsUOGA-bqC69Tpn7KgLwFgy72GirQpP3nuaKhoKPaNmaNEk5AjO8Tb0Jfox79RJwrmZpWikyvfOXIgGPgN~1vzsdHwAPfSgBQ__)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex  justify-center "
      >
        <aside>
          <h4 className=" text-3xl sm:text-[40px] text-white text-center font-normal leading-[52px] tracking-[-0.64px] sora pb-[60px]">
            Receive the latest updates <br /> to your inbox
          </h4>

          <div className="px-7">
            <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                className=" px-4 py-[15px]  block text-[#404252] sm:w-[350px] bg-[#F9FDFF] border-transparent rounded-[4px] text-lg font-normal leading-[28.8px]  "
                placeholder="Enter your Email"
              />
              <button
                type="button"
                className="py-[18px] px-[22px] inline-flex items-center gap-x-1 text-lg leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md bg-[#008DA0] text-white hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-400 ease-in-out"
              >
                Learn more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </aside>
        <figure className="translate-y-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/ad48/6df7/845db4aac6733f99554e464f3a15c651?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tjr9A1flsNZfWwcQiw~fpCnUF96rDdYL18pZwQfHfJsZALh1obV-J7qwWJkeJ1Q7wOTY~k4dWQ47yetp-NCyJyRhFSHK3iKqBpmKaZNrh77mAPVen41J15Ylwo0Su9jKPiZa0s8mJQO3qKA5MAItqcBPyhTNms0AMR-xSTJEys-qh9d65GfwbQLpkKaQHILWXOxOZaUcU-93ikSXu41kdJCagH5r1r4bRPRGiEvJjlm36n-i5wQ~4QO4hQpIzIFcFTM~hYs0hdVoW2xWOAHJf6DT7yPe98COYnlmrA6~5XQU6hmvjLPvNJ0YuzxvKfdoN7-ha17qr6U45xS-O539~Q__"
            alt=""
          />
        </figure>
      </section>
    </div>
  );
};

export default LatestUpdate;
