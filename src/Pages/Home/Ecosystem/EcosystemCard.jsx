import React from "react";
import { Link } from "react-router-dom";

const EcosystemCard = ({ cardItem }) => {
  const { img, title, paragraph, id, button } = cardItem;

  return (
    <div className="border border-[var(--gray100)] py-10 pl-[30px] pr-[35px] hover:scale-x-105 duration-300 hover:border-2">
      <figure>
        <img
          src={img}
          alt="Card Images"
          className="hover:opacity-80 cursor-pointer"
        />
      </figure>
      <h5 className="text-[26px] text-[#000420] sora font-normal leading-[33.8px] tracking-[-0.416px] mt-[22px]">
        {title}
      </h5>
      <p className="mt-3 mb-10 text-lg font-normal leading-[27.9px] tracking-[-0.216px] text-[#404252]">
        {paragraph}
      </p>

      <Link to={`/community/:${id}`}>
        <button className="text-lg text-[#404252] font-bold leading-[27.9px] tracking-[-0.216px] flex items-center underline hover:underline-offset-2 duration-300">
          {button}

          <span className="hover:-mt-2 duration-300">
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
      </Link>
    </div>
  );
};

export default EcosystemCard;
