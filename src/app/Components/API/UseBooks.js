// import React from 'react'
// import useBibles from './UseBibles';


// const useBooks = () => {
//   const [books, setBooks] = React.useState({});

//   const getBooks = React.useCallback(() => {
//     fetch(`https://api.scripture.api.bible/v1/bible/${bibleId}/books`, {
//       method: 'get',
//       headers: { 'accept': 'application/json', 'api-key': '2e5d71a91294792ed187ecf7c3645b31' }
//     })
//       .then((response) => response.json())
//       .then((data) => {  
//           console.log(data)
//         const booksHashMap = data.data.reduce((hashMap, item) => {
//           const leftChar = item.chapters.id;
//           const rightChar = item.chapters.number;
//           hashMap[rightChar] = leftChar;
//           return hashMap;
//         }, {});
//         setBooks(booksHashMap)
//         console.log(booksHashMap)
//       })
//       .catch((err) => alert(err.message))
//   }, []);

//   return [books, getBooks];
// };


// export default useBooks

