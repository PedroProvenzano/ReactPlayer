import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Lonely Waves",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14980",
      color: ["#0C112E", "#E482F5"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Cascade",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
      color: ["#EF8462", "#E09843"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Runaway",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/604b79c66576a156c11c72f5_80Runaway---Square-Spring21-p-2000.jpeg",
      artist: "Blue Wednesday",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12135",
      color: ["#D54C46", "#F7B78B"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
