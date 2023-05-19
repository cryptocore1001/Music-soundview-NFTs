import React from "react";
import { DesktopMusicCard, MobileMusicCard } from "./MusicCard";

export const StreamMusic = () => {
  return (
    <section className="pt-6 pb-8 px-5 w-full">
      <div className="flex flex-col gap-5 items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <DesktopMusicCard
              ranking="1"
              image="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              artist="Mr. SoundView"
              title="The Debut"
              genre="Afrobeat"
              release_date="2022"
              length="3:44"
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
          return (
            <MobileMusicCard
              artist="Mr. SoundView"
              title="The Debut"
              length="3:44"
            />
          );
        })}
      </div>
    </section>
  );
};
