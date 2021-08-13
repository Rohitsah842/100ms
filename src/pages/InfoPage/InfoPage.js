import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import "./InfoPage.css"


function InfoPage() {
    const [userinfo, setuserinfo] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function infomation() {
            console.log(id);
            const inforesult = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
            const infodata = inforesult.data;
            setuserinfo(infodata);
        }
        infomation();
    }, []);

    return (
        <div className="userinformation">
            {userinfo.length ? <Card info={userinfo} /> : "Loading...."}
        </div>
    )
}

export default InfoPage
