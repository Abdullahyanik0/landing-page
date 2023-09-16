/* eslint-disable @next/next/no-img-element */
import { IconDots } from "@tabler/icons-react";
import { TComment, THeart, TRePost, TShare, TView } from "images";
import React from "react";

const TwitterCard = () => {
  return (
    <div className="p-3 max-w-lg bg-white dark:bg-[#1b1c1e] w-full h-full drop-shadow-lg cursor-default flex gap-3 ">
      <img className="w-12 h-12 rounded-full" src="/images/user.jpg" alt="user" />

      <div className="w-full">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1 text-[#536471] dark:text-gray-400 text-sm font-medium">
            <h2 className="font-semibold text-base text-black dark:text-white tracking-wide ">PromptTemps</h2>
            <p>@prompt_temps</p>
            <p>Mar 26</p>
          </div>
          <IconDots color="gray" size="2rem" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur rerum laborum iure cupiditate ex explicabo, officia molestias dignissimos
          deleniti fugit impedit cum? Velit nesciunt, aperiam inventore aut suscipit dolorem commodi?
        </p>
        <div class="flex items-center justify-between  mt-3 w-full pt-2 text-[#65676b] dark:text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <TComment /> 64
          </div>
          <div className="flex items-center gap-2">
            <TRePost /> 33
          </div>
          <div className="flex items-center gap-2">
            <THeart /> 22
          </div>
          <div className="flex items-center gap-2">
            <TView /> 11
          </div>
          <TShare />
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
