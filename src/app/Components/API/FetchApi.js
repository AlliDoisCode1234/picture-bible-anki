import React from 'react'

const FetchApi = () => {

    const apiGet = () => {
        fetch("https://api.scripture.api.bible/v1/bibles", {
            "method": "'GET'",
            "headers": {
                'Api-Key': '2e5d71a91294792ed187ecf7c3645b31',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }

    return (
        <div className="fetchApi">
            <h1>My API</h1>

            <button onClick={apiGet}>Fetch API</button>
        </div>
    )
}

export default FetchApi
