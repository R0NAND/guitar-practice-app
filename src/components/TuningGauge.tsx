import React, { useRef, useState } from "react";
import * as Tone from "tone";

interface Props {
  children: number;
  tunedNoteCallback: (note: string) => void;
  sensitivity: number;
}

const TuningGauge = ({
  children,
  tunedNoteCallback,
  sensitivity = 0.7,
}: Props) => {
  const heardNote = useRef("");
  const consecutiveTimesHeard = useRef(0);
  console.log("wtf");

  if (sensitivity >= 0.95) {
    throw new Error("Highest allowable sensitivity is 0.95");
  }
  let note = children === 0 ? "" : Tone.Frequency(children).toNote();
  let target = Tone.Frequency(note).toFrequency();
  let lower_bound = target / 1.02930223664; // 24th root of 2
  let upper_bound = target * 1.02930223664; // 24th root of 2
  let tolerance = 1 - sensitivity;

  let fraction = 1;
  if (children < target) {
    fraction = (target - children) / (target - lower_bound);
  } else {
    fraction = (children - target) / (upper_bound - target);
  }

  if (fraction <= tolerance && note === heardNote.current) {
    consecutiveTimesHeard.current += 1;
  } else {
    consecutiveTimesHeard.current = 0;
  }
  heardNote.current = note;

  if (consecutiveTimesHeard.current === 2) {
    //console.log("ye");
    consecutiveTimesHeard.current = 0;
    tunedNoteCallback(note);
  }

  return (
    <>
      <div style={{ position: "relative" }}>
        <svg
          style={{ position: "absolute" }}
          height="100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="50" cx="50" cy="50" stroke="white" />
        </svg>
        {note !== "" && (
          <svg
            style={{ position: "absolute" }}
            height="140"
            width="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              rx={children >= target ? 50 - 40 * fraction : "49"}
              ry={children < target ? 50 - 40 * fraction : "49"}
              cx="50"
              cy="50"
              fill={fraction <= tolerance ? "green" : "red"}
              stroke="yellow"
            />
          </svg>
        )}
        <h1 style={{ position: "absolute" }}>{note}</h1>
      </div>
    </>
  );
};

export default TuningGauge;
