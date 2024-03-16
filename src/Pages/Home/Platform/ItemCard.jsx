import React from "react";

const ItemCard = ({ item }) => {
  const { title, icon, text } = item;
  return (
    <div>
      <img src={icon} alt="" />
      <h3 className="text-[26px] text-white sora font-normal leading-[33.8px] tracking-[-0.416px] mt-8 mb-4">
        {title}
      </h3>
      <p className="text-lg font-normal leading-[27.9px] tracking-[-0.216px] text-[var(--gray100)]">
        {text}
      </p>
    </div>
  );
};

export default ItemCard;
