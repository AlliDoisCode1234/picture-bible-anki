import React from 'react'


const useBibles = () => {
  const [bibles, setBibles] = React.useState({});

  const getBibles = React.useCallback(() => {
    fetch("https://api.scripture.api.bible/v1/bibles", {
      method: 'get',
      headers: { 'accept': 'application/json', 'api-key': '2e5d71a91294792ed187ecf7c3645b31' }
    })
      .then((response) => response.json())
      .then((data) => {  
          console.log(data)
        const biblesHashMap = data.data.reduce((hashMap, item) => {
          const leftChar = item.id;
          const rightChar = item.name;
          hashMap[rightChar] = leftChar;
          return hashMap;
        }, {});
        setBibles(biblesHashMap)
        console.log(biblesHashMap)
      })
      .catch((err) => alert(err.message))
  }, []);

  return [bibles, getBibles];
};


export default useBibles






