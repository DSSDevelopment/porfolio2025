import { CSSProperties } from "react";

type BubbleProps = {
  title?: string;
  text: string[];
  altitude?: number;
  progressPercent: number;
};

export default function TimelineBubble(props: BubbleProps) {
  let bubbleFlexDirection = (props.altitude ?? 0) >= 0 ? "row" : "row-reverse";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: bubbleFlexDirection === "row" ? "row" : "row-reverse",
        alignItems: "center",
        width: "50vw",
        paddingTop: "20px",
        transform: `translateX(${bubbleFlexDirection === "row" ? "50vw" : "0vw"})`,
      }}
    >
      <div
        style={{
          width: `${Math.abs(props.altitude ?? 0)}vw`,
          height: "4px",
          backgroundColor: "#000000",
        }}
      ></div>
      <div className="timeline-bubble hairline-border">
        {props.title ? <p style={{ fontWeight: 600 }}>{props.title}</p> : []}
        {props.text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
