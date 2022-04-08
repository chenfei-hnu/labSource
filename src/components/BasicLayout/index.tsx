import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import { Route } from 'react-router-dom';
import routes from '@config/routes';
import { verArr } from '@utils/util';
import SiderMenu from './SiderMenu';
import styles from './index.less';

function BasicLayout() {
  const copyRight = `Copyright ©${new Date().getFullYear()} Fei Chen's Research Group @ Hunan University All rights reserved`;

  return (
    <Layout className={styles.layoutWrap}>
      <Header className={styles.header}>
        <div className={styles.links}>
          <a href="http://www.hnu.edu.cn/" target="_blank" title="湖南大学" rel="noreferrer">
            湖南大学
          </a>
          |<a href="#">@ICBN</a>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.logoContent}>
            <p className={styles.logo} />
            <p className={styles.name}>陈飞课题组</p>
          </div>
          <SiderMenu />
        </div>
      </Header>
      <Content className={styles.content}>
        <div className="site-layout-background">
          {verArr(routes) &&
            routes.map((item, i) => (
              <Route key={i.toString()} path={item.path} component={item.component} exact />
            ))}
        </div>
      </Content>
      <Footer className={styles.footer}>
        <div className={styles.footerWapper}>
          <div className={styles.left}>
            <div className={styles.links}>
              <b>友情链接：</b>
              <a title="湖南大学" href="http://www.hnu.edu.cn/" target="_blank" rel="noreferrer">
                湖南大学
              </a>
              <a
                title="湖南大学图书馆"
                href="http://lib.hnu.edu.cn/"
                target="_blank"
                rel="noreferrer"
              >
                湖南大学图书馆
              </a>
              <a
                title="湖南大学外国语学院"
                href="http://english.hnu.edu.cn/"
                target="_blank"
                rel="noreferrer"
              >
                湖南大学外国语学院
              </a>
            </div>
            <div className={styles.copyRight}>{copyRight}</div>
          </div>
          <div className={styles.right}>
            <div className={styles.qrcode}></div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default BasicLayout;
