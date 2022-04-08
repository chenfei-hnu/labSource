import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

interface INews {
  link: string;
  title: string;
  desc: string;
  time: string;
}

function News() {
  useEffect(() => {
    setNews([
      {
        link: '',
        title: 'Advance Science 接收文章',
        desc: '热烈祝贺课题组刘业茹的文章“Functional Group-induced p-Doping of MoS2 by Titanium(IV) Bis(ammonium lactato) Dihydroxide Physisorption”被Chemistry – An Asian Journal接收。',
        time: '2020-12-29',
      },
      {
        link: '',
        title: 'ACS Applied Nano Materials 接收7文章',
        desc: '热烈祝贺课题组卢浩滋的文章“Highly Stable PtPdCu Alloy Nanowire Networks as Oxygen Reduction Electrocatalysts”被Electrocatalysis接收。',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Chemistry of Materials 接收文6章',
        desc: '热烈祝贺课题组杨美清和邵功磊的文章“Irregularly Shaped Bimetallic Chalcogenide Ag8SnS6 Nanoparticles as Electrocatalysts for Hydrogen Evolution”被ACS Applied Nano Materials接收。',
        time: '2021-7-9',
      },
      {
        link: '',
        title: 'Chemistry – An Asian Journal接收5文章',
        desc: '热烈祝贺课题组龚慧敏和罗嵩的文章“New perspectives and designs into nature-inspired flexible electronics: status and applications”被Materials Technology接收。',
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
        desc: '热烈祝贺课题组杨美清和邵功磊的文章“Irregularly Shaped Bimetallic Chalcogenide Ag8SnS6 Nanoparticles as Electrocatalysts for Hydrogen Evolution”被ACS Applied Nano Materials接收。',
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
    <div className={styles.newsWrap}>
      <div className={styles.mainTitle}>新闻动态</div>
      <div className={styles.list}>
        {news.map((item: INews) => {
          return (
            <div key={item.title} className={styles.partWapper}>
              <div className="news_dl">
                <dt>
                  <a href={item.link} target="_blank" className={styles.title} rel="noreferrer">
                    {item.title}
                  </a>
                  <span className={styles.time}>[{item.time}]</span>
                </dt>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(News);
