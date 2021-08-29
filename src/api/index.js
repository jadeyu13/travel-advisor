import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async(sw, ne) => {
    try{
        const {data : { data }} = await axios.get(URL, {

            params: {
                bl_latitude: sw.lat, 
                tr_latitude: ne.lat,
                bl_longitude: sw.lng, 
                tr_longitude: ne.lng,
               
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'c49e48ea0amsh0e653fb444fae11p12dcb4jsn4a9c5c431df3'
              }
            
        });

        return data;
    }
    catch(error){
        console.log(error)
    }
}