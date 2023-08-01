AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "captainMarvel",
        title: "Captain Marvel (2019)",
        url: "./assets/thumbnails/captainmarvel.jpg",
      },
      {
        id: "spiderman",
        title: "Spider-Man: Homecoming (2017)",
        url: "./assets/thumbnails/spiderman.jpg",
      },

      {
        id: "hulk",
        title: "The Incredible Hulk (2008)",
        url: "./assets/thumbnails/theincrediblehulk.jpg",
      },
      {
        id: "thor",
        title: "Thor: Love and Thunder (2022)",
        url: "./assets/thumbnails/thorloveandthunder.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id)
      // Thumbnail Element
      const thumbnail = this.createThumbnail(item)
      borderEl.appendChild(thumbnail)
      // Title Text Element
      const title = this.createTitle(position, item)
      borderEl.appendChild(title)

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {primitive: "plane", width:22, height:30})
    entityEl.setAttribute("material", {color:"blue", opacity:1})
    return entityEl
  },
  createThumbnail: function(item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {primitive: "plane", width:20, height:28})
    entityEl.setAttribute("material", {src: item.url})
    entityEl.setAttribute("position", {x:0, y:0, z:0.1})
    return entityEl
  },
  createTitle: function(position, item){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("text", {font:"exo2bold", align:"center", width:70, color:"black", value: item.title})
    const positionEl = position
    positionEl.y = -30
    entityEl.setAttribute("position", positionEl)
    entityEl.setAttribute("visible", true)
    return entityEl
  }
});
