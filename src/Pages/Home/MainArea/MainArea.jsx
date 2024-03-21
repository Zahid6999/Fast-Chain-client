import React from "react";
import bank from "../../../assets/bank/logo.png";
import bank1 from "../../../assets/bank/logo (1).png";
import bank2 from "../../../assets/bank/logo (2).png";
import bank3 from "../../../assets/bank/logo (3).png";
import bank4 from "../../../assets/bank/logo (4).png";
import bank5 from "../../../assets/bank/logo (5).png";
import bank6 from "../../../assets/bank/logo (6).png";
import bank7 from "../../../assets/bank/logo (7).png";
import bank8 from "../../../assets/bank/logo (8).png";
import bank9 from "../../../assets/bank/logo (9).png";

const MainArea = () => {
  return (
    <>
      <section className="3xl:max-w-[1202px] w-full mx-auto px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 flex flex-col justify-center items-center 3xl:items-start py-[118px]">
        <div className="flex flex-col lg:flex-row gap-x-10 xl:gap-x-[210px] gap-y-24 items-center">
          <article>
            <h3 className="text-[40px] text-[#000420] font-normal leading-[52px] tracking-[-0.64px] sora ">
              Let's introduce fastChain <br /> real (cFAST)
            </h3>
            <p className="mt-5 max-w-[486px] mb-10 text-xl font-normal leading-[31px] tracking-[-0.24px] text-[#404252]">
              On December 15th, the community voted to add cREAL to Fast Chain’s
              growing family of platform-native stablecoins. Named for the
              currencies they algorithmically follow, cREAL now joins cUSD and
              cEUR as the third stable asset built by and for the communities
              they serve.
            </p>
            <button className="py-[18px] px-[22px] w-[164px] flex items-center gap-x-1 text-lg leading-[23.4px] tracking-[-0.288px] font-semibold rounded-[4px]  bg-[#008DA0] text-white hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out">
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
          </article>
          <figure>
            <img
              src="https://s3-alpha-sig.figma.com/img/9140/5d33/c95978ac23e8303e0a7f66216307e496?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4Xsca00wNz9AkKG-atwZTFO~ogdzMBGjQOEibh0U8rlXGVSFS9w~KfsR-Cf~vBFACzAUAVHHL5kBsOSvWwYAdHKeMj0CsbVqneCV9giOH0La21v6d6o8n65XThEIBGdv7s5lQzmkmmNyxFUW1QJrlmuv1mbwpqH~~MW4GdQg66oxLNP4IwWftTxk5JJRwkxhFUbVmZURVuycK2dXLgTdJ59fgnNOKHk0YuHKjDXr6GH36-tFm2L~n~Sl9GqIXQ-rx3XkVvJ3--1FejasDinR50jGUAjV9OFaHPLaY3GhCXODe56exeT8ArKIEtQlfGWNgJSAQyxhkov3~1lDvlLlg__"
              alt=""
              className=""
            />
          </figure>
        </div>
      </section>

      <hr className="border[#E8E8E8]" />
      {/* Bank section */}
      <section className="3xl:max-w-[1202px] w-full mx-auto px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 flex flex-col justify-center items-center 3xl:items-start py-20">
        <article>
          <h3 className="text-[40px] text-[#000420] font-normal leading-[52px] tracking-[-0.64px] sora ">
            Comence a user seu (cFAST)
          </h3>
          <p className="mt-4 max-w-[486px] mb-10 text-xl font-normal leading-[31px] tracking-[-0.24px] text-[#404252]">
            Creating the world's first carbon-neutral blockchain was just the
            beginning
          </p>
        </article>
        <div className="flex flex-col lg:flex-row gap-x-[30px] gap-y-16 items-center ">
          <figure className="bg-[#E7EEFA] py-10 pl-[30px] max-w-[570px] border border-[#E1E4F0] rounded-md">
            <h3 className="text-[26px] text-[#404252] font-normal leading-[33.8px] tracking-[-0.416px]">
              Local and Regional Exchanges
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <img src={bank} alt="Bank Image" />
              <img src={bank1} alt="Bank Image" />
              <img src={bank2} alt="Bank Image" />
              <img src={bank3} alt="Bank Image" />
              <img src={bank4} alt="Bank Image" />
            </div>
          </figure>

          <figure className="bg-[#DFE9ED] py-10 pl-[30px] max-w-[570px] border border-[#E1E4F0] rounded-md">
            <h3 className="text-[26px] text-[#404252] font-normal leading-[33.8px] tracking-[-0.416px]">
              Compatible Wallets
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <img src={bank5} alt="Bank Image" />
              <img src={bank6} alt="Bank Image" />
              <img src={bank7} alt="Bank Image" />
              <img src={bank8} alt="Bank Image" />
              <img src={bank9} alt="Bank Image" />
            </div>
          </figure>
        </div>
      </section>

      <hr className="border[#E8E8E8]" />

      <section className="py-[100px]">
        <h3 className="text-3xl md:text-[40px] text-[#090D2E] text-center font-normal leading-[52px] tracking-[-0.64px] sora ">
          <span className="font-semibold">cFAST</span> is also available on the{" "}
          <span className="font-semibold">Fast Chain</span> <br /> Apps you know
          and love
        </h3>
        <figure className="flex justify-center mt-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/6e4d/6244/7652330b8f0be2ed4cef8daf11bf3ccb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G8uGWXkNNsAJbNpQuVlnZHR28f2lPxrUOcdIcuIC5Bkj4IFJZvPpqwMLoJhj2szSSRc1fgLGgEQ~ejj~7dQ-9Fl63RpnCdTJxPxfzqF7hmpocCcaKx6BdmEynoOI2volZeDIUdShX2gEgFU6yg9QaBzWusKvcScE~Np5lGozPpfEBAIoRqO26YNom0nv-UkOcE8kLFeNPBFCuvOYophA1QmLVlMwrJBMwc5TCfUWQbc9NakY5qdYX5nk5Z4ITqIyaeyTeYr7MeGMGiNcYTZRV7~DnyqaF5BnIj8bn2J6u0oz9MNRERFy6DLiYsJG51hR7B16yYJMViNDmGdzYto0Pg__"
            alt=""
          />
        </figure>
      </section>
    </>
  );
};

export default MainArea;
