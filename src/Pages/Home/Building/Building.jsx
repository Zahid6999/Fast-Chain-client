import React from "react";
import img1 from "../../../assets/bank/Image.png";

const Building = () => {
  return (
    <div className="3xl:max-w-[1201px] w-full mx-auto mt-[120px] px-8 flex flex-col items-center 3xl:items-start  3xl:px-0">
      <h3 className="text-[40px] text-[#000420]  sora font-normal leading-[52px] tracking-[-0.64px]">
        Building for prosperity <br />
        <span className="text-[#008DA0]">for everyone</span>
      </h3>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-10 ">
        <div>
          <figure>
            <img
              src="https://s3-alpha-sig.figma.com/img/5b8f/189a/978c2b5ed0ec2db0de904c5c2b575650?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RQkeLu6V9G1uoRsCLei7PUHiKqzyvPEpBOkmqrp453R4ETmkY5U6vQJfOfGLoVyttka22t0e~w4iNb6~0wgtGSir9NKuO23mHaTcC2GkU-JT25q882hIUTXE6ub0y6FZL0gkplrN-gdFOhnPgbmdJH0gc-wPduZ6o8DXh1637WhcOb2ztX~ufUQMTUnQmI-bsXi5Y00TG5U2Opmt9iC3P~HSp7BoIj727Yk5lnKCLQhdZEE3q6BYWDaV7zmaHKQUmwJ2~SQ2eL1JTyPjt~mta79q5Bfjc1fc1Xdeba~nKbwlRnvMZX~4PlNgKt8nC0K~DOEC89sKcrN6WX-mP-GcFg__"
              alt="Team"
            />
          </figure>
          <figcaption className="max-w-[670px] p-[30px] border border-[var(--gray100)] rounded-b-md">
            <p className="text-[#404252] text-2xl font-normal sora leading-[31.2px] tracking-[-0.384px] md:pr-[42px] mb-4">
              Since the launch of mainnet on Earth Day 2020, the ecosystem we
              call Fast Chain has become so more than a technology
            </p>
            <button className="text-lg text-[#008DA0] font-bold leading-[27.9px] tracking-[-0.216px] flex items-center underline hover:underline-offset-2 duration-300">
              Learn more
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
          </figcaption>
        </div>

        <div>
          <section className="3xl:max-w-[470px]  border border-[var(--gray100)] flex gap-6 rounded-md">
            <figure>
              <img
                src="https://s3-alpha-sig.figma.com/img/9ac8/65ee/11620e3cf7069a9272e70215038b3b19?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5TkaqePP~YZNf-b~Yq4d1Hf8IUJvwRWtx9jIaquZ5y6Ff8awPSVFvPrqGqXRA4r6TTTCq53ut5ndMAet0cN~Ziea2ShvSW7l5etdoVEobekkr7k886EbXc4uER4I0vS-w6KhBMXUvduo3r-1EsSHqK6ToEfWMeFkc7-fFNX6oe7YHGZtrBrfac5HkCEQr0BKVGZjIHS-irUyRP7JNlwrcrShovB0B~eo2ulmUq3VCXcwqao~8giyZBenei0vjoP6ClDv7lj7bwgGwDfoRNrrRvQA8eiGEnJQF6pL~h8BQz37~H~fFAKgarIYrvlP-TZ529sSDku5ciAMasjGM3Rng__"
                alt="Team"
              />
            </figure>
            <figcaption className="py-5">
              <p className="text-[#404252] text-[22px] font-normal sora leading-[31.9px] 3xl:max-w-[215px] tracking-[-0.384px] mb-[45px]">
                Distributing global aid with Valora and the Grameen Foundation
              </p>
              <button className="text-lg text-[#008DA0] font-bold leading-[27.9px] tracking-[-0.216px] flex items-center underline hover:underline-offset-2 duration-300">
                Learn more
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
            </figcaption>
          </section>

          <section className="3xl:max-w-[470px]  border border-[var(--gray100)] flex gap-6 rounded-md mt-[30px]">
            <figure>
              <img src={img1} alt="Team" className="object-cover" />
            </figure>
            <figcaption className="py-5">
              <p className="text-[#404252] text-[22px] font-normal sora leading-[31.9px] 3xl:max-w-[215px] tracking-[-0.384px] mb-[45px]">
                Creating income opportunities with Mercy Corps
              </p>
              <button className="text-lg text-[#008DA0] font-bold leading-[27.9px] tracking-[-0.216px] flex items-center underline hover:underline-offset-2 duration-300">
                Learn more
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
            </figcaption>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Building;
