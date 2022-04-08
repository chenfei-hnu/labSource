import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import { Button, Empty } from 'antd';

interface IList {
  name: string;
  title: string;
  type: string;
  email: string;
  desc: string;
  hobby: string;
  to?: string;
}

interface IOption {
  label: string;
  value: string;
}

const total = [
  {
    name: '陈飞',
    title: '教授，博士生导师',
    type: '导师',
    email: 'chenfeianthony@gmail.com',
    desc: '现任湖南大学外国语学院英语系教授。主要研究方向：心理语言学、神经语言学、病理语言学、语言习得。已发表SCI/SSCI/EI检索的国际期刊和会议论文20余篇。其领域涉及心理声学、语言科学、大脑和认知科学。',
    hobby: '无',
  },
  {
    name: '郭承禹',
    title: '博士后（全职）',
    type: '博士后',
    email: 'guocy@hnu.edu.cn',
    desc: '硕博毕业于上海师范大学',
    hobby: '篮球、游泳',
  },
  {
    name: '阎锦婷',
    title: '博士后（在职）',
    type: '博士后',
    email: 'ting856868@126.com',
    desc: '博士毕业于北京语言大学',
    hobby: '唱歌',
  },
  {
    name: '朱敏',
    title: '博士',
    type: '博士',
    email: 'minzhuwiki@gmail.com',
    desc: '2022级博士生，本科毕业于西安外国语大学、硕士毕业于湖南大学',
    hobby: '游泳、爬山、旅游',
  },
  {
    name: '邓凯方',
    title: '博士（访问学生）',
    type: '博士',
    email: '649557411@qq.com',
    desc: '2022级 湖南师范大学外国语学院 博士生,硕士毕业于湖南师范大学',
    hobby: '美食、旅游',
  },
  {
    name: '陈禹风',
    title: '博士（访问学生）',
    type: '博士',
    email: 'yufeng_chen0575@foxmail.com',
    desc: '2022级 山东大学外国语学院 博士生，硕士毕业于天津师范大学',
    hobby: '球类运动、动漫',
  },
  {
    name: '郭青青',
    title: '硕士生',
    type: '硕士生',
    email: '1339806101@qq.com',
    desc: '2019级硕士生，本科毕业于河北师范大学',
    hobby: '跑步、打球',
  },
  {
    name: '连婧',
    title: '硕士生',
    type: '硕士生',
    email: 'lianjinglin@hnu.edu.cn',
    desc: '2019级硕士生，本科毕业于山西师范大学',
    hobby: '园艺、交谊舞',
  },
  {
    name: '邓凤妮',
    title: '硕士生',
    type: '硕士生',
    email: '1183579215@qq.com',
    desc: '2020级硕士生，本科毕业于西南政法大学',
    hobby: '美食、看书',
  },
  {
    name: '张高德',
    title: '硕士生',
    type: '硕士生',
    email: 'gordonzhang2000@hnu.edu.cn',
    desc: '2021级硕士生，本科毕业于西南大学',
    hobby: '数码、推理小说、美剧',
  },
  {
    name: '张瑜',
    title: '硕士生',
    type: '硕士生',
    email: 'zhangyu122@hnu.edu.cn',
    desc: '2021级硕士生，本科毕业于湖南大学',
    hobby: '拉丁舞',
  },
  {
    name: '吴诗韵',
    title: '硕士生',
    type: '硕士生',
    email: '791983826@qq.com',
    desc: '2021级硕士生，本科毕业于湖南农业大学',
    hobby: '小说、追剧、旅游',
  },
  {
    name: '陈子龙',
    title: '硕士生',
    type: '硕士生',
    email: 'chrischen0929@foxmail.com',
    desc: '2022级硕士生，本科毕业于衡阳师范学院',
    hobby: '足球、吉他、旅游',
  },
  {
    name: '杨宇',
    title: '硕士生',
    type: '硕士生',
    email: 'yangyu913194@163.com',
    desc: '2022级硕士生，本科毕业于河海大学',
    hobby: '美食、看剧',
  },
  {
    name: '王瑾',
    title: '硕士生',
    type: '硕士生',
    email: '2541242613@qq.com',
    desc: '2022级硕士生，本科毕业于长沙理工大学',
    hobby: '跑步、轮滑、美食',
  },
  {
    name: '徐鹏',
    title: '本科生',
    type: '本科生',
    email: '1052884828@qq.com',
    desc: '2018级本科生',
    hobby: '小说、悠悠球',
  },
  {
    name: '赵睿',
    title: '本科生',
    type: '本科生',
    email: '1336177330@qq.com',
    desc: '2018级本科生',
    hobby: '台球、摄影',
  },
  {
    name: '李珂',
    title: '本科生',
    type: '本科生',
    email: 'mslike628@gmail.com',
    desc: '2018级本科生',
    hobby: '音乐剧、舞蹈、美食',
  },
  {
    name: '季玮程',
    title: '本科生（客座学生）',
    type: '本科生',
    email: 'jiweicheng@hnu.edu.cn',
    desc: '2018级 湖南大学文学院 本科生',
    hobby: '篮球、写作、旅行',
  },
  {
    name: '张中正',
    title: '本科生',
    type: '本科生',
    email: 'zzzhang@hnu.edu.cn',
    desc: '2019级本科生',
    hobby: '美剧、电影、游戏',
  },
  {
    name: '王国宇',
    title: '本科生',
    type: '本科生',
    email: 'lilwillwgy@163.com',
    desc: '2019级本科生',
    hobby: '音乐创作、篮球',
  },
  {
    name: '陈淑瑞',
    title: '本科生',
    type: '本科生',
    email: '924224458@qq.com',
    desc: '2019级本科生',
    hobby: '长笛、声乐、文学',
  },
  {
    name: '董龙杰',
    title: '本科生',
    type: '本科生',
    email: 'alfred_dong@hnu.edu.cn',
    desc: '2020级本科生',
    hobby: '旅游、美食',
  },
  {
    name: '李柯萱',
    title: '本科生',
    type: '本科生',
    email: '1215932753@qq.com',
    desc: '2020级本科生',
    hobby: '舞蹈、美食',
  },
  {
    name: '张依宁',
    title: '本科生',
    type: '本科生',
    email: '1394952130@qq.com',
    desc: '2020级本科生',
    hobby: '游戏、探店',
  },
  {
    name: '李泽娆',
    title: '本科生',
    type: '本科生',
    email: 'li7854@foxmail.com',
    desc: '2020级本科生',
    hobby: '游戏、动漫、旅行',
  },
  {
    name: '曾天虹',
    title: '本科生',
    type: '本科生',
    email: '2176301247@qq.com',
    desc: '2020级本科生',
    hobby: '羽毛球、第五人格',
  },
  {
    name: '吕佳',
    title: '毕业生',
    type: '毕业生',
    email: '1763021134@qq.com',
    desc: '2017级本科毕业生',
    hobby: '动漫、羽毛球',
    to: '武汉大学',
  },
  {
    name: '张雪颖',
    title: '毕业生',
    type: '毕业生',
    email: 'zhangxueying_5@163.com',
    desc: '2017级本科毕业生',
    hobby: '心理学、烘焙、摄影',
    to: '爱丁堡大学',
  },
];

const options = [
  {
    label: '导师',
    value: '导师',
  },
  {
    label: '博士后',
    value: '博士后',
  },
  {
    label: '博士',
    value: '博士',
  },
  {
    label: '硕士生',
    value: '硕士生',
  },
  {
    label: '本科生',
    value: '本科生',
  },
  {
    label: '毕业生',
    value: '毕业生',
  },
];

function LabMember() {
  const [list, setList] = useState<IList[]>([]);
  const [curOpt, setCurOpt] = useState<string>('导师');

  useEffect(() => {
    setList(
      total.filter((item: IList) => {
        return curOpt === item.type;
      })
    );
  }, [curOpt]);

  return (
    <div className={styles.labMemberWrap}>
      <div className={styles.options}>
        {options.map((option: IOption, index) => {
          const getOptionClass = () => {
            return `${styles.option} ${curOpt === option.value ? styles.selected : null}`;
          };
          return (
            <span key={option.value} className={getOptionClass()}>
              {!!index ? <span className={styles.split}></span> : null}
              <Button
                type="link"
                onClick={() => {
                  setCurOpt(option.value);
                }}
              >
                {option.label}
              </Button>
            </span>
          );
        })}
      </div>
      <div className={styles.list}>
        {list.length === 0 ? <Empty description="暂无数据" /> : null}
        {list.map((item: IList) => {
          return (
            <div className={styles.item} key={item.name}>
              <div className={styles.pic}>
                <img
                  src={require(`@/asset/labMember/${item.name}.jpg`)}
                  width="158"
                  height="237"
                  alt={item.name}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>{item.desc}</div>
                <div className={styles.tel}>E-mail：{item.email}</div>
                <div className={styles.hobby}>爱好：{item.hobby}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(LabMember);
