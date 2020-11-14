import React, {useEffect, useState } from 'react';
import styled from 'styled-components'
import DeezerApi from '../../helpers/DeezerApi'
import AlbumList from '../../components/AlbumList'
import Header from "../../components/Header";
import Offline from "../../helpers/Offline";

const Home = (props) => {

    const [albumList, setAlbumList] = useState([])
    const [offline, setOffline] = useState('offline')

    useEffect(() => {
        const deezerApi = new DeezerApi()
        deezerApi.getChart()
            .then((response) => {
                setOffline('online')
                document.body.classList.remove('offline')
                setAlbumList((albumList.list = response.data.albums.data));
            })
            .catch((error) => {
                setOffline('offline')
            })
    }, [])

    return (
        <div>
            <Header/>
        {document.body.classList.contains('offline') || offline === 'offline' ? <Offline/> : (
            <AlbumListLayout>
                <AlbumList album_list={albumList}/>
            </AlbumListLayout>
            )}
        </div>
    )
};

const AlbumListLayout = styled.div`
  margin: 20px 25px;
`

export default Home;
