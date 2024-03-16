import React from "react";
import heroBg from "../../../assets/hero-dot-bg.png";
import SideLoader from "../../../assets/side loader.svg";
const Banner = () => {
  return (
    <div className="headerBg text-white">
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
        }}
      >
        <section className=" 3xl:max-w-[1255px] w-full mx-auto px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 flex flex-col lg:flex-row 3xl:gap-[68px] items-center lg:items-start  lg:justify-between pt-[57px]">
          <div className="mt-[75px] 2xl:pl-7">
            <h1 className="text-5xl md:text-[60px] sora md:leading-[62.2px] md:tracking-[-0.72px] mb-6">
              Let’s change the{" "}
              <span className="text-[var(--primary)]">world</span>
            </h1>
            <p className="text-2xl md:text-[26px] text-[var(--gray100)] font-light md:leading-[39px] md:tracking-[-0.48px] mb-[50px]">
              Status is a secure messaging app, crypto <br /> wallet, and Web3
              browser built with state of <br /> the art technology.
            </p>
            <button
              type="button"
              className="py-[18px] px-[22px] inline-flex items-center gap-x-1 text-lg leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md border border-[#008DA0] text-[var(--primary)] hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out"
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
            <p className="mt-[90px]">
              <img src={SideLoader} alt="" />
            </p>
            <div className="flex items-center relative">
              <h2 className="text-[34px] text-[var(--gray100)] sora leading-[44.2px] tracking-[-0.408px] mt-[218px] mb-[125px]">
                We are
                <span className="text-[var(--primary)]"> Fast Chain</span>
                <br />
                the blockchain company
              </h2>
              <span className="after:content-arrowShape absolute left-28 sm:left-[310px] bottom-24 sm:bottom-[83px] animate-pulse"></span>
            </div>
          </div>
          <figure>
            <img
              src="https://s3-alpha-sig.figma.com/img/6f94/72bd/aa516e5636ef297f635459248493f384?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoW4cSX5bMbxh0AQfJeSTL6G9oTAYLcvEJikxiLDsew-WCzMgIqqO2aTat7xGx5UkU03UYHvVUGLd~IjTzW78EsA0sMCB2kDMeRKC~xJ~rOhJ4kLBLdpR-o3ZuciKnGDpLjogT8boPXWwUkvhvtd-iNTIEc3X5dc9J7XLUy4rDEMkYNMptp23nRHXq3yxWRPHRuXGdW3qUfw2dk8bgDTuJkTu1ElmKBWyiHfPAGPoVKWwkxrg2y~MZztwf6vDseA9HQJFHpww6lGh8HsKTHfQ43uz41e17~Tl16VkCqrJ0sWLwM63bSIqPM1Sz-kKOUiVHDhFMsS6LVL5wDs~vzB3w__"
              alt=""
              className="animate-pulse"
            />
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Banner;
