import React from "react";
import logo1 from "../../../assets/bank/logo (10).png";
import logo2 from "../../../assets/bank/logo (11).png";
import logo3 from "../../../assets/bank/logo (12).png";
import logo4 from "../../../assets/bank/logo (13).png";
import logo5 from "../../../assets/bank/logo (14).png";
import logo6 from "../../../assets/bank/logo (15).png";

// TwoCards----------------array of object
const twoCards = [
  {
    icon: "https://s3-alpha-sig.figma.com/img/467a/465c/84e3368bf701b44d4df1f01a6e6a4b49?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUr45O~A8p0csquxF88krvps0vvxNc~qa0wPhpYM6bn2uwScy79n73nW54FEKP~pxY2p~vvf3Ps6AQPsvrmYZQ-iURUZH6SE8ZLAqMRcdkVYWeRsFwllaHyHqomEciUEsHNFHF4Ls2J6cMKzSdVNPB6H988qRhGtn6-HqJHdUFHmdyAx1KKah601-SpVs1sG1PQMvH3YtkbSB8DCLwTos8SXFmLpZBI3jWSU2kyFRmIGv3cy6wovsUNOl8kz1-DHRzvhJ74fD2uL3f14Njsy0e9~GWo2h9wap9tZZd6M3QDcEU1UP5hiusRmAAcBLoOpqM20hNtG8yLBgGIdxe0zew__",
    text: "Boost security, and earn rewards as you explore.",
    button: "Apply for pre-seed funding",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/691b/66e7/fe414d3df76486aa542118c9cb3e4dfa?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xvk4qSo5u5k1J6uYDKXger2V4FmfT62TUaDnUbsKtAT3amwhlR4qzY6iKtMRZXvBp6pzxju515f5zL-HmtKt~s6-mclbFzMqVe01XL6H6ejMH-~WMNBeltVrHelFSpa03IQVDDcTs-ECjd9t5Tq6XjJSkDW4jb-j0sau5vm-1e2WKHAD7ifHh52FEVEwGiqFZDRZODo~PP38qJVanJkpSbvWUhM3UXMBZJQcPSrkFgJnZp4hJXM93QP~cfTZpd5L7Nh6iS5NkepRwsFtm5Sjs4JrwqO2Mtq6UoNX9lDnB4EmKMZ6vL3rFJr3SOVlnQtwMhaUu-cqISOhgTO51KK7Sw__",
    text: "Boost security, and earn rewards as you explore.",
    button: "Apply for venture funding",
  },
];

// Array of object---------------
const items = [
  {
    title: "7.7b",
    text: "People on Earth",
    border: "border-r",
    padding: "pr-[69px]",
  },
  {
    title: "6b",
    text: "Mobile Phones",
    border: "border-r",
    padding: "pr-[69px]",
  },
  {
    title: "2b",
    text: "Desktop",
    border: "border-r",
    padding: "pr-[69px]",
  },
  {
    title: "1",
    text: "Mobile-first Blockchain",
  },
];

// Company Logo_______________________________array
const companyLogos = [
  {
    logo: logo1,
  },
  {
    logo: logo2,
  },
  {
    logo: logo3,
  },
];

const companyLogos2 = [
  {
    logo: logo4,
  },
  {
    logo: logo5,
  },
  {
    logo: logo6,
  },
];

const GrowthSection = () => {
  return (
    <div className="bg-[#000307] pt-[110px] pb-[110px] px-7 lg:px-0">
      <h3 className="text-[40px] text-white text-center font-normal leading-[52px] tracking-[-0.64px] sora pb-[60px]">
        Ready to scale? Let's jumpstart <br /> your growth.
      </h3>
      <article className="max-w-[941px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {twoCards?.map((card, i) => (
          <figure
            key={i}
            className="border border-[#0dd0bd33] hover:border-[#43757137] rounded-md px-8 lg:px-[78px] pt-[65px] pb-10"
          >
            <img src={card?.icon} alt=" Icon" />
            <p className="text-[var(--gray100)] mt-[26px] mb-[58px] duration-100">
              {card?.text}
            </p>
            <button className="py-[18px] px-[22px] inline-flex items-center gap-x-1 text-xs md:text-[17px] leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md border border-[#008DA0] text-[var(--primary)] hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out">
              <span>{card?.button}</span>
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
          </figure>
        ))}
      </article>

      <h3 className="text-[40px] text-white text-center font-normal leading-[52px] tracking-[-0.64px] sora pb-[60px] pt-[107px]">
        Building for everyone
      </h3>

      <section className="max-w-[1073px] px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 3xl:px-0 border border-[#0dd0bd80] flex flex-col lg:flex-row gap-y-14 justify-around rounded-md py-12 mx-auto">
        {items?.map((item, i) => (
          <div
            className={`lg:${item.border} ${item.padding} border-[#0dd0bd33] px-[60px]`}
            key={i}
          >
            <h5 className="text-[40px] text-center textGradient sora font-semibold leading-[50px] tracking-[-1px]">
              {item.title}
            </h5>
            <p className="text-lg text-[var(--gray100)] text-center font-medium leading-[29.7px] tracking-[-0.072px] mt-2 ">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <div className="text-center mt-[107px]">
        <figure className="flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/6afb/9e8b/f5e2f184d90539983d610daeac258e59?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M54TqKGmLfF5sk0SSv2XjHNQenl1RXeBsMtr0mrTyqM7Wi6aR9zsj0crK-6bwpdwQWLpw0zVXS-zND9vtTkCSiCQTmkltWT-skUkXmwWsenXF7G8Z2-cl93z64rhxhyoRg36wiemd5g0u~VANRG33mghu45TPyNhm5zAWf~8HKExLjtCCWU1aVqbtAJapkpu2Q8osbpebxGYZSq7-BR0gBiWIDAMmnjyWEz7DpGlF4DsQaWVqApsyM1lhF0lqeK6otLDccunIZ~2lCf3W5wYHi-mGrSOe4EIHh4MEm3WSLsBZPT4T2RvXSj1QfsF0AuGd0~U5hXkk-f53y19mn60Aw__"
            alt=""
          />
        </figure>
        <p className="text-xl text-center font-normal leading-[31px] tracking-[-0.24px] text-[var(--gray100)] pt-[21px] pb-[30px]">
          By 2025, Fast Chain will make DeFi accessible to <br /> 1 billion
          people around the world.
        </p>
        <button className="py-[18px] px-[22px] inline-flex items-center gap-x-1 text-xs md:text-[17px] leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md border border-[#008DA0] text-[var(--primary)] hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out">
          <span>Join The Movement</span>
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

      <section className="lg:max-w-[1073px] w-full px-4 sm:px-10 md:px-0 3xl:px-0 py-4 md:py-0 border border-[#0dd0bd80] flex flex-col  lg:flex-row gap-y-14 gap-x-[60px] rounded-md mt-[60px] mx-auto">
        <figure>
          <img
            src="https://s3-alpha-sig.figma.com/img/8237/d062/f00e9baf5f78b94c9f7e667237bf1d2a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KzuncfuqmOu5eKpD7F0YWvuFqCb480tymt9KHN3DO536YFNNkjaBbfXH7y8OCsPOJrganMd6qIdiORqD9ZozOTTB8wC4YYyJEQlaIjS9UnHSY0kGpOnyFK-hohSR8NTVFILwoQ3AiuGKiVpwFimArmq9ufdR6MDBzP2lyP6twRYZn9y00k-ZpQWnc5TvNXtYWssZxLwmzaTjsF77gWcoE8jC1rqXiLydyI8xdmtgcEomnOQVic0VJJ6K-9f2JpdysjJUUFFEhw5piEFsB77fvoXImI0vIv9c3hEyORYC5wGqGvrZU6wmsyDI-H8oKt0bwVHyBJfWs~icKE~bVfB2Bg__"
            alt=""
          />
        </figure>
        <aside className="max-w-[481px] lg:pt-[75px]">
          <h4 className="text-[34px] sora font-normal leading-[44.2px] tracking-[-0.544px] text-[#fff] mb-3">
            Mobile first Light AI for <br /> everyone.
          </h4>
          <figure className="grid grid-cols-3 gap-x-[62px] items-center">
            {companyLogos?.map((logo, i) => (
              <img key={i} src={logo.logo} alt="Company Logo" />
            ))}
          </figure>
          <figure className="grid grid-cols-3 gap-x-[40px] items-center mt-4">
            {companyLogos2?.map((logo, i) => (
              <img key={i} src={logo.logo} alt="Company Logo" />
            ))}
          </figure>
        </aside>
      </section>
    </div>
  );
};

export default GrowthSection;
