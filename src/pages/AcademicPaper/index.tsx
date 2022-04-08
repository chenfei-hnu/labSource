import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import { Button, Empty } from 'antd';

interface IList {
  link: string;
  title: string;
  author: string;
  time: string;
  img: string;
  journal: string;
}

interface IOption {
  label: string;
  value: string;
}

const total = [
  {
    title:
      'Irregularly Shaped Bimetallic Chalcogenide Ag8SnS6 Nanoparticles as Electrocatalysts for Hydrogen EvolutionMeiqing',
    author: 'Yang, Gonglei Shao, Binbin Wu, Jizhou Jiang, Song Liu, Huimin Li',
    journal: 'ACS Appl. Nano Mater. 2021 Full text',
    time: '2021',
    img: '2021-1',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title:
      'Tunable Doping of Rhenium and Vanadium into Transition Metal Dichalcogenides for Two-Dimensional Electronics',
    author:
      'Shisheng Li, Jinhua Hong, Bo Gao, Yung-Chang Lin, Hong En Lim, Xueyi Lu, Jing Wu, Song Liu, Yoshitaka Tateyama, Yoshiki Sakuma, Kazuhito Tsukagoshi, Kazu Suenaga, Takaaki Taniguchi',
    journal: 'Adv. Sci. 2021, 8, 2004438',
    time: '2021',
    img: '2021-2',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title: 'Highly Stable PtPdCu Alloy Nanowire Networks as Oxygen Reduction Electrocatalysts',
    author: 'Haozi Lu, Zhijie Kong, Ying Yang, Zhihui Xie, Haiyan Xiang, Song Liu, Gang Yu',
    journal: 'Electrocatalysis 2021, 12, 372–380',
    time: '2021',
    img: '2021-3',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title:
      'Modulated Anisotropic Growth of 2D SnSe Based on the Difference in a/b/c‑Axis Edge Atomic Structures',
    author:
      'Gonglei Shao, Xiong-Xiong Xue, Meiqing Yang,* Junqiang Yang, Xiao Liu, Haozi Lu, Yubin Jiang, Yuanyuan Jin, Quan Yuan, Jian Sun, Huimin Li, Guo Hong, Xuli Chen, Yexin Feng, Song Liu',
    journal: 'Chem. Mater. 2021, 33, 11, 4231–4239',
    time: '2021',
    img: '2021-4',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title:
      'New perspectives and designs into nature-inspired flexible electronics: status and applications',
    author: 'Huimin Gong; Song Luo; Huimin Li; Song Liu',
    journal: 'Materials Technology 2020, 1-12.',
    time: '2020',
    img: '2020-1',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title: 'Crested Two-dimensional Transistors',
    author:
      'Tao Liu, Song Liu, Kun-Hua Tu, Hennrik Schmidt, Leiqiang Chu , Du Xiang, Jens Martin, Goki Eda  , Caroline A. Ross and Slaven Garaj *',
    journal: 'Nat Nanotechnol. 2019, 14, 223-226.',
    time: '2018',
    img: '2018-1',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title: 'Optofluidic Device for Light Manipulation and Biosensing',
    author: 'Yong Chin Seow, Song Liu, Seunghyun Hong, and Slaven Garaj*.',
    journal:
      'Book chapter in “Encyclopedia of Microfluidics and Nanofluidics”, Dongqing Li, Springer US, page 1-13, 2014',
    time: '2015',
    img: '2015-1',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
  {
    title: 'Functional Single-walled Carbon Nanotube-based Molecular Devices',
    author: 'Song Liu and Xuefeng Guo*.',
    journal: 'Acta Chim. Sinica, 2013, 71, 478-484.',
    time: '2014',
    img: '2014-1',
    link: 'https://link.springer.com/article/10.1007/s12678-021-00656-9',
  },
];

const options = [
  {
    label: '2021',
    value: '2021',
  },
  {
    label: '2020',
    value: '2020',
  },
  {
    label: '2019',
    value: '2019',
  },
  {
    label: '2018',
    value: '2018',
  },
  {
    label: '2017',
    value: '2017',
  },
  {
    label: '2016',
    value: '2016',
  },
  {
    label: '2015年及以前',
    value: '2015',
  },
];

function AcademicPaper() {
  const [list, setList] = useState<IList[]>([]);
  const [curOpt, setCurOpt] = useState<string>('2021');

  useEffect(() => {
    setList(
      total.filter((item: IList) => {
        let show = curOpt === item.time;
        if (curOpt === '2015') show = item.time <= '2015';
        return show;
      })
    );
  }, [curOpt]);

  return (
    <div className={styles.academicPaperWrap}>
      <div className={styles.options}>
        {options.map((option: IOption, index) => {
          const getOptionClass = () => {
            let isSelect = curOpt === option.value;
            if (curOpt === '2015') isSelect = option.value <= '2015';
            return `${styles.option} ${isSelect ? styles.selected : null}`;
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
            <div className={styles.item} key={item.title}>
              <span className={styles.time}>
                <span className={styles.icon}></span>
                {item.time}
              </span>
              <div className={styles.info}>
                <div className={styles.title}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </div>
                <div className={styles.author}>{item.author}</div>
                <div className={styles.journal}>
                  {item.journal}
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Full text
                  </a>
                </div>
                <img src={require(`@/asset/xslw/${item.img}.png`)}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(AcademicPaper);
