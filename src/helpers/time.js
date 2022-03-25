/** convert a timestamp like `1647650060` to a time string like `00:34` */
export function timestampToTimeString(timestamp) {
  const date = new Date(timestamp * 1000);

  const paddedHour = date.getHours().toString().padStart(2, "0");
  const paddedMin = date.getMinutes().toString().padStart(2, "0");

  return paddedHour + ":" + paddedMin;
}