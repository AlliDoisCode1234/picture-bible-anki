import React from 'react'
import { setUserBibleVersionId, selectUserBibleVersionId} from '../../../features/userSlice'
import { useSelector } from 'react-redux'
// import Axios from 'axios'

// const accessToken = '2e5d71a91294792ed187ecf7c3645b31';
// const apiUrl = 'https://api.scripture.api.bible/v1/bibles';



// Axios.interceptors.request.use(
//     config => {
//         config.headers.authorization = `${accessToken}`;
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )


const FetchApi = () => {

    

    // const fetchData = useCallback(async () => {
    //     try {
    //         // fetch and set bibles
    //         const result = await Axios.get(`${apiUrl}/`);
    //         userBibleVersionId(result.data);

    //     } catch (err) {
    //         alert(err.message)
    //     }
    // });



    // const userBibleVersionId = useSelector(selectUserBibleVersionId)


    const handleBibleChange = (event) => {
        setUserBibleVersionId(event.target.value)
    }




    const apiGet = () => {
        fetch("https://api.scripture.api.bible/v1/bibles", {
            method: 'get',
            headers: { 'accept': 'application/json', 'api-key': '2e5d71a91294792ed187ecf7c3645b31'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data.data[0])
                let allArr = [];
                data.data.forEach(Obj => {
                    allArr.push(Obj)
                })
                // console.log(allArr)

                const biblesHashMap = {}

                data.data.forEach((item)=> {
                    let leftChar = item.id;
                    let rightChar = item.name;

                    biblesHashMap[rightChar] = leftChar;

                    // const displayBibles =  biblesHashMap.map((bible)=> 
                    //     <option value={leftChar}>{rightChar}</option>
                    // )
                })

                console.log(biblesHashMap)

                
                
                
                
             
            
            })
            .catch((err) => alert(err.message))
    }

    


    // useEffect(()=> {
    //     const data = apiGet()
    // }, [])
    
    


    return (
        <div className="fetchApi">
            <button onClick={apiGet}>Fetch API</button>
           
          
            <select onChange={handleBibleChange}>
                {/* Creating the default / starting option for dropdown */}
                <option value="⬇️ Select Bible Version ⬇️"> -- Select a Bible Version -- </option>
                
                
                {/* Mapping through json object */}
                {/* <h1>{data.data}</h1>
                {
                    data && data.length>0 && data.map((item)=><p>{item.about}</p>)
                } */}

            </select>
        </div>
    )
}

export default FetchApi
