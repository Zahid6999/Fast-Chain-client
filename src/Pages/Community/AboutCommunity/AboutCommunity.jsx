import React from "react";
import sideLoader from "../../../assets/community/side loader.svg";
const AboutCommunity = () => {
  return (
    <div className="py-[100px] ">
      <h1 className="text-3xl md:text-[40px] text-[#000420] sora font-normal leading-[52px] tracking-[-0.64px] text-center">
        What we care about <br /> Our community tenets
      </h1>

      <section className="max-w-[1110px] w-full mx-auto flex flex-col-reverse lg:flex-row gap-y-20 lg:gap-y-0 lg:gap-16 xl:gap-20 3xl:gap-[127px] mt-[100px] px-6 xl:px-0 mb-[100px]">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-[var(--dark1)] text-[27px] md:text-[34px]  font-normal sora leading-[44.2px] tracking-[-0.544px] ">
            1. Designing for All
          </h2>
          <h6 className="max-w-[450px] md:text-[21px] text-[var(--dark1)] font-medium leading-[34.8px] tracking-[-0.288px] my-[30px]">
            We believe that, to create a truly inclusive financial system, we
            must begin by serving those who need it most.
          </h6>
          <p className="max-w-[503px] text-sm md:text-[17px] text-[var(--dark1)] font-normal leading-[27.9px] tracking-[-0.216px]">
            Globally, about one in every three adults do not have a bank
            account. As a simple consequence of this, they don’t have a
            straightforward means of receiving or storing value across distance,
            and therefore are excluded from a large part of the global economy.
            They don’t have a way of establishing assets or credit history on
            which to receive loans. They can’t receive remittances without a
            large processing fee. In this context, the simple ability to store
            and transmit small quantities of money with little overhead can have
            a transformative impact.
          </p>
          <figure className="mt-[71px]">
            <img src={sideLoader} alt="Side Loader Icon" />
          </figure>
        </div>
        <figure className="flex flex-col items-center lg:items-start">
          <img
            src="https://s3-alpha-sig.figma.com/img/37b5/c834/50c425101fbd495048512a7faacbc85b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~BpxWb2bF2Hb2dT815qefTKxJIgdKoK4C~Cp8G89Iqbm88dZPifFt34w1Az4mC6klGlpOsDEEGMfUu24VnTPvf6BIllCnEJsghx-~T6kFOZTyuChYeKLeMFuCOkPIdaH3hMXb7Dw-kNz0ue8qtOMja7gmsGcsohXEdpQXU-tfoAEIXOgDIv2QUVvNTV-~TRlr-RiAfS-JLYQ2L67edyDCAS0abPWtEVU8MZHQWau4vkeiMSMntwrIXBx9QWowp~fI99-tgx1ofnYGDCCIIwW05Ywp6eKlLb1RDGtT61PqHUVrENcIsWWUwmNsWOrCu7GIiUSORZjqyq1QpZVwjZ1A__"
            alt="About Community Banner Image"
          />
        </figure>
      </section>
      <hr className="text-[#E8E8E8]" />

      {/* __________________________________ */}
      <section className="max-w-[1110px] w-full mx-auto flex flex-col lg:flex-row gap-y-20 lg:gap-y-0 lg:gap-16 xl:gap-20 3xl:gap-[127px] mt-[100px] px-6 xl:px-0 ">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-[var(--dark1)] text-3xl md:text-[40px]  font-normal sora leading-[52px] tracking-[-0.64px] ">
            Community voices
          </h2>
          <p className="text-sm md:text-[17px] text-[var(--dark1)] font-normal leading-[27.9px] tracking-[-0.216px] flex gap-3 items-center mb-[70px]">
            Read more on our blog{" "}
            <span>
              <img
                src="https://s3-alpha-sig.figma.com/img/441f/b9ba/2afe5bb7abb19b378218d4eb99863293?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c6jnmHNlYq6l~4wYREEeODxLgfGp37muAdP4FCNNZ8iBfR-JegkKImCI5GjtJtlvmNKVplnnPb9BHEs9keLmMI0nQEfArdy0977XWx38Qo5UGU2RoHP0-hLpm2bTg-GNh-XB8X3H9pShgtp7zAQm3kMVH9adKCE4JKOBsMLitb-eqZPtvzqfPKMYXRjCZN5Ym7nia~LPHz~r6l48jV-~BhqoKX5pRNNPjeniS2wUBVIBHnsx5BdybK8-FMonOjgbZ8H-fr~kgZ9BoralRFksJfmRwUW11L-wgCO9hMsHLGEQ7sWUxgdVEuElVKgLDnVT7nWOA6wCcottJoXqwznnsg__"
                alt=""
              />
            </span>
          </p>
          <h6 className="text-xl text-[var(--dark1)] font-bold leading-[30px] tracking-[1.6px]">
            Subash Chandra
          </h6>
          <h6 className="max-w-[450px] md:text-[21px] text-[var(--dark1)] font-medium leading-[34.8px] tracking-[-0.288px] mt-[30px] mb-9">
            Kuneco is Fast Chain’s monthly community call to celebrate progress
            towards Fast Chain’s mission, and strengthen the spirit of community
            “togetherness” around the world. Join us to hear the latest
            community news, see demos of the latest projects that have gone
            live, and make connections with others in the community.
          </h6>
          <p className="max-w-[503px] text-sm md:text-[17px] text-[var(--dark1)] font-normal leading-[27.9px] tracking-[-0.216px] flex gap-3 items-center border-b border-[#404252] hover:-mt-2 duration-200 ease-in-out">
            Register for the next Subash
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
        </div>
        <figure className="flex flex-col items-center lg:items-start">
          <img
            src="https://s3-alpha-sig.figma.com/img/1ba7/e36b/b9bc42e5ff8e4d06b0d1c4d6ca611136?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFc4hqbppal1jeB~npYypL2NU~gMmsC9ZBJD97sHe3NCZEIjjxPtaDWMseu-yFScmsHTJ75c~~sUGoGsx79cR04LOoyuC0p2EJIj3Guck0LmvREsLlnaZVzAenfkjcIjYkg6uQ7roxI-zaekaKw0yoPe13yusc2M2yP3Isa7E~uMPElQYiojI8~4NSI-d-s7QvknzOv1GCOWGZXTS52ff8SXPqA562tsjPCxGhSIKnz46RlqgLHm7m5DNtjurv-JWaVavRJYHc-SxJri0jz3xS5d0mQ1A15eVM-GtK3SFcEaE95EfKZ75Lc6xp5Cq-jsaj~WtT8X2yYVekV6oskbOg__"
            alt="About Community Banner Image"
          />
        </figure>
      </section>
    </div>
  );
};

export default AboutCommunity;
