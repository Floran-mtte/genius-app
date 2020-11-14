import React from 'react';
import styled from 'styled-components'
import network from './../../assets/no-wifi.svg'

const Offline = () => {
    return (
        <div>
            <OfflineBox>
                <OfflineContainer>
                    <NetworkLogo src={network} alt={'Network error'} />
                    <OfflineTitle>Looks like your lost your connection</OfflineTitle>
                </OfflineContainer>
            </OfflineBox>
        </div>
    );
};

const OfflineBox = styled.section`
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:center;
  height: 100vh;
  padding:2rem;
`

const OfflineContainer = styled.div`
  box-sizing:border-box;
  width:auto;
  text-align:center;
`

const NetworkLogo =  styled.img`
  width: 64px;
  height: auto;
`

const OfflineTitle = styled.h3`
  margin: 0;
  line-height: 1.16667;
  letter-spacing: .007em;
  font-size: 18px;
  font-weight: 400;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
  text-align: center;
  color: #ffffff;
`
export default Offline;
