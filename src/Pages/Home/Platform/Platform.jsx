import React from "react";
import ItemCard from "./ItemCard";
import discardIcon from "../../../assets/bank/logo - discord.png";

// Array of object---------------
const items = [
  {
    icon: "https://s3-alpha-sig.figma.com/img/5f73/eb48/c981fa5680d42c108002645e0f18299b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbPZDol2LUm0XVZ8TLPkMfndYjTS16SFRXr9LWG~uhd48e8l5Rmo0-WQQjfTvxGXWgMpkfG3KhG9UaUeMNYJ0OJfhKocCOoj9XCU2xDvQKMRHNgVyhfylafwrtQoL7rMXQMu48b-y5jgH204i5OSka1XQiQ7GiSSvG7Dokibrf5Xn6gZeICkZyANSOQKo2BimcFVQ4FK34HorgwlkzDJmQN48e8SNsbVkj4IsHaF5ooQcVnG6IbCliuKfcUknRMXs8bCZ24aXQPY1sd28l-zY1Raf8oeRkujtwB7-7WA7bdgYjDi1kDJc0UoRr48DgCbJK2EyfbXF-qELL4DsPPtgg__",
    title: "Stable Value Currencies",
    text: "A growing family of user-friendly stablecoins like cUSD, cEUR, cREAL, USDC, and more, accessible via mobile and desktop devices.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/1c6b/710a/d6e49001c43dd281e03cc1f0d3eee406?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrIw20Z0kpjTTWUPweFl0HIgFUQBidqK0gpA0k8RQ8hMBT6cSl7d-~mbP77OO4BkiArpdzNL7SHR4IzSNLpTabY-XEChALtxyGfH7QHsm4RLg3Dv2UDLRG3zAyllYNP0y6ATlvdOh~bj9mDzbbZcsSH2M6Y~Zgs1y4-rxRUIaJxbg3hQ4wOIxljxS~bGyZ4ZE4jB2dxLvu64eUUQo9AMRvQE1VurM5rE1JGI91qgOwGqJCuP4jDsht7LM6NjrlW0QguftyD7XciDJwmUFqqtqqbdXRfZce-W54xwQJ5nWNyVSC4p8q-8ybtor0PgOJNy2HkfYqm8yyWxnDF9F8SAWw__",
    title: "Full EVM Compatibility",
    text: "Popular Ethereum tooling and full support for ERC-20 like tokens make it easy to port dApps over.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/4315/cc31/7296efb2439d2422dbfec5dcb9761fa6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NdzW5oF7BuvzLY~y7XZds5dqDMdwE~TmGEBtBOyH~ycPYrkh5zKYoWr81q~xL77z7lg7gLdQDZG77eXIp~OntUQ3WKuR7JWYklRsyKJQPaqQamxMaJkj5q~v1am9fSw6f54DX1NZw1Kj2E~BEy8PHdOjyAHNdag09k1d8W~VDX3D~J4o0XsC-9S1c-NCJWt0t7X4wCWf7xAKWeZ2JgtEwMbW3eD855tBtQiqZDfwia0kLcbKiJrt~kj7Mq9sJdZBXHOjgehoAC-tMGxAw4WehXD2Y9Yh~D2IxdlcP18rASg7dvdFAJlRkyyoLHkez2~8santEen8y4Yr44jzoQeYwA__",
    title: "Proof-of-Stake",
    text: "Permissionless consensus algorithm powered by decentralized, carbon-negative infrastructure.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/7009/26e1/752ad973520ba2684af5958ad2ed8115?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GcKslB~Ij2V81kPUfXsM0SNToE4D0eXJkcX5hSckCObKWuo20mowhT~Vs8cb7336JIjtpsFhjlQAN8vB2aEolFsmRg6V-a4c9io56rpVylcrnP9~FYEtoBqy4iipnSDY9xZaq-IQi7DBQSwiAsYvbaPxgidkYeRhY0A5otH~cWXUYwexMrMYi3DhhAAhrqT7V3YOfEpZzw3HIMbAeVrhIpoKetQOSZV5eSgLktf4cbdDHUxlB09IY6y~ggexiW2oTj1QFdLbSm5uNRHbfotGas83lipNZi5wNpFVJv5fRPnaXg6riZt9BjsZ0Rm3zYyV7oJeKl0NVJlUqCOQ7deVVA__",
    title: "Number Mapping",
    text: "Popular Ethereum tooling and full support for ERC-20 like tokens make it easy to port dApps over.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/52c3/43bc/df0476e8cf9b578f9be351eda5df6c28?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a1YlGM~Xne0yCtuCa~Ag~PRTAb9e59XSTDblptiLX~RuP4kR2WuHa1WdEvWV~kCUBUEZSv3wTQIbx0g95QGeO9b0PDiIjE6iPPC2VfTsWXYJDGaLE5Ex-u36HkGejTR~cOHqo4-nDAgl-jllw7l8hfTq6tBsqOKABtbvQFe9f8VI0mk1fhzqEkfZv1iIu7HcQ3pQRj8Z8ZEWPaDwYjPBD5c7kDqlP8-VAY7QnkxGICSmT6BJLmgSV--fL39ltLAhGFVpKGaeWMEXZ93Gwl8BpWU5r0FtBzOYGt-RF6Sd6qjx~TzgsdFZ7huPSDGy3MNbWYKwxzwBs7NrzU2ptbi1pA__",
    title: "Fast & Secure System",
    text: "Permissionless consensus algorithm powered by decentralized, carbon-negative infrastructure.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/2d17/ffdc/bfbb3e4e8ec6d3694afe8536684f25e0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UialJkPTpmKpqAKRSbBAyEbucKN1Hhc3nT2K6H8wGlYbAxsU5ffZHYG9rvhjNh00w-r1Y0epNv3HperMZGDNzPwzR0iBykIfp0cLaOpCiRUeVlluUWfDr1jlULhDGo~4dOCCmPIXd3oFUHNckNseWn9RI8RW-acCkYvoRyWEwJ9X3sZy9gwrWn~BUCjZ93IuLQjo-fbNU1Ij-FvMSKlx7DJG6RO4Z3Qem7PnELV3aZmulzl1fgUN102S0-ENEKNXpYW1HDvHzbW6Naf9svY1kC78RjdxNpp0zdqbLTxlKxoLy97xheQoLmdW3Onxo~dsCZ4rZnt7EFU0T3IJS59m8g__",
    title: "Low and Multi Currency Gas Fees",
    text: "Popular Ethereum tooling and full support for ERC-20 like tokens make it easy to port dApps over.",
  },
];

const Platform = () => {
  return (
    <div className="bg-[#000307] pt-[100px] pb-[100px]">
      <h3 className="text-[40px] text-white text-center font-normal leading-[52px] tracking-[-0.64px] sora pb-10">
        Platform Stats
      </h3>
      <div className="max-w-[1093px] px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 border border-[#0dd0c626] flex flex-col lg:flex-row justify-center gap-10 rounded-md py-9 mx-auto">
        <section className="lg:border-r pr-10 border-[#0dd0c626]">
          <div className="text-[40px] text-center text-white sora font-normal leading-[50px] tracking-[-1px]">
            109,127,848
          </div>
          <div className="text-lg text-[var(--gray100)] text-center font-medium leading-[29.7px] tracking-[-0.072px] mt-2">
            Total transactions
          </div>
        </section>
        {/* -------------------- */}
        <section className="lg:border-r border-[#0dd0c626] pr-10">
          <div className="text-[40px] text-center text-white sora font-normal leading-[50px] tracking-[-1px]">
            5s
          </div>
          <div className="text-lg text-[var(--gray100)] text-center font-medium leading-[29.7px] tracking-[-0.072px] mt-2">
            Average block time
          </div>
        </section>
        {/* -------------------- */}
        <section className="lg:border-r border-[#0dd0c626] pr-10">
          <div className="text-[40px] text-center text-white sora font-normal leading-[50px] tracking-[-1px]">
            704
          </div>
          <div className="text-lg text-[var(--gray100)] text-center font-medium leading-[29.7px] tracking-[-0.072px] mt-2">
            Days carbon negative
          </div>
        </section>
        {/* -------------------- */}
        <section className="lg:">
          <div className="text-[40px] text-center text-white sora font-normal leading-[50px] tracking-[-1px]">
            $0.001
          </div>
          <div className="text-lg text-[var(--gray100)] text-center font-medium leading-[29.7px] tracking-[-0.072px] mt-2">
            Average gas fee
          </div>
        </section>
        {/* -------------------- */}
      </div>

      {/* _______________________service details card___________________________ */}

      <section className="3xl:max-w-[1202px]  w-full mx-auto mt-[100px] pb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[128px] gap-y-[75px] px-7 sm:px-10 md:px-20 3xl:px-0">
        {items?.map((item, i) => (
          <ItemCard key={i} item={item}></ItemCard>
        ))}
      </section>

      <hr className="border-[#14171A] pt-[100px]" />

      <h4 className="max-w-[640px] mx-auto text-3xl md:text-[40px] text-white text-center font-normal leading-[52px] tracking-[-0.64px] sora px-7 md:px-0">
        Ready to learn more? Start with docs and Discord.
      </h4>
      <div className="flex flex-col sm:flex-row gap-[14px] justify-center mt-10">
        <button
          type="button"
          className="py-[18px] px-[22px] inline-flex items-center gap-x-1 text-lg leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md border border-[#008DA0] text-[var(--primary)] hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out"
        >
          Read the docs
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
        <button
          type="button"
          className="py-[18px] px-[22px]  inline-flex items-center gap-x-1 text-lg leading-[23.4px] tracking-[-0.288px] font-semibold rounded-md border border-[#008DA0] text-[var(--primary)] hover:border-teal-600 hover:text-white disabled:opacity-50 disabled:pointer-events-none hover:bg-gradient-to-r from-[var(--primary)] to-teal-700 ease-in-out"
        >
          Join the community
          <span>
            <img src={discardIcon} alt="Discard Icon" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Platform;
