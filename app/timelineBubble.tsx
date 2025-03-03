type BubbleProps = {
  title?: string;
  text: string[];
  altitude?: number;
  progressPercent: number;
};

let props: BubbleProps = {
  title: "Title",
  text: ["Highlihgt 1", "Highlight 2"],
  altitude: 20,
  progressPercent: 0,
};

export default function TimelineBubble(props: BubbleProps) {
  return <div></div>;
}
