/* eslint-disable @next/next/no-img-element */
import { Button, TextInput } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { CommentBlackSvg, CommentSvg, HeartSvg, SaveBlackSvg, SaveSvg, ShareBlackSvg, ShareSvg } from "images";
import React from "react";

const InstagramCard = () => {
  return (
    <div className="p-3 max-w-lg bg-white dark:bg-[#1b1c1e] w-full h-full drop-shadow-lg cursor-default">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex items-center gap-4">
          <img className="w-12 h-12 rounded-full" src="/images/user.webp" alt="user" />
          <div className="space-y-0.5">
            <p className="text-sm font-semibold tracking-wide text-[#212529] dark:text-gray-400">CovGuard</p>
            <p className="text-xs text-[#212529] dark:text-gray-400  opacity-70">2M followers</p>
          </div>
        </div>
        <IconDotsVertical size="2rem" />
      </div>
      <img src="/images/post.png" alt="post" />
      <div class="flex items-center justify-between mt-3 mb-2">
        <div class="flex gap-4">
          <HeartSvg />
          <div className="dark:hidden">
            <CommentSvg />
          </div>
          <div className="hidden dark:block">
            <CommentBlackSvg />
          </div>
          <div className="dark:hidden">
            <ShareSvg />
          </div>
          <div className="hidden dark:block">
            <ShareBlackSvg />
          </div>
        </div>
        <div class="flex">
          <div className="dark:hidden">
            <SaveSvg />
          </div>
          <div className="hidden dark:block">
            <SaveBlackSvg />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full h-full">
        <p>
          So here&apos;s the inside scoop straight from yours truly at CovGuard: our new PastelArmor. 😅 I feel like phone covers can be more than
          just armor; they&apos;re the unsung heroes in our daily tales. It&apos;s like dressing your phone in a comforting, pastel-hued lullaby.
        </p>
        <br />
        <p>
          Now, between us (and maybe spread the word just a smidge 😉), use the code SAVE50 during checkout, and voila - 50% off! It&apos;s akin to
          stumbling upon your favorite song on repeat. Pure bliss.
        </p>
        <br />
        <p>
          So, what&apos;s in it for you with this deal? It&apos;s not just about the looks. Your phone gets the sturdy embrace it needs amidst
          life&apos;s tiny tornadoes. It&apos;s going to take time but trust me, with PastelArmor, your phone isn’t just guarded; it’s cherished.
          #CovGuardStyle #PastelArmorProtection #BehindTheScenesWithCovGuard #NotJustACover
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <TextInput className="w-full" radius="sm" placeholder="Add a comment... Eg. in what colors can i get this product?" />
        <Button className="rounded-sm bg-blue-500 hover:bg-blue-600" radius="xs">
          Post
        </Button>
      </div>
    </div>
  );
};

export default InstagramCard;
