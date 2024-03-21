import React from "react";
import Card from "./Card";
// Card Items
const cardItems = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/07c4/85a4/cfb845807f4572daecab6e73d8b1af92?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPvzyy4CUGTG9rF9TSG6nqfDi~MxSOsikhnDP8z9r~qNoZ3FCjW5XYRcQqoXuyAqx5BNHQH7GtFAM20JRp3zqSE6mX4m2AV65cMwK-k3t-qnqSDdGIBH62yMMBgxMY5yrxxxLvRoXqtOSoOLERtFD6ArhYWLgkEL0Hk8RrYWb~5GWEgIYSv53DrfiXfpUg4uPmgu9flfz1lMuCNwK~YLHWfQ-e~jVJrR9A0TiFvFUXDU8SJNlvzUzhxtC3~MONf8G6FgCwVX5YntpA4n-kJQVMHYGJ2Bl7XECkGOK9TIxueke8pSJjNmLn0LO~h7w2FXqSKL3~iNxRcYvquQyQiXWQ__",
    paragraph:
      "Fast Chain is a fully EVM compatible proof-of-stake layer-1 protocol, featuring a fast ultralight client and built.",
    button: "Learn more",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/45b7/5bda/8513530e96e697cef80be71d3f82ced9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z3aEpwd1WnHws6KIHtK7V9V5~yumi9ewQO5hwogJLAQGyhFrydbPKsrgYUiWw0xSvagMnU-4Dap637MUwrGW8V2n3amyoy3IkwR9830-kocL7iNztC6v2cGV0~RArDOxcb8A~p0bzWGu9sY9WYjocO26sOuUSfW3DWvVny2gtjwIlocAEZZqfLuOVPnxh0g1QD89NeKKxrwuvaFoUi8kXh6ydasXek32FmyKyA2JxGFBwz6qtWIy-4kwpJlpbRYV-GNXODl3vZT0OmP~PQOnzo6zax-s237E0pUrB6VB1eL8asBrCHH9UjnzBgCmLA64Vod-Q~WAMSo-hgquN2v5Ag__",
    paragraph:
      "Fast Chain is a fully EVM compatible proof-of-stake layer-1 protocol, featuring a fast ultralight client and built.",
    button: "Learn more",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/c72c/a585/5d0f5b38bf64f8c6e0aab9e64fd42399?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N9iK7QMgFYTNaXiuzkz-BceJb5-s2vxA5aD570JQPHrKJYtng~5y9UOXe6OZiHnFLUKkSyLM5bckhQlP92tquk8zGentCOG61J6JhsRyJmE1W1dFPp6NmouRMlTaD3V5HYeckvGZ80Uo8DlVjkeWPlGZhJ5nj-SZ~g~0Zq~KsqmABZzsBAPkg3~5fa7qu0WETI-nKmQsZuUjdnpduJg6OLoAtRL4lQLlmidUwQ9XVWPNUfzIph~~6Ox982rmKNG~tgF0Aaj6yzvTXvCdnX30BhHxPxtHGEwWzzFXcvHSRJ9hh64OnM7HWXafHTj6WQ7rxGhjDZAOAQKteuAWuSOWpg__",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[30px] lg:grid-cols-3 mt-10 justify-center">
          {cardItems?.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityCard;
