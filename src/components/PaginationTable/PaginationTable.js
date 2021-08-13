import React, { useState, useEffect } from 'react'
import "./PaginationTable.css";

import axios from 'axios';
import { Link } from 'react-router-dom';

function PaginationTable({ post }) {
    const [currentpage, setcurrentpage] = useState(1);
    const [prevbutton, setprevbutton] = useState(true);
    const [nextbutton, setnextbutton] = useState(false);


    let totalLengthoCharector;
    let noOfPage;
    if (post.length !== 0) {
        totalLengthoCharector = post.length;
        noOfPage = Math.ceil(totalLengthoCharector / 10);
    }

    const indexofLastPost = currentpage * 10;
    const indexofFirstPost = indexofLastPost - 10;
    let currentPosts = post.slice(indexofFirstPost, indexofLastPost)

    if (currentpage > noOfPage) {
        setcurrentpage(1);
    }

    function pagination(action) {

        if (action === 'prev') {
            if (currentpage > 1) {
                setcurrentpage(prev => prev - 1)
            }
        } else if (action === 'next') {
            if (currentpage <= noOfPage) {
                setcurrentpage(prev => prev + 1)
            }
        }

    }

    useEffect(() => {
        if (currentpage > 1) {
            setprevbutton(false);
        }
        if (currentpage >= noOfPage) {
            setnextbutton(true);
        }
        if (currentpage > 1 && nextbutton === true) {
            setnextbutton(false);
        }
        if (currentpage <= 1 && prevbutton === false) {
            setprevbutton(true);
        }
        if (currentpage === 1) {
            setnextbutton(false);

        }
    }, [currentpage])


    return (
        <>
            <div>
                <table className="charactorsTable">
                    <caption>Charactor Lists</caption>
                    <tr >
                        <th>Id_No</th>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>Date of Birth</th>
                        <th>Status</th>
                    </tr>
                    {currentPosts.map((el) => {

                        return < tr key={el.char_id}>
                            <td>{el.char_id}</td>
                            <td><Link to={`/InfoPage/${el.char_id}`}>{el.name}</Link></td>
                            <td>{el.occupation.join(", ")}</td>
                            <td>{el.birthday} </td>
                            <td>{el.status}</td>
                        </tr>

                    })
                    }

                </table>
            </div>


            <div className="movePage">
                <button onClick={() => pagination('prev')} disabled={prevbutton ? "true" : ""}> prev </button>
                <h3>{currentpage}</h3>
                <button onClick={() => pagination('next')} disabled={nextbutton ? "true" : ""}> next </button>
            </div>
        </>
    )
}
export default PaginationTable;