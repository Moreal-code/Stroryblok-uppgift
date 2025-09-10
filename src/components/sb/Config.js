"use client";
import { storyblokEditable } from "@storyblok/react/rsc";
import Header from "./Header";
import Footer from "./Footer";

export const Config = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.header && <Header blok={blok.header[0]} />}
      {blok.footer && <Footer blok={blok.footer[0]} />}
    </div>
  );
};
