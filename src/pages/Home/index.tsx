import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import '../../../mock/homeApi';
import styles from './index.less';
import { connect } from 'react-redux';
import ReactSeamlessScroll from 'react-seamless-scroll';

interface INews {
  link: string;
  title: string;
  desc: string;
  time: string;
}

function Home() {
  useEffect(() => {
    setNews([
      {
        link: '',
        title: 'Advance Science 接收文章',
        desc: '热烈祝贺课题组邵功磊的文章“Seamlessly Splicing Metallic SnxMo1...',
        time: '2020-12-29',
      },
      {
        link: '',
        title: 'ACS Applied Nano Materials 接收7文章',
        desc: '热烈祝贺课题组杨美清和邵功磊的文章“Irregularly Shaped Bimetallic ...',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Chemistry of Materials 接收文6章',
        desc: '热烈祝贺课题组邵功磊的文章“Modulated Anisotropic Growth of 2D SnS...',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Chemistry – An Asian Journal接收5文章',
        desc: '热烈祝贺课题组刘业茹的文章“Functional Group-induced p-Doping of M...',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Electrocatalysis 接收文4章',
        desc: '热烈祝贺课题组卢浩滋的文章“Highly Stable PtPdCu Alloy Nanowire Ne...',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Materials Technology 接收文章3',
        desc: '热烈祝贺课题组龚慧敏和罗嵩的文章“New perspectives and designs int...',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Chemistry of Materials 接收文2...',
        desc: '热烈祝贺课题组靳媛媛的文章“Na2SO4-Regulated High-Quality Growth of ...',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Chemistry of Materials 接收文1...',
        desc: '热烈祝贺课题组邵功磊的文章“Twist Angle-Dependent Optical Response...',
        time: '2021-7-9',
      },
    ]);
  }, []);

  const [news, setNews] = useState<INews[]>([]);

  return (
    <div className={styles.homeWrap}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Carousel autoplay className={styles.images}>
            <div className={styles.image0}></div>
            <div className={styles.image1}></div>
            <div className={styles.image2}></div>
            <div className={styles.image3}></div>
            <div className={styles.image4}></div>
          </Carousel>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>新闻动态</h2>
            <span className={styles.more}>
              <a href="news.asp">MORE&gt;&gt;</a>
            </span>
          </div>
          <ReactSeamlessScroll className={styles.newWapper}>
            <div className={styles.news}>
              <div className={styles.loop}>
                <div className="bd02">
                  <div className="tempWrap">
                    <ul className="fhqdxx">
                      {news.map((item) => {
                        return (
                          <li key={item.title}>
                            <a href={item.link} target="_blank" title={item.title} rel="noreferrer">
                              <h2>{item.title}</h2>
                              <p>{item.desc}</p>
                              <span>发布时间：{item.time}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ReactSeamlessScroll>
        </div>
      </div>
      <div className={styles.clear}></div>
      <div className={styles.bottom}>
        <div className={styles.descWapper}>
          <h2>陈飞课题组 — 实验室</h2>
          <p>
            刘松教授于2006年在南开大学化学学院材料化学系获学士学位，2011年在北京大学化学与分子工程学院获得物理化学博士学位，之后到美国凯斯西储大学和新加坡国立大学从事博士后研究。
          </p>
          <p>
            2016年10月加入湖南大学化学生物学与纳米医学研究所，化学生物传感与计量国家重点实验室，任湖南大学化学化工学院教授，同年入选湖南省青年百人计划。
          </p>
          <span>
            <a href="yjfx.asp">+ 查看更多</a>
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Home);
