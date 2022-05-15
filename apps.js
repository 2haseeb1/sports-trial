const allPlayers = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => showPlayerDetails(data.player));
  };
  
  const showPlayerDetails = (players) => {
    players.forEach((player) => {
      const parent = document.getElementById("player-container");
      console.log(parent);
      const div = document.createElement("div");
      div.innerHTML = `
      <div class='pro-pic'>
      <img src=${player.strThumb} class='w-25'>
      </div>
      <h5>Name:${player.strPlayer}</h5>
      <h5>Country:${player.strNationality}</h5>
      <div class="all-button">
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-success">Details</button>
      </div>
      `;
      parent.appendChild(div);
    });
  };
  