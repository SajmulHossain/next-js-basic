"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  const isLoggedin = false;
  const handleNavigation = () => {
    if (isLoggedin) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <p>About Page</p>
      <Link href="/about/address">Address</Link>
      <br />
      <button type="button" onClick={handleNavigation}>
        Address
      </button>
    </div>
  );
};

export default About;
