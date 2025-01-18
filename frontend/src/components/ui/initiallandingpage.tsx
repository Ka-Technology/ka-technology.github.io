"use client";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

export const Initiallandingpage = () => {

  const Title =  batch(FadeOut(1,0), MoveOut(0,-650), Sticky());

  return (
    <div>
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={Title}>
                    <h1 className="text-7xl md:text-9xl p-4 font-bold tracking-tight animate-gradient bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-center">
                        Ka Technology
                        </h1>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
      
    </div>
  )
}