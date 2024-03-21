import React from "react";
import ItemCard from "./ItemCard";
import discardIcon from "../../../assets/bank/logo - discord.png";

// Array of object---------------
const items = [
  {
    icon: "https://s3-alpha-sig.figma.com/img/5f73/eb48/c981fa5680d42c108002645e0f18299b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSEll5iC5rlYmv2eoqQxMXWf4Uw0LHArrzFhBelPY1JtHKl17R1W-rBkby4C0JUj0weL8kf7lBgaGm6XZK~EiF5cXuoOQXlPL0-Jm8WX27w-4T3LM~8fDPOB0oxvavLkDoDLG36ITVILrEnG5KMWTrKlkh2jCAz2iXsgSn2oZyXZQaG3tF6WYAMbpPB5qDRkusTc~OXeJVeQIYOSb8HEHHEtHWvk1IHVFU4~88g1zPOx3npYEJ8XIwp-ngX19XldS7FKLplJ8xIrELXlkTBsL3ZqTuCybb3ClzMCM6ZqtUq9yAiqSJEFyyiKj~wC4FfmV-OTO-6PyngklER1OLUPsQ__",
    title: "Stable Value Currencies",
    text: "A growing family of user-friendly stablecoins like cUSD, cEUR, cREAL, USDC, and more, accessible via mobile and desktop devices.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/1c6b/710a/d6e49001c43dd281e03cc1f0d3eee406?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEUM8j1xdc66VlhjNn1NePCK2IYMReKLb4IpSteqHniDERvfOgQZm2H40B3CkUphQ0KrEp1CMelgYwFxQGaKLGYhtpnZo~s8ZKpFH8a7tqDEyiKCHxL10THphqOTzgONL6kNmrX611A0Ck6AmfcPiveq-X3QBrhQAZBiBusb7HwuBU63ko5yO23bSnt~ECGJzdNC0T0FI6ytiP6mrIkIKEQfEh7GcPP8XAz8OCxj1f9nuOtqeornL~jnQeMZXWbB6Sa2E8BcHyyzjTh9xzt8ya0QYqe5wv8bKOe2i4Xb8KQDoOGr3hZdSuHrLmDBu7~xqu8G5eZ9RN4V5kydmEIYlw__",
    title: "Full EVM Compatibility",
    text: "Popular Ethereum tooling and full support for ERC-20 like tokens make it easy to port dApps over.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/4315/cc31/7296efb2439d2422dbfec5dcb9761fa6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nImjGVpYs3H11z5RjuxAfgMQC~4~u2y0v7avZU0I1J9m6crjKP9xi-4SduTzPLcTAHM6ufNSDf6aprZw3UWe0kC1M9AflHtsHUuGsZWYjzidM7Zhj8pSaOCINAM41Vw8ljS9tmB52sARENX9lzqwUia4GlLCsBS1QwuDy0gaffGw6rkFtErw6Y-9J9biwk2z-8Uj9dktQ5aPmdYHl4hc2uDPPdOkytONqRLt3nV7qOJ3tFDXwU9jEgT-yquZ2Jm02KDOz8O88an09sz6S-cS8A-Rvf4FHewukGknaoRtz1M~vUiU4WxtAoyz18MVlKtluwvuxwkxz0f~2tgoAT7zVQ__",
    title: "Proof-of-Stake",
    text: "Permissionless consensus algorithm powered by decentralized, carbon-negative infrastructure.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/7009/26e1/752ad973520ba2684af5958ad2ed8115?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDcM1oe-63X3W9aKYaKKYj5bAzg8KFVZLDhRCkuCjuET1NhJIvT~UD2ngL2rIGHdlcCMDf9bitedf-CaQzirS2YKsS6kJqgxk9ycICMvOtTXWekhZ3-bmuduuuFrqBT6Oal2-6ZU-kFWSyI6J0859EsgpaFAoJHuNdU~oik-917PIR2pz-18NC6UNKyeBWZE52lLEzGamvPJcqUu4RC3MUlOUVwaPkTbIL2Evk-jWaaNOCHzE5GxQWCv4T8tiHMhhNqSFNaxkQrLWj2Bj3u5LF3qY6YdNhSks-lC2PvV6fk9We8Fs3XFPuHRfNF98Z4YEbwdtE4pJAuPYMv~efaDcA__",
    title: "Number Mapping",
    text: "Popular Ethereum tooling and full support for ERC-20 like tokens make it easy to port dApps over.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/52c3/43bc/df0476e8cf9b578f9be351eda5df6c28?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eecMoLadRq9CwrhuTzwZm7DjDa6t2GDsK9DRwtIePuMbDZ-O9R0Fz2ahgm8wFGVsXYpkzgzwd4rXR1m0S4LZEFECmIUp42lAfFCo0wzas7f1rQ5-702SC6TGctttjmOVCazIDsOjkKX3vODXkgEoQEpkYGunTsczwG-IkV9FG6JCfK3Of-pREkE4Nu6rFMkmm~SNdle8fG1vjlIqbKQhDavZxHQi43mJvMFPPw9kcwYrofRbZSUUiRHRBA7tL-FNqUooA~8a1L1xP883-ZfymiBH424jVqP~e4wn4zi6w2f3K0m37ri~C7Avd5S7CVTt4tUDRhnar5DvWrOH6zcZGA__",
    title: "Fast & Secure System",
    text: "Permissionless consensus algorithm powered by decentralized, carbon-negative infrastructure.",
  },
  {
    icon: "https://s3-alpha-sig.figma.com/img/2d17/ffdc/bfbb3e4e8ec6d3694afe8536684f25e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=obegCTV700xHnFIzM~NBsf9Mjcrtt6bnFVebV-1gRnE~HNrxng0yySD0fSHHTvemmz4vMEWEXZe9jC8Bn~kkbBplWR50BRAAIlzoapvfe5GKjSr99ZO3npAnzUbqWMAXL8R6KV7Lg59v-5-3Ndlb8GphYCWRVQT47J59EuBsOeqeMsRlkkLEyzbiT4WvoFg5J95Kqo8GcU0P2FP5iY88pF9qzmUlvJavHlvGxHRVvkaDGBElLcSqB18wifCr9XOrJo0fTueq6i2zKKAM3LVuexvRykIf3~Z6iPKR3PXix4t3nMssr8mD-YwkLCRxA~6~E3r8Npkn~kTit~n19M6pmw__",
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

      <section className="3xl:max-w-[1202px]  w-full mx-auto mt-[100px] pb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[128px] gap-y-[75px] px-7 sm:px-10 md:px-20  xl:px-32 3xl:px-0">
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
