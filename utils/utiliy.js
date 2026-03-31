// {this file is to make the code dry and reusable in index.js file} so we dont repeat res.statusCode = 200;
export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}

export const  getDataByPathParams = (data, locationType, locationName) => {
    return data.filter((item) => {
      return item[locationType].toLowerCase() === locationName.toLowerCase();
    });
}

export const getDataByQueryParams = (data, queryObj) => {
    const { continent, country, is_open_to_public } = queryObj;

    if(continent) {
        data = data.filter (item => 
            item.continent.toLowerCase() === continent.toLowerCase()
        )
    }
    
    if(country) {
        data = data.filter (item => 
            item.country.toLowerCase() === country.toLowerCase()
        )
    }

    if(is_open_to_public) {
        data = data.filter (item => 
            item.is_open_to_public === JSON.parse(is_open_to_public)
        )
    }

    return data;
  }