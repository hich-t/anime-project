import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();



export const AnimeController = ({ children }) => {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [input, setInput] = useState("")
    const [query, setQuery] = useState("");
    const [data2, setData2] = useState([])




    const fetchData = async () => {
        try {
          const callData = await axios.get(
            "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=0&sort=-averageRating"
          );
         setData(callData.data.data);
          setLoad(true);
        } catch (err) {
          console.log(err);
        }
      };

      const fetchData2 = async () => {
        try {
          const callData = await axios.get(
            `https://kitsu.io/api/edge//anime?filter[text]=${query}`
          );
          setData2(callData.data.data);
          setLoad(true);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        query ? fetchData2() : fetchData();
      }, [query]);


    
    return (
        <AnimeContext.Provider
           value={{
              value : [data, setData], 
              value1 : [load, setLoad], 
              value2 : [query, setQuery],
              value3 : [input, setInput],
              value4 : [data2, setData2], 


            }}
    
        >
                { children }
        </AnimeContext.Provider>
      );
}