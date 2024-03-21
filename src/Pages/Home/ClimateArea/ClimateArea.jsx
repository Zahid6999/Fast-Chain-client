import React from "react";
import pointLine from "../../../assets/point line.svg";

const ClimateArea = () => {
  return (
    <div className="headerBg py-[100px]">
      <article className="3xl:max-w-[1202px] w-full mx-auto px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 flex flex-col items-center 3xl:items-start">
        <h2 className="text-[40px] text-white font-normal leading-[52px] tracking-[-0.64px] sora ">
          Building for climate change
        </h2>
        <p className="mt-5  mb-10 text-xl font-normal leading-[31px] tracking-[-0.24px] text-[var(--gray100)]">
          Creating the world's first carbon-neutral blockchain <br /> was just
          the beginning
        </p>
        <section className="flex flex-col lg:flex-row justify-center 3xl:justify-normal lg:gap-20 3xl:gap-[120px]">
          <figure>
            <img
              src="https://s3-alpha-sig.figma.com/img/3e67/f02f/3c6725fa5e229a577cee3f949b52e7b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=murDkmm0PNJJ4K88hCmebG4tqONF2pg9zO2ZBvJDhWCtyWoNc61BaVMVRCPO-yk31bARptFmhIJuYAUcPnYzi9VSeeOlSVP0aTMcoQkwCjTIotkF-H9P6S3TxXHJ-gq6KCDKWh27Gnt2R4dDC4r07oXJDutNxp4771MmfcI6VG4slZz6WIlPlHRtPwu5Ev1piXMew53ow06EZiSfxc4cy5tdA7OJRQYrBUfJb22aa0MQA91nDp9AchmkVD5nFLiGm-302-yhJMrnSr3JCoi1vkQtX80R~viQ9tBfbs9pIEPypkchn18b~eJt9SUdFkC5Q1ly6sF0fKrjBvPMxh1y0g__"
              alt=""
              className="max-w-[460px]"
            />
          </figure>
          <div className="flex gap-[4%] sm:gap-[51px] mt-20 lg:mt-0">
            <figure>
              <img
                src={pointLine}
                alt="Point Line"
                className="animate-pulse  "
              />
            </figure>
            <section>
              <figcaption>
                <h3 className="text-xl text-white font-semibold sora leading-[26px] tracking-[-0.24px]">
                  Sept - Oct 2021
                </h3>
                <p className="max-w-[445px] pt-4 pb-3 text-[var(--gray100)] text-base font-normal leading-[24.8px] tracking-[-0.192px]">
                  Smart contracts for a smarter reserve World, meet Fast Chain,
                  the world’s first carbon neutral layer-1 with a climate-change
                  objective native to its design, currencies, and reserve.
                </p>
                <button className="text-[var(--primary)] flex items-center hover:underline ">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 "
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
              <figcaption className="mt-[30px]">
                <h3 className="text-xl text-white font-semibold sora leading-[26px] tracking-[-0.24px]">
                  Nov - Dec 2021
                </h3>
                <p className="max-w-[445px] pt-4 pb-3 text-[var(--gray100)] text-base font-normal leading-[24.8px] tracking-[-0.192px]">
                  Smart contracts for a smarter reserve World, meet Fast Chain,
                  the world’s first carbon neutral layer-1 with a climate-change
                  objective native to its design, currencies, and reserve.
                </p>
                <button className="text-[var(--primary)] flex items-center hover:underline ">
                  Learn more{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 "
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
              <figcaption className="mt-[30px]">
                <h3 className="text-xl text-white font-semibold sora leading-[26px] tracking-[-0.24px]">
                  Jan - Mar 2022
                </h3>
                <p className="max-w-[445px] pt-4 pb-3 text-[var(--gray100)] text-base font-normal leading-[24.8px] tracking-[-0.192px]">
                  Smart contracts for a smarter reserve World, meet Fast Chain,
                  the world’s first carbon neutral layer-1 with a climate-{" "}
                  <span className="lowOpacity">
                    change objective native to its design, currencies, and
                    reserve.
                  </span>
                </p>
              </figcaption>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
};

export default ClimateArea;
