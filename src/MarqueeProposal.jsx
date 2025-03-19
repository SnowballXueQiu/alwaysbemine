import React, { useState, useEffect } from "react";

const MarqueeProposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentences = [
    "宝，我对你的爱就像拖拉机上山，轰轰烈烈。",
    "你是我的北极星，没有你我找不到方向。",
    "遇见你之后，我就有了弱点，也有了铠甲。",
    "我对你的爱，就像鱼离不开水，太阳离不开光。",
    "我想变成风，这样就能天天围着你转。",
    "你是我这辈子走丢了，还想再找回来的宝贝。",
    "你不是最好的，但有你比什么都好。",
    "我最近有点忙，忙着喜欢你。",
    "你是天上的星，我是地上的灯，我们遥遥相望，互相辉映。",
    "你的名字虽然只有三个字，却已经装满了我的心。",
    "我愿意陪你从青涩时光走到白发苍苍。",
    "喜欢你，是我这辈子做过最勇敢的事。",
    "你的笑容就像冬天的暖阳，让我沉醉其中。",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000); // Change sentence every 9 seconds
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      style={{
        width: "50%",
        height: "75px",
        margin: "50px auto",
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif", 
            // fontFamily: "Beau Rivage, serif", 
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start fully off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* End fully off-screen to the left */
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
