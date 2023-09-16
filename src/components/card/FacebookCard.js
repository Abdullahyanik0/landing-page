/* eslint-disable @next/next/no-img-element */
import { IconDots, IconHeart, IconMessage2, IconShare3, IconThumbUp } from "@tabler/icons-react";
import { CommentSvg, FBLike, HeartSvg, SaveSvg, ShareSvg, WorldSvg } from "images";
import React from "react";

const FacebookCard = () => {
  return (
    <div className="p-3 max-w-lg bg-white dark:bg-[#1b1c1e] w-full h-full drop-shadow-lg cursor-default">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center gap-4">
          <img className="w-12 h-12 rounded-full" src="/images/user.webp" alt="user" />
          <div className="space-y-0.5">
            <p className="text-sm font-semibold tracking-wide text-[#212529] dark:text-gray-400">Shopify</p>
            <div className="flex items-center gap-1">
              <p className="text-xs mt-0.5 text-[#212529] dark:text-gray-400  opacity-70">Sponsored</p>
              <WorldSvg />
            </div>
          </div>
        </div>
        <IconDots color="gray" size="2rem" />
      </div>
      <div className="mb-4">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quasi nulla accusamus fugit excepturi exercitationem sit sapiente dolore
          animi praesentium?
        </p>
      </div>
      <img src="/images/facebook.webp" alt="post" />
      <div class="flex items-center justify-between mt-3 mb-2 text-[#65676b] dark:text-gray-400 ">
        <div className="flex items-center gap-1">
          <IconThumbUp color="white" className="bg-blue-500 rounded-full pb-1" />
          <p>4</p>
        </div>
        <p className="text-[15px]">1 share</p>
      </div>

      <div class="flex items-center justify-around border-t mt-2 w-full pt-2 text-[#65676b] dark:text-gray-400">
        <div className="flex items-center gap-2">
          <IconThumbUp /> Like
        </div>
        <div className="flex items-center gap-2">
          <IconMessage2 /> Comment
        </div>
        <div className="flex items-center gap-2">
          <IconShare3 /> Share
        </div>
      </div>
    </div>
  );
};

export default FacebookCard;
