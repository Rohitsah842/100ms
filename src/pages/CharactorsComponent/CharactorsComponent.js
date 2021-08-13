import React, { useEffect, useState } from "react";
import "./CharactorsComponent.css"
import axios from "axios";
import PaginationTable from "../../components/PaginationTable/PaginationTable";



function CharactorsComponent() {
    const [data, setdata] = useState([]);
    const [currentPost, setCurrentPost] = useState([]);
    const [occupation, setOccupation] = useState([])
    useEffect(() => {
        let occu = []
        const url = "https://www.breakingbadapi.com/api/characters";
        async function badCharactorsData() {
            const request = await axios.get(url);
            const requestData = request.data;
            setdata(requestData);
            setCurrentPost(requestData);
            requestData.forEach(element => {
                occu = [...occu, ...element.occupation]
            });
            setOccupation(Array.from(new Set(occu)))
        };
        badCharactorsData();
    }, []);
    function filterData(event) {
        console.log(event.target.value)
        let currentPost = data.filter((data) => {
            return data.name.toLowerCase().includes(event.target.value.toLowerCase()) || data.occupation.includes(event.target.value);
        })
        setCurrentPost(currentPost);
    }
    return (
        <>
            <div className="SearchInput">
                <input type="text" placeholder="Type here..." onChange={filterData} />
                <div>
                    <label><strong>Filter By Occupation </strong></label>
                    <select onChange={filterData} className="select">
                        <option value="">Select</option>
                        {
                            occupation.map(el => {
                                return <option value={el}>{el}</option>
                            })
                        }

                    </select>
                </div>
            </div>
            <div className="charactorContainer">
                <PaginationTable post={currentPost} />
            </div >
        </>
    );

}
export default CharactorsComponent;