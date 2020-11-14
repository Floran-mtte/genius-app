import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import DeezerApi from '../../helpers/DeezerApi'
import styled from 'styled-components'

import Header from '../../components/Header'
import Cover from './../../components/Cover'
import AlbumDescription from '../../components/AlbumDescription'
import Offline from "../../helpers/Offline";

const Album = () => {

    const [album, setAlbum] = useState({})
    const [offline, setOffline] = useState('offline')
    const { id } = useParams()

    useEffect(() => {
        const deezerApi = new DeezerApi()
        deezerApi.getAlbum(id)
            .then((response) => {
                setOffline('online')
                document.body.classList.remove('offline')
                setAlbum({...album, data: response.data})
            })
            .catch((error) => {
                console.log('test');
                console.log('offline')
                document.body.classList.add('offline')
                setOffline('offline')
            })
    }, [])


    return (
        <div>
            <Header back_mode/>
            {document.body.classList.contains('offline') || offline === 'offline' ? <Offline/> : (
                <div>
                {Object.keys(album).length > 0 && (
                        <AlbumContainer>
                            <CoverContainer>
                                <Cover size={'large'} cover={album.data.cover_big}/>
                            </CoverContainer>
                            <AlbumDescription album={album}/>
                        </AlbumContainer>
                    )}
                </div>
            )}

        </div>
    )
}


const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline-start: 25px;
  padding-top: 15px;
  padding-bottom: 25px;
  padding-inline-end: 25px;
`

const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`
export default Album
