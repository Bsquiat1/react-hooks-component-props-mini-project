import React from "react";

function Article(props) {
    const { title, date, preview, minutes } = props;
    let cups = 0;
  let boxes = 0;
  if (minutes <= 30) {
    cups = Math.ceil(minutes / 5);
  } else {
    boxes = Math.ceil(minutes / 10);
  }

  // Build the "minutes to read" string
  let minutesText = `${minutes} min read`;
  if (cups > 0) {
    minutesText = `☕️${"☕️".repeat(cups - 1)} ${minutesText}`;
  }
  if (boxes > 0) {
    minutesText = `🍱${"🍱".repeat(boxes - 1)} ${minutesText}`;
  }

  // Use a default date if none is provided
  const displayDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
      <small>{minutesText}</small>
    </article>
  );
}

    





export default Article;