import React from 'react';
import AppBar from './app-bar/AppBar';
import UserSidebar from './user-sidebar/UserSidebar';
import { PageContainer, PageName, PageWrap } from './ReusablePage';

export default function Setting() {
    return (
        <>
            <AppBar />
            <UserSidebar />
            <PageContainer>
                <PageWrap>
                    <PageName>
                        Settings
                    </PageName>
                </PageWrap>
            </PageContainer>
        </>
    )
}
