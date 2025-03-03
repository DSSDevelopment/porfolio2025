import "./timeline.css";
import TimelineBubble from "./timelineBubble";

export default function Home() {
  return (
    <div>
      <div className="timeline-header">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div className="timeline-bubble hairline-border">
            <p style={{ fontWeight: 600 }}>About Me</p>
            <p>
              Lorem ipsum and all that kind of stuff that tests these things
            </p>
            <p>+510 260-2309</p>
          </div>
        </div>
      </div>
      <div className="timeline-container">
        <div className="timeline"></div>
        <TimelineBubble
          title="Test Bubble"
          text={["Highlight 1", "Highlight 2"]}
          altitude={20}
          progressPercent={0}
        />
        <TimelineBubble
          title="Test Bubble 2"
          text={[
            "Highlight X",
            "Much, much longer Highlight Y that might very well break the layout of this control and should be adjusted for!",
          ]}
          altitude={-10}
          progressPercent={0}
        />
      </div>
      <div className="timeline-footer"></div>
    </div>
  );
}
