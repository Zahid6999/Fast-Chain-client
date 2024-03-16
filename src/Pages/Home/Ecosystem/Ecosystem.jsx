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
    img: "https://s3-alpha-sig.figma.com/img/b989/c672/84dccc77280b2235f39b5f6bae111212?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=brkxx~NmpzM8FTTD2VfPoEngbvKkTVRb4zLCLBkH4kdvBpqENXejWassTrA02XvLatae1Gqihmhu1UiJg3ViQzVb0kRLLxrBryzfdNZiwOQdwrGyPlO6EIypVoEZQpR0auByIlrhajJ~N3yCd7aiBXVsRtGkNgVV1P98NEMVSWVY39tinoHJrq1V62FB1QprUr5~lLL3XkqiCND0VPoWY33kZMHDVvX18rFvW9VfsqqBzSQ-ZPFjgp55s6rnu~uh-3Gd0XGwFqYU2~4wC1TpiPZaww8cfEMJZQea63p2qvSv2gAfkEjJn04NLuTz4UKBblhmX7e5eJM9kuqNOLCejA__",
    title: "Get to know Fast Chain",
    button: "Learn more",
    paragraph:
      "Devs can find bugs, boost security, and earn rewards as you explore Fast Chain through year-round bounties.",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/fc63/c114/f72a6869dec79424e1322a311f085efb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ec9B8lq4x8-qetvqOBDIESIpSvE1dE6h2CRge7zabzVLO4~ra5FANhrbfCxH~cASLSYthiDvdu4X3SGj4BxDtcb34L0uBNVUs9MRQ9fVcbxSelvlsBmRUjLyJA3cDIcF2lWeaJHEelw6L79GLvqlnMQ8egoLY~7PHGobwh-epBfRLwp93CErvCqyv29cVSh0eHe9FTA3JREWcNL2BR~HJB9DVz2yFHtiMcuVvfdS5trOByT~2J5~4FdaTSvH67B6LwedAvBZDthWWplUlRVhnT69yXVNWdD3ozMEZgmhCKRzBToziH0l9PNfavYz5YcgzIh01Bw0~yhNQ96-urIxXA__",
    title: "Get to know Fast Chain",
    button: "Learn more",
    paragraph:
      "Devs can find bugs, boost security, and earn rewards as you explore Fast Chain through year-round bounties.",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/55ae/83b4/256cc5e1435aad04c934c439fcedba23?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iI3jGFNWV87XYo7BGAVpjmUAq2ooasdpAOcxo9PlxYvgTMoci4ZsRCcBol9AOw-8F~42t1OAGzOXYGvoXkOww823I0xEczr2dxgj1R9PrvAvnWNEzw~PyE8KufKJUXMOHWAPVe-NnyqRe1L8uThZuDynv7sZ7c5p9nDz7hgT9uBcME4b9He~1BPfc0I23wvux8Vw6Je2yMQ5x~1ClcM4~kt2vulF1SOUrroBrLq4WwwDsxSjnXca38zCZwSNw4acKXfxG0iYo9U-nK47qPa7VmhaULvS9TlACaE-C5xKDOilosjDSuFUsOz3i2TP6O1SWeqr4lq9srRqGjxuW2~cPw__",
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

      <section className="3xl:max-w-[1202px] w-full mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] p-8 3xl:p-0">
        {cardItems?.map((cardItem, i) => (
          <EcosystemCard key={i} cardItem={cardItem}></EcosystemCard>
        ))}
      </section>
    </div>
  );
};

export default Ecosystem;
