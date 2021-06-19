import React from 'react'


const useBibles = () => {
  const [bibles, setBibles] = React.useState({});
  
  const getBibles = React.useCallback(() => {
    fetch("https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter", {
      method: 'get',
      headers: { 'x-rapidapi-key': '2cc83f283fmsh085ca9948622069p1f86ffjsn270a6e7aac00', 'x-rapidapi-host': 'ajith-holy-bible.p.rapidapi.com', 'useQueryString' : true }
    })
      .then((response) => response.json())
      .then((data) => {  
        //   console.log(data)
          console.log(data.The_New_Testament)
          console.log(data.The_Old_Testament)
        // const biblesHashMap = data.data.reduce((hashMap, item) => {
        //   const leftChar = item.id;
        //   const rightChar = item.name;
        //   hashMap[rightChar] = leftChar;
        //   return hashMap;
        // }, {});
        // setBibles(biblesHashMap)
        // console.log(biblesHashMap)
      })
      .catch((err) => alert(err.message))
  }, []);

  return [bibles, getBibles];
};


export default useBibles






