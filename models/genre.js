const genres = [
    {name:"Science Fiction"}, 
    {name:"Non Fiction"}, 
    {name:"Horror"},
];

  exports.all = genres

  exports.add = (genre) => {
    genre.push(genre);
  };
  
  exports.get = (idx) => {
    return genres[idx];
  };

  exports.upsert = (genre)=>{
    if (genre.id){
      exports.update(genre);
    }else {
      exports.add(genre);
    }
  }
  
  exports.update = (genre) => {
    genres[genre.id] = genre;
  }