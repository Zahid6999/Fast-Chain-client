import React from "react";
import patten1 from "../../../assets/community/pattern (1).png";
import patten2 from "../../../assets/community/pattern (2).png";
import patten3 from "../../../assets/community/pattern (3).png";
const CommunityBanner = () => {
  return (
    <div className="headerBg px-7 sm:px-10 md:px-0 pt-[105px] pb-[205px] relative">
      <section className="">
        <h1 className="text-4xl md:text-[60px] sora lg:leading-[62.2px] lg:tracking-[-0.72px] text-white flex items-center gap-x-2 flex-wrap justify-center">
          Community for{" "}
          <span className="text-[var(--primary)] md:after:content-plusShape flex items-center gap-x-6 ">
            Developer
          </span>
        </h1>

        <article className="flex justify-center md:-translate-x-20 ">
          <figure className="translate-x-28 translate-y-3 hidden md:block animate-pulse">
            <img
              src="https://s3-alpha-sig.figma.com/img/2dea/9049/b3ed386f2644b790de4d6a2c2d191fba?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YeGJRswqo4d8BJ-MYWwdOdXx2QDHjFu8zsAnftkERMgFgKz7WlxckTcdpyVK0OabnHxYDWtL2i0-6lqKG7FfChsLQSlbgdeeqmCbIMMobKTfUVARJvBkr-hfuXt1poWr3RzzfZZUZY2otXU4dilDN128pW19Bhvisv3aPyO-QJnSTuq4Dbg0yP18UKOJzNJqX8t-D3C6Mw6nyxix7NYK-KiLgxYNJ9aaEe8FwBrHhXMrkidXGU8-KJyo2DiV2ZxPMMWgc0GBHK5opPGGlJWU0-al4JO--g6arc7blw6-7eYpi94Z~5X1mcC6dk5MxPlA9wwnxzjns4UcNc4~II6M1w__"
              alt=""
            />
          </figure>
          <p className="md:max-w-[633px] text-center   md:text-2xl text-[#DEDEDE] font-normal leading-[31.2px] tracking-[]">
            There are two twin truths around which we orient our values and
            culture: that each person has a unique purpose, and that everyone is
            connected.{" "}
          </p>
          <figure className="lg:translate-y-20 -translate-x-14 hidden md:block">
            <img src={patten1} alt="" />
          </figure>
        </article>
        <button
          type="button"
          className="py-[18px] px-[22px] flex justify-center mx-auto md:-translate-x-10 mt-10 lg:-mt-16  items-center gap-x-1 text-lg leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md border border-[#008DA0] text-[var(--primary)] hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out "
        >
          Read the docs
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
        <figure className="absolute top-0 md:top-20">
          <img src={patten2} alt="Patten Svg shape" />
        </figure>
        <figure className="absolute bottom-4 md:bottom-20 right-0">
          <img src={patten3} alt="Patten Svg shape" />
        </figure>
      </section>
    </div>
  );
};

export default CommunityBanner;
