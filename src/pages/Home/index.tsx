import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import '../../../mock/homeApi';
import styles from './index.less';
import { connect } from 'react-redux';
import ReactSeamlessScroll from 'react-seamless-scroll';
import banner0 from '../../asset/home/0.jpg';
import banner1 from '../../asset/home/1.jpg';
import banner2 from '../../asset/home/2.jpg';
import banner3 from '../../asset/home/3.jpg';
import banner4 from '../../asset/home/4.jpg';
import { Link } from 'react-router-dom';

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
        title: '陈飞课题组（Chen Lab）网页上线',
        desc: '陈飞课题组网页正式上线，分为首页、研究方向、学术论文、实验室成员、实验室照片、新闻动态等板块，欢迎访问。',
        time: '2022-04-09',
      },
      {
        link: '',
        title: '欢迎四位硕士研究生加入课题组',
        desc: '欢迎硕士研究生王瑾（外国语言学及应用语言学）、陈子龙（外国语言学及应用语言学）、杨宇（外国语言学及应用语言学）、艾雁（学科教学-英语）加入ChenLab，预祝四位新生在未来的学习和研究中取得进步。',
        time: '2022-04-01',
      },
      {
        link: '',
        title: '欢迎四位客座学生访问课题组',
        desc: '欢迎四位客座学生访问实验室：邓凯方（湖南师范大学外国语学院 博士生）、陈禹风（山东大学文学院 博士生）、张雪颖（爱丁堡大学 硕士生）、季玮程（湖南大学文学院 本科生）访问ChenLab，预祝学有所成。',
        time: '2022-03-26',
      },
      {
        link: 'https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
        title: '走进通道侗族自治县，传承与保护侗族语言文化',
        desc: '2021年7月22日至28日，为助力乡村振兴，推进少数民族语言开发保护，Chen Lab带领湖南大学外国语学院旧“语”新知实践队来到湖南省怀化市通道侗族自治县，对当地侗语文化保护现状进行走访调查，包括陈飞、郭承禹、范浩坡三位指导教师、7位本科生、2位研究生。依托不同学院的丰富资源及专业知识对少数民族语言开发保护情况进行调研，深入了解现存问题，提出解决策略。 得到了中国青年网的报道。视频地址：https://www.bilibili.com/video/BV1PM4y157qM?spm_id_from=333.337.search-card.all.click',
        time: '2021-07-28',
      },
      {
        link: '',
        title: '陈飞课题组参加第十四届中国语音学学术会议',
        desc: '陈飞课题组郭承禹、张瑜、朱敏等成员于2021年7月18号-7月20号前往甘肃兰州参加第十四届中国语音学学术会议（PCC2021），报告了实验室的最新学术成果：Fei CHEN,  Yu ZHANG, Kexuan LI, Feng XU. (2021). "Suprasegmental similarities and differences between infant- and foreigner-directed speech". 第十四届中国语音学学术会议(PCC2021). July 18-20, 2021, Lanzhou, China.',
        time: '2021-07-20',
      },
    ]);
  }, []);

  const [news, setNews] = useState<INews[]>([]);

  return (
    <div className={styles.homeWrap}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Carousel autoplay className={styles.images}>
            <img alt="" src={banner0} />
            <img alt="" src={banner1} />
            <img alt="" src={banner2} />
            <img alt="" src={banner3} />
            <img alt="" src={banner4} />
          </Carousel>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h2>新闻动态</h2>
            <span className={styles.more}>
              <Link to="/xwdt">MORE&gt;&gt;</Link>
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
                            <span>
                              <h2>{item.title}</h2>
                              <p>{item.desc}</p>
                              <span>发布时间：{item.time}</span>
                            </span>
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
          <h2>陈飞课题组——Chen Lab</h2>
          <p>
            陈飞于2020年9月加入湖南大学外国语学院，现任湖南大学外国语学院英语系教授，博士生导师、博士后合作导师。香港理工大学中文及双语学系博士；美国明尼苏达大学言语-语言-听力科学系访问学者。
          </p>
          <p>
            主要研究方向：心理语言学、神经语言学、病理语言学、一语及二语习得。其领域涉及心理声学、语言科学、大脑和认知科学。欢迎对相关领域感兴趣的本科生、硕士生、博士生和博士后加入Chen
            Lab。
          </p>
          <span>
            <Link to="/yjfx">+ 查看更多</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Home);
