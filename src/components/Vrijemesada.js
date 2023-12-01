function currentTime() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');

  const timeMessage = `${hour}:${minute}, ${day}/${month}/${year}`;

  return timeMessage;
}

export default currentTime;
