import React from "react";
import dashboard from "../../../assets/community/deshboard.png";
import plusShape from "../../../assets/community/pattern.png";
import pattern from "../../../assets/community/pattern (4).png";

const EventArea = () => {
  return (
    <div className="headerBg pt-[120px] ">
      <h2 className="text-3xl md:text-[40px] text-white sora font-normal leading-[52px] tracking-[-0.64px] text-center">
        Community Events
      </h2>
      <section className=" flex justify-center mt-[60px] px-7 md:px-10 lg:px-0">
        <div className="relative inline-block ">
          <figure className="">
            <img src={dashboard} alt="" />
          </figure>
          <figure className="absolute -top-[17px] right-0 3xl:-right-10 hidden lg:block">
            <img src={pattern} alt="" />
          </figure>
          <figure className="absolute -bottom-7 -left-8 hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/a79a/be01/9cc9b2833df6f8272ac9e3fc8a4b1cb2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UqblAVc0CR0gqMAe2Mxl34CaPDLqSjSHIEuOYCoAJ-ngLrN5Wma3AwogZeXN2HB5G-qSdysz~UsSFrLBEduIR-hjI4oRO3-5CwsZ1D3AgAKdAGcr6Tq0YClI7znPi3xHTQNLHHjbic9Y0ut6oaRQDrCqh-cJnIgxln52nIBj48kC0OQQAhZ2v0zbNQPRrafPcnPjA3-dBudN5B6E3uF9U5wBUG~aRy4WudQTV55b1xlu5cT5kvohlxZRJkz8vEq-BaqJQsACDtncAB48-Iu1emMzq~t13hwIE0Wn1cxx63tcthJIiCC0EXvGgwNN32miCvK9Y6WB1rNzaPM0715RjA__"
              alt=""
            />
          </figure>
        </div>
      </section>

      <section className="pt-[151px] pb-[200px] px-6 md:px-9 lg:px-0">
        <figure className="flex justify-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/9cd5/dd15/ece317afea9283ea603cf03cf908be43?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcmwQeZRM~luDgNZwoKtQ-gBulVkMfJULDSb~EB~PYTyJw5xJhkj9Z1X0jU-sKxg83u5aun2J3UbFGedYcJed~EilnvSrZRiRbwIt2F8UFwj-hRnutGaroQi~mJW2q0dV3h1OU3QZWxrca1QJB3I9foxZWynL9VZvJyE7qdbAA59ZlX5q8k7fZcmth6bTMIvh8utrUv2uWzr2igNHQBxG1mJqZZoQd2wqJMAL8WRbVfAzdS29h9~AGg-FMiFwS6fdzclFFzG-Yfla6ztaMCl8xO1FHdQBVAg7RhTO8Ohr~TJI-75bNytLb~xyEVm-O2YOi8PYSTGtyb~fcobLUVbrA__"
            alt=""
          />
        </figure>
        <h4 className="max-w-[750px] text-[28px] md:text-[40px] text-white sora font-normal leading-[52px] tracking-[-0.64px] text-center mx-auto">
          <span className="">
            <span className="flex justify-center items-baseline gap-x-2 ml-12">
              Have an idea for the Fast Chain{" "}
              <img src={plusShape} alt="" className="hidden md:block" />
            </span>{" "}
            ecosystem? Apply to the Fast Chain Ecosystem Fund.
          </span>
        </h4>

        <p className="text-lg font-normal text-[var(--primary)] leading-[27.9px] tracking-[-0.216px] underline underline-offset-4 flex justify-center pt-5 text-center items-center gap-[6px]">
          Call for Proposals
          <span>
            <img
              src="https://s3-alpha-sig.figma.com/img/968e/32f4/7b37a1c18e25b01579a4ab6565c449f1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=couQ6Cs4KPum3SJhCrLxxxWWnMhGcb3-L9Yl-rexmbKsra6E9fivdRQjaLHE1NS7AtKP2~-Kr4nRlcvi4HnUnnzHjklN-UQ-X0eWR3EZdxm1axi0Kw6700YtpRutLapYQAyj7ZXvfrE-fMcVg497xDJiHALNYyFq3fFyXxweLcOgUe1QfVtGKBzP2pAg3Ajcs3~MOg8M6xOmMOTyR4oNVSzPSQdJZ0xmBRJpm9AO0QtPUG0G49gBvsPZb5BVNo2mF8DXDdcifo-nurEoJq8JNez9GA8biQxepv0SZtVUCYLF64Vqi8-aSa5lYZqqc7CZkzaGYTCdFgL1AedJOrdspg__"
              alt=""
            />
          </span>
        </p>
      </section>
    </div>
  );
};

export default EventArea;

// className="after:content-plusShape flex items-baseline gap-x-2  first-line:pl-20"
