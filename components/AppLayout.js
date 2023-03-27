import React, {useMemo} from "react";
import {Layout, Menu} from "antd";
import styled from "styled-components";
import Link from "next/link";

const {Header, Content, Footer} = Layout;
export const LayoutHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
`;
export const LayoutContent = styled(Content)`
  padding: 24px;
  min-height: 500px;
`;

const AppLayout = ({Component}) => {
    const footerStyle = useMemo(() => ({ textAlign: 'center' }), []);

    const items = [
        {label: <Link href="/">Home</Link>, key: 'home'},
        {label: <Link href="/products">상품</Link>, key: 'products'},  //items?
        {label: <Link href="/stores">매장</Link>, key: 'stores'},
        {label: <Link href="/profile">내 정보</Link>, key: 'profile'},
    ];
    // TODO: Layout style width 값 설정
    return (
        <Layout style={{width: 1530}}>
            <LayoutHeader>
                <div className="logo"></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['2']}
                    items={items}
                />
            </LayoutHeader>
            <LayoutContent>
                <div className="site-layout-background" style={{ marginBottom: 30 }}>
                    {/*{children}*/}
                    <Component/>
                </div>
            </LayoutContent>
            <Footer
                style={footerStyle}
            >
                RETRO MALL ©2023 Created by BigOne
            </Footer>
        </Layout>
    );
}

export default AppLayout;
