import React from "react";
import line from "../../../assets/community/Line.png";

const ProjectArea = () => {
  return (
    <div className="max-w-[1170px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-20 mt-[120px] mb-[150px] px-7 md:px-10 xl:px-0">
      <section className="max-w-[511px] mx-auto lg:mx-0">
        <h1 className="text-3xl md:text-[40px] text-[var(--dark1)] sora font-normal leading-[52px] tracking-[-0.64px] ">
          Fast Chain Ecosystem Venture Fund
        </h1>
        <p className="text-lg text-[#404252] font-normal leading-[31px] tracking-[0.24px] max-w-[470px] mt-5 mb-[50px]">
          On December 15th, the community voted to add cREAL to Fast Chain’s
          growing family of platform-native stablecoins. Named for the
          currencies they algorithmically follow, cREAL now joins cUSD and cEUR
          as the third stable asset built by and for the communities they serve.
        </p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-[78px]">
          <address>
            <p className="text-base text-[#404252] font-normal leading-[24.8px] tracking-[-0.192px] mb-4">
              General Partner
            </p>
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/39cf/2258/7212c756c4b5997642409d2d604bd315?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=anRlTH~DTxB4p-PxvGJZ4WakeqC1~wJWWxHtWhd84QtnjDiTjdroIU6igljbI4Vhro0RYFiCIZrIabGrSZD1hVdqfNYT85A-6iE8VF2ceZp3lN~ZPwy5pWKTGJ~0w3LKBo23ahImGJ6c9CIn4nOh5L88vRw-0zwsxc3Zo6MT3VXLBwuF3CnQ6QcCh~JnBGPL~usMlVFvXhT5mnN-VPvaGF5y2jFurtavOeFrYnbNglAV-1KbDonkFeqqKUqQEVszxyHtCjpU717e~0H4X79pR7MMAEbngQHuyBYP3NrNrsZIP2xUS2mUiC9R7u-x2K9qY7C200KyeeDH7rdVhSe6~w__"
                alt=""
              />
            </figure>
          </address>
          <address>
            <p className="text-base text-[#404252] font-normal leading-[24.8px] tracking-[-0.192px] mb-4">
              Limited Partners
            </p>
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/34f3/1af3/64e194a41ff369a29c8e042a70a50f2f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QQCpdt9kLw2EZlgXHV11y19aW57vSrs6stvFBJnWWxpM9EfRgs5bJVkYaBnABMSVzvVgmsvh1SkJE4-TpIDMnYYPikzFg5ZRDokfVgczJHdwDwCYrnqV7tTBwNx5mTD7rgXFgbEKuW4ZrChZ5H3R-ZgPucw0YjiCCypLXRGtkzvfOzTsTnWLGITWIalA1wcDkS3vZEyuA~~uTXX~IW~3o0s4yUnWnafuLMUa6Dprwa2AUvcjr450n2elFSzVCGAe93LZt9tBZw5mNwTOLHS1b5rPKH2cjEECW6UBhyV6r0zPoix5d1HRaHWDZWQEUlIK19tRQgZyJjdms0iUYHQfuQ__"
                alt=""
              />
            </figure>
          </address>
        </div>
        <p className="text-sm md:text-[17px] text-[var(--dark1)] font-normal leading-[27.9px] tracking-[-0.216px] inline-flex gap-3 items-center border-b border-[#404252]  mt-10">
          Learn about building on Fast Chain{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 15L15 5"
                stroke="#404252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.875 5H15V13.125"
                stroke="#404252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </p>
      </section>

      {/* ++++++++++++++++++++++++++++++++++__________________ */}
      <section className="bg-[#F6F6F6] max-w-full lg:max-w-[589px] ">
        <nav
          class="relative  flex  items-center  overflow-hidden "
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            class="hs-tab-active:border-b-[#008DA0] hs-tab-active:text-[#008DA0]  relative min-w-0 flex-1 bg-[#F6F6F6]   border-b-2 mt-[30px] pb-[14px] px-4  text-lg font-medium leading-[27.9px] tracking-[-0.216px] sora text-center overflow-hidden  active"
            id="bar-with-underline-item-1"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            Apply for Funding
          </button>
          <figure>
            <img src={line} alt="Line Shape" />
          </figure>
          <button
            type="button"
            class="hs-tab-active:border-b-[#008DA0] hs-tab-active:text-[#008DA0]  relative min-w-0 flex-1 bg-[#F6F6F6]  border-b-2 mt-[30px] pb-[14px] px-4 sora text-[#404252] hover:text-gray-700 text-lg font-normal leading-[27.9px] tracking-[-0.216px] sora text-center overflow-hidden hover:bg-gray-50 "
            id="bar-with-underline-item-3"
            data-hs-tab="#bar-with-underline-3"
            aria-controls="bar-with-underline-3"
            role="tab"
          >
            Recommend a Project
          </button>
        </nav>

        <div class="mt-3 p-10">
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            {/* Input Field 1 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Organization Name
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 2 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Organization URL
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 3 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Tell us about your organization in a sentence
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 4 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                What does your organization do?
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 5 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Founder email filling out application
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 6 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Cofounder emails (if relevant)
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>

            <button
              type="button"
              class="py-[18px] px-5 w-[200px] inline-flex justify-center items-center gap-x-2 text-lg font-normal  leading-[23.4px] tracking-[-0.288px] rounded-lg border border-transparent bg-[#008DA0] text-white hover:bg-[#42a6b3] "
            >
              Apply
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 15L15 5"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.875 5H15V13.125"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            id="bar-with-underline-3"
            class="hidden"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-3"
          >
            {/* Input Field 1 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Site Name
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 2 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Website URL
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 3 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                Tell us about Your Self
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>
            {/* Input Field 4 */}
            <div className="mb-5">
              <label
                for="hs-leading-icon"
                class="block text-lg text-[var(--text-dark1)] font-normal   leading-[27.9px] tracking-[-0.216px] mb-[9px]"
              >
                your organization
              </label>
              <div class="">
                <input
                  type="text"
                  id="hs-leading-icon"
                  name="hs-leading-icon"
                  class="py-3 px-4 ps-11 block w-full border border-[var(-gray100)]  h-[60px] rounded-lg text-[17px] font-normal sora focus:outline-none focus:ring focus:ring-[var(--gray100)]"
                  placeholder=""
                />
              </div>
            </div>

            <button
              type="button"
              class="py-[18px] px-5 w-[200px] inline-flex justify-center items-center gap-x-2 text-lg font-normal  leading-[23.4px] tracking-[-0.288px] rounded-lg border border-transparent bg-[#008DA0] text-white hover:bg-[#42a6b3] "
            >
              Apply
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 15L15 5"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.875 5H15V13.125"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectArea;
