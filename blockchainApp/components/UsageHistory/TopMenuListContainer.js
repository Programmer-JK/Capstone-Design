import React from 'react';
import styled from 'styled-components/native';
import UsageHistoryPageAllButton from './UsageHistoryPageAllButton';
import UsageHistoryPageButton from './UsageHistoryPageButton';
import LongContainer from './LongContainer';

function TopMenuListContainer(){
    return(
    <LongContainer>
        <UsageHistoryPageAllButton text="전체"/>
        <UsageHistoryPageButton text="구매/환불"/>
        <UsageHistoryPageButton text="지급/회수"/>
    </LongContainer>
    )
}
export default TopMenuListContainer;