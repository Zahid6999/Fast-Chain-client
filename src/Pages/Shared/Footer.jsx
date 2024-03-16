import React from "react";
import logo from "../../assets/bank/logo (16).png";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full max-w-[80rem] pt-[100px] pb-[50px] px-4 sm:px-6 lg:px-8 3xl:px-0 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between mb-[69px] gap-y-16 ">
        <div className="  lg:col-span-1  max-w-[258px]">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <p className="mt-8 text-xs sm:text-sm text-[#404252] leading-[25.6px] font-normal">
            59 Bervely Hill Ave, Brooklyn Town,
            <br /> New York, NY 5630, CA, US
          </p>
          <p className="mt-3 text-xs sm:text-sm text-[#404252] leading-[25.6px] font-normal">
            +056 686 56 56 98 info@fastChain.com
          </p>
          <address className="flex gap-3 mt-10">
            <PiFacebookLogo className="w-[30px] h-[30px] cursor-pointer hover:text-[var(--primary)] ease-in-out" />
            <PiTwitterLogo className="w-[30px] h-[30px] cursor-pointer hover:text-[var(--primary)] ease-in-out" />
            <IoLogoInstagram className="w-[30px] h-[30px] cursor-pointer hover:text-[var(--primary)] ease-in-out" />
            <PiLinkedinLogo className="w-[30px] h-[30px] cursor-pointer hover:text-[var(--primary)] ease-in-out" />
            <FiYoutube className="w-[30px] h-[30px] cursor-pointer hover:text-[var(--primary)] ease-in-out" />
          </address>
          <div className="mt-6 flex gap-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/8de7/b565/028528cb382048227faf74233c7650a5?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OnSKBravs5Id6n0a8QXpi24urG5dAuyO~jyXjCUALgVLuhMbbKEf642aX8qXagLW2iQZ1cr3PrHpvM2QLAGK5j4Uh4f4SNES6PWT7xKWKYMM04csvTwEkYNCF-305avgufaIZjDKIRAEX9GNO1ATK7vHQrRONzgun7-WPRe1fA7~c4Iwh7cZhoPW7ReuTvzdl3lG54LU1Jh1lsHnMkvmhPykpiLqvV81A2XFn7g94XXnIGg3dk0-Nl3Bt1Jm-dKo4bgNlEGiqhH4ylpmOzefMl~0yStmlACg9XQliJwcG5M~aSB2cIqMpEJv65sn31Jcmz9b3xUIL2bHqilneeoRwQ__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/9803/fd41/9d8529bf83a74effa388f388d41913dd?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlBLvy8pZX9iqxXWy4lR46zHZ7UppcyPFeuEkbmHDZx-NzjRY5z2teGG8fZLPcWVxX-Myc7RnAPWgQPUdclbUAmBScXO8NX8QHf75sC1oVOKuO8DWlHco1IghzaPw~KgfqBB3xuwLFw118S74NQ0bPR0EDTIKXoVzsUGnU69m01WspuSgy7tWWw28ukw5GNu-HwJcUQmRKNpIwUS2krq6xOibsvplWpgmuxZkMKLVppgOXyhihQQ6U37j2R9GajKOAR4QHAiEs6cBRtcrZb6kmSKxWQfsy0pTqS53bF4y1EEoqynWRup~vT3ZetO~dsY5rf9qTpO3c~vUctBIgSNBw__"
              alt=""
            />
          </div>
        </div>
        {/* <!-- End Col --> */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[50px]">
          <div>
            <h4 className="text-lg font-medium text-[#000420] leading-[18px]">
              Fast Chain
            </h4>

            <div className="mt-3 grid space-y-3 text-sm text-[#404252]">
              <p>
                <a className="inline-flex gap-x-2 hover:text-gray-800" href="#">
                  Home
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  About
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-[#404252] hover:text-gray-800 "
                  href="#"
                >
                  Career
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-[#404252] hover:text-gray-800"
                  href="#"
                >
                  Validators
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-[#404252] hover:text-gray-800"
                  href="#"
                >
                  Community
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Annual Report
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="text-[#404252]">
            <h4 className="text-lg font-medium text-[#000420] leading-[18px]">
              Technology
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800 "
                  href="#"
                >
                  Docs
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Security Audits
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Reserve
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  White Papers
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Government
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="text-[#404252]">
            <h4 className="text-lg font-medium text-[#000420] leading-[18px]">
              Resources
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800 "
                  href="#"
                >
                  Brand Policy
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Press
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Event
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  EventKit
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  BrandKit
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  MerchantKit
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="text-[#404252]">
            <h4 className="text-lg font-medium text-[#000420] leading-[18px]">
              Network
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800 "
                  href="#"
                >
                  Keycard
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Assemble
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Embark
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Subspace
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Vac
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2  hover:text-gray-800"
                  href="#"
                >
                  Nimbus
                </a>
              </p>
            </div>
          </div>
          {/* <!-- End Col --> */}
        </section>
      </div>
      {/* <!-- End Grid --> */}

      <div className=" border-t border-gray-200 dark:border-gray-700">
        <div className="sm:flex sm:justify-center sm:items-center mt-[50px]">
          <p>© fastChain2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
