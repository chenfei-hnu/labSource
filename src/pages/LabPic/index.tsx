import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { connect } from 'react-redux';
import { Button, Empty } from 'antd';

interface IList {
  name: string;
  img: string;
  type: string;
}

interface IOption {
  label: string;
  value: string;
}

const total = [
  {
    name: '四周年合影',
    img: '四周年合影',
    type: '组内合影',
  },
  {
    name: '两周年聚餐',
    img: '两周年聚餐',
    type: '组内合影',
  },
  {
    name: '2018年教师节',
    img: '2018年教师节',
    type: '组内合影',
  },
  {
    name: '组内合影',
    img: '组内合影1',
    type: '组内合影',
  },
  {
    name: '组内合影',
    img: '组内合影2',
    type: '组内合影',
  },
  {
    name: '组内合影',
    img: '组内合影3',
    type: '组内合影',
  },
  {
    name: '组内合影',
    img: '组内合影4',
    type: '组内合影',
  },
  {
    name: '组内合影',
    img: '组内合影5',
    type: '组内合影',
  },
  {
    name: '等离子体清洗仪',
    img: '等离子体清洗仪',
    type: '实验室仪器',
  },
  {
    name: '高分辨显微镜',
    img: '高分辨显微镜',
    type: '实验室仪器',
  },
  {
    name: 'CVD房',
    img: 'CVD房',
    type: '实验室环境',
  },
  {
    name: '实验室',
    img: '实验室',
    type: '实验室环境',
  },
  {
    name: '露台',
    img: '露台',
    type: '实验室环境',
  },
  {
    name: '楼梯间',
    img: '楼梯间',
    type: '实验室环境',
  },
  {
    name: 'NT 18',
    img: 'NT 18',
    type: '学术活动',
  },
  {
    name: '访问澳门大学',
    img: '访问澳门大学',
    type: '学术活动',
  },
  {
    name: '四周年活动',
    img: '四周年活动',
    type: '实验室活动',
  },
  {
    name: '户外烧烤',
    img: '户外烧烤',
    type: '实验室活动',
  },
  {
    name: '实验室一周年纪念',
    img: '实验室一周年纪念',
    type: '实验室活动',
  },
];

const options = [
  {
    label: '组内合影',
    value: '组内合影',
  },
  {
    label: '实验室仪器',
    value: '实验室仪器',
  },
  {
    label: '实验室环境',
    value: '实验室环境',
  },
  {
    label: '学术活动',
    value: '学术活动',
  },
  {
    label: '实验室活动',
    value: '实验室活动',
  },
];

function LabPic() {
  const [list, setList] = useState<IList[]>([]);
  const [curOpt, setCurOpt] = useState<string>('组内合影');

  useEffect(() => {
    setList(
      total.filter((item: IList) => {
        return curOpt === item.type;
      })
    );
  }, [curOpt]);

  return (
    <div className={styles.labPicWrap}>
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
            <div className={styles.item} key={item.img}>
              <div className={styles.pic}>
                <img
                  src={require(`@/asset/labPic/${item.img}.jpg`)}
                  width="230"
                  height="170"
                  alt={item.name}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(LabPic);
