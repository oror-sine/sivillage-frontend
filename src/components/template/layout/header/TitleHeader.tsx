import React from "react";
import Link from "next/link";
import Header from "./Header";
import { cn } from "@/lib/utils";
import PathText from "./PathText";
import HistoryBackButton from "@/components/molecule/button/HistoryBackButton";
import SearchIcon from "@/components/atom/icon/SearchIcon";
import ShoppingBagIcon from "@/components/atom/icon/ShoppingBagIcon";
import SearchButton from "@/components/molecule/button/SeachButton";

export default function TitleHeader() {
  return (
    <Header>
      <div className={cn("h-[56px]", "flex justify-center items-center")}>
        <HistoryBackButton
          variant="ghost"
          className={cn("absolute left-[16px]", "w-[32px] h-[32px] p-0")}
        />

        <PathText />

        <div
          className={cn(
            "absolute right-[16px]",
            "flex justify-between items-center",
            "absolute w-20 h-8",
          )}
        >
          <SearchButton />
          <Link href="/cart">
            <ShoppingBagIcon />
          </Link>
        </div>
      </div>
    </Header>
  );
}
