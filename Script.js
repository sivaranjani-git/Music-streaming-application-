fetch("http://localhost:5000/api/songs")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("songList");

    data.forEach(song => {
      const div = document.createElement("div");
      div.className = "song";
      div.innerText = song.title;

      div.onclick = () => {
        document.getElementById("player").src =
          "http://localhost:5000/" + song.file;
      };

      list.appendChild(div);
    });
  });
