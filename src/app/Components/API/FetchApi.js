import React from 'react'

const FetchApi = () => {

    const apiGet = () => {
        fetch("https://api.scripture.api.bible/v1/bibles", {
            method: 'get',
            headers: { 'accept': 'application/json', 'api-key': '2e5d71a91294792ed187ecf7c3645b31'
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => alert(err.message))
    }

    return (
        <div className="fetchApi">
            <button onClick={apiGet}>Fetch API</button>
        </div>
    )
}

export default FetchApi
