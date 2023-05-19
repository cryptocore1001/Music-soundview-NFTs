import React from "react";
import { VideoCard } from "./VideoCard";

export const StreamVideo = () => {
  return (
    <section className="pt-6 pb-8 w-full">
      <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 ">
        {[1, 2, 3].map((i) => {
          return (
            <VideoCard
              title="The Debut"
              views="999"
              timestamp="4 hour(s) ago"
              image="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 ">
        {[1, 2, 3].map((i) => {
          return (
            <VideoCard
              title="The Debut"
              views="999"
              timestamp="4 hour(s) ago"
              image="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 ">
        {[1, 2, 3].map((i) => {
          return (
            <VideoCard
              title="The Debut"
              views="999"
              timestamp="4 hour(s) ago"
              image="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            />
          );
        })}
      </div>
    </section>
  );
};
