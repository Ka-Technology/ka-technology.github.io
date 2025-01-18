"use client";
import { Animator, ScrollContainer, ScrollPage, batch, FadeOut, MoveOut, Sticky, ZoomOut } from "react-scroll-motion";

export const Initiallandingpage = () => {
  const Title = batch(FadeOut(1, 0), MoveOut(0, -650), Sticky(), ZoomOut(1, 0.8));

  return (
    <div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={Title}>
            <div className="relative text-center">

              <h1 className="text-7xl md:text-9xl p-4 font-bold tracking-tight animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent blur-lg absolute inset-0 z-0 opacity-40">
                Ka Technology
              </h1>
              <h1 className="text-7xl md:text-9xl p-4 font-bold tracking-tight animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent relative z-10">
                Ka Technology
              </h1>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};
