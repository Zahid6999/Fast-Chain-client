import React from "react";
import Marquee from "react-fast-marquee";

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
import EcosystemCard from "./EcosystemCard";

const items = [
  {
    icon: bank,
  },
  {
    icon: bank1,
  },
  {
    icon: bank3,
  },
  {
    icon: bank4,
  },
  {
    icon: bank5,
  },
  {
    icon: bank6,
  },
  {
    icon: bank7,
  },
  {
    icon: bank8,
  },
  {
    icon: bank9,
  },
];

// Card Items
const cardItems = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/b989/c672/84dccc77280b2235f39b5f6bae111212?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VlpXKtGXhYFDPDLTitxWD~HZqRZPAaQ4AfIi5QMjVR7sI-wv25pQxyKBSgxGjQO1w7TmbxEvX7tH58ZSnirGVtsHI3r0gecLt5RcQC0bz0u~79nbga3DP-k9vMOE8UZx2ejFZpWnuZbP-bs8bo6YpoHflAuX8j~Ev4kB32VQF7aoN9agr4yJqe8ZgkGRLRdy7K8ZVelNDbFEGdQ9hnji360jSZYTZXEf5ED6LH9wB68Pz1yQPB1cJhytvkquTR993pz3slIe7ttbWg8uDsr9uC68~VzmcroiZB0V-BvC7ml0~aXyjTuW06yshje5MDBXd7g76nUMkbP73Xws0IRT3g__",
    title: "Get to know Fast Chain",
    button: "Learn more",
    paragraph:
      "Devs can find bugs, boost security, and earn rewards as you explore Fast Chain through year-round bounties.",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/fc63/c114/f72a6869dec79424e1322a311f085efb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqTsiwi6vcHUfCj0d6UkIYNGWtE6NuIVKvDgl--QpvtGRJdpNRvEbMQ6ZGIV7KxhprD-SkIzTbayb8OiVfa0BOKQxGLMcR98JCbTVusBTABL4315JI3Qev6i-IsqD1LGucaB80G5ATy3ga1T-YULCiyegLcuQme6qAVtQwslue3joBMS3LrVe76kASeX1JwJ5ZNIXQNscrBhIF6zYk-mn3AlvCg9o6CYuTC9XFZ2A3Q79rusIKJ7PQmJBb3EoM-evkNeRk9~FWid938XnV9vT6l0fjGYdMAnHivA3UJPp1A~2oGQ~c-V3rsBS3cDaOzumPu6HJyEd35EHg0gcN33lQ__",
    title: "Get to know Fast Chain",
    button: "Learn more",
    paragraph:
      "Devs can find bugs, boost security, and earn rewards as you explore Fast Chain through year-round bounties.",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/55ae/83b4/256cc5e1435aad04c934c439fcedba23?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPN5A4PNvI8wjxsT9nBAwfMum761ptRWaQAL8JFI3DsfTy9lA2hf4VGJ9uSXhI96Z5EWPdwDVCylunxa2oCmDic0HD-WNRpKwyWSb~OGjP3MMpFLAfYQdcwn6yiGO3AJ0a0A1ThIRFV~WZ2Abyr3wYXDean0zDiCGAF0leFn1OVxvQK5DxtR1Ldz-MwaOdYyV-6zCa5rwo1EYGOHqodc2OuebS6dAni29NunF70aLTf4z7~DkcjPg~mbi6vvLk56JisKV4E2pBaxDixvzTucadWS8c1Cs5oTez-j0KfZClsbaDq53qomrVbIeHjp8eXz59Idvd9~s9Xs~MUQ1vgJPg__",
    title: "Learn from experts",
    button: "Learn more",
    paragraph:
      "Devs can find bugs, boost security, and earn rewards as you explore Fast Chain through year-round bounties.",
  },
];

const Ecosystem = () => {
  return (
    <div className="mt-[100px] mb-[225px]">
      <h3 className="text-[40px] text-[#090D2E] text-center font-normal leading-[52px] tracking-[-0.64px] sora pb-[60px]">
        Meet the Ecosystem
      </h3>
      <Marquee autoFill={true} speed={30}>
        <section className="flex gap-[30px] mr-[30px]">
          {items?.map((item, i) => (
            <img key={i} src={item.icon} alt="Bank Icon" />
          ))}
        </section>
      </Marquee>
      <Marquee autoFill={true} direction="right" speed={30}>
        <section className="flex gap-[30px] mr-[30px] mt-[30px]">
          {items?.map((item, i) => (
            <img key={i} src={item.icon} alt="Bank Icon" />
          ))}
        </section>
      </Marquee>

      <h4 className="text-[40px] text-[#090D2E] text-center font-normal leading-[52px] tracking-[-0.64px] sora pb-[60px] mt-[120px]">
        Have an idea? Let’s make it real.
      </h4>

      <section className="3xl:max-w-[1202px] w-full mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] px-8 lg:px-20 xl:px-16 3xl:px-0">
        {cardItems?.map((cardItem, i) => (
          <EcosystemCard key={i} cardItem={cardItem}></EcosystemCard>
        ))}
      </section>
    </div>
  );
};

export default Ecosystem;
