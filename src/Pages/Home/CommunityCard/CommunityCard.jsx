import React from "react";
import Card from "./Card";
// Card Items
const cardItems = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/07c4/85a4/cfb845807f4572daecab6e73d8b1af92?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvFOXno6B6wwE3ke9YFN8PqDFpwu7M7BsKCQql1HghQRt7~Yxu9Ac~S9hJePsPlHLN1Zj24BM09s8NLzK0pftKV12TlkZElP4MeUNsv8IlCZRmpm7i133TLtmC1Gao0xuUoZ4EQxq08pgwF3HUEGWL2PrwAlKd94b5Qj6~nXsushcRpYvC4~smL8pLzhDA0L16NMtpQ9QxjJ22iPftAeDzmf0rn9E5oKtCKl2jlqlNB~O-NQISL682ePwDi-s~HRxo7yJx3oi6feG5-QPUCQYd4LK0jX~MmUoNAEbCBKeoTgAPXTyQCFHRiKKDU1Fe3odenU6K1Rmtig-cIL0FoWuQ__",
    paragraph:
      "Fast Chain is a fully EVM compatible proof-of-stake layer-1 protocol, featuring a fast ultralight client and built.",
    button: "Learn more",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/45b7/5bda/8513530e96e697cef80be71d3f82ced9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XaizS1pDOELYnmcY3hf3CTK1xVmoj1aoA6Guxen2i4qW8Q2wG48sjn7S4G5JisICibe5qGkCDE4BBqyC3CgNu~PZBPS0WUsd1maqcUiE4zWIKihoxHfLProU4YlcPSi0e1wiUkvbfzpw0BM0uo2Av3UKre8UVLkrvqYjAfhYo4knsre45S2h6OgbUAB1kayO9zbWYLbbZi6jF1U1FfOcTl0VdcksmLgx3U7nTr5989QWAKfDzSL2eeVcRVsUMLNP9q8PO-IQoaX3nenWX746lU9ooXvM6RA31SSPPAfpwQ8Isgl7Fgw85QBcWTgkjNAaS10z5EF9ZSGMU-SOkwHTTA__",
    paragraph:
      "Fast Chain is a fully EVM compatible proof-of-stake layer-1 protocol, featuring a fast ultralight client and built.",
    button: "Learn more",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/c72c/a585/5d0f5b38bf64f8c6e0aab9e64fd42399?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gyG7AJhHz~DJ4SN1oZElp1VFQBBPZKXxxbM~Dq4O-hueio-vYKkrV2iPo7AHPm9HU8dAI6OZfz1-~YH~DLQvAVcNXO7IGGYaVkllN5A0y6FSDluWAnl~YG5JyoROsHbqb49cocRfbnGj9popq7xP5DczccsgMT3ZWnJYlUjc2Bi1hnrn5mcdrnPJ14K-x-QFJU3f98x-CYxv7ZPVGGdmE4ID2z5wnM3ldFv-us6hOz1diypvxj3LIrtrI8q1tIGdlCW9AaCpEC9UNLuIgCKeIsXokBfBxLOOz8Ro24PJL~V8jhQuI6GF8IE7aVWDUyyC7GEHrOwy8nPBx-encGdoVg__",
    paragraph:
      "Fast Chain is a fully EVM compatible proof-of-stake layer-1 protocol, featuring a fast ultralight client and built.",
    button: "Learn more",
  },
];

const CommunityCard = () => {
  return (
    <div className="mt-[120px] mb-[120px]">
      <section className="3xl:max-w-[1202px] w-full mx-auto px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 flex flex-col justify-center">
        <h2 className="text-[40px] text-[#000420] font-normal leading-[52px] tracking-[-0.64px] sora ">
          Learn about <span className="font-semibold">Fast Chain</span> Layer-1
          blockchain <br /> and community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-10">
          {cardItems?.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityCard;
