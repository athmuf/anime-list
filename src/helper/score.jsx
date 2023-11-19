export function scoreColor(score) {
  let scoreNumber = parseFloat(score).toFixed(2);
  let color = null;
  if (scoreNumber >= 7) {
    color = "text-green-500";
  } else if (scoreNumber < 7) {
    color = "text-yellow-500";
  } else if (scoreNumber < 4) {
    color = "text-red-500";
  }
  return <span className={color}>{scoreNumber}</span>;
}
