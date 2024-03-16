import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, img, paragraph, button } = card;
  return (
    <div className="">
      <figure>
        <img
          src={img}
          alt="Card Images"
          className="hover:opacity-80 cursor-pointer"
        />
      </figure>
      <p className="my-6 text-xl font-medium leading-[31px] tracking-[-0.24px] text-[#333]">
        {paragraph}
      </p>

      <Link to={`/community/:${id}`}>
        <button className="text-lg text-[var(--primary)] font-bold leading-[27.9px] tracking-[-0.216px] flex items-center hover:underline hover:underline-offset-2 duration-300">
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

export default Card;
