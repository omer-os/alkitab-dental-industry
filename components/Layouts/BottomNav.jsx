import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import Link from "next/link";
import { useRouter } from "next/router";
export default function BottomNav() {
  const router = useRouter();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "background",
      }}
    >
      <Link href="/">
        <BottomNavigationAction
          className={`${value === 0 && "Mui-selected"}`}
          label="Home"
          icon={<HomeRoundedIcon />}
          showLabel={value === 0 && true}
          onClick={() => setValue(0)}
        />
      </Link>
      <Link href="/a">
        <BottomNavigationAction
          className={`${value === 1 && "Mui-selected"}`}
          label="Favorites"
          icon={<FeedRoundedIcon />}
          showLabel={value === 1 && true}
          onClick={() => setValue(1)}
        />
      </Link>
      <Link href="/b">
        <BottomNavigationAction
          className={`${value === 2 && "Mui-selected"}`}
          label="Nearby"
          icon={<PeopleRoundedIcon />}
          showLabel={value === 2 && true}
          onClick={() => setValue(2)}
        />
      </Link>
    </BottomNavigation>
  );
}
