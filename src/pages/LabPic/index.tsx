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
    name: '聚餐1',
    img: 'znhy/聚餐1',
    type: '组内合影',
  },
  {
    name: '聚餐2',
    img: 'znhy/聚餐2',
    type: '组内合影',
  },
  {
    name: '聚餐3',
    img: 'znhy/聚餐3',
    type: '组内合影',
  },
  {
    name: '爬山',
    img: 'znhy/爬山',
    type: '组内合影',
  },
  {
    name: 'Chronos盒子',
    img: 'syssb/Chronos盒子',
    type: '实验室设备',
  },
  {
    name: 'EGG培训',
    img: 'syssb/EGG培训',
    type: '实验室设备',
  },
  {
    name: 'Eprime3',
    img: 'syssb/Eprime3',
    type: '实验室设备',
  },
  {
    name: 'PTONI测试',
    img: 'syssb/PTONI测试',
    type: '实验室设备',
  },
  {
    name: 'tDCS',
    img: 'syssb/tDCS',
    type: '实验室设备',
  },
  {
    name: '数据采集电脑',
    img: 'syssb/数据采集电脑',
    type: '实验室设备',
  },
  {
    name: '听力计GSI18',
    img: 'syssb/听力计GSI18',
    type: '实验室设备',
  },
  {
    name: 'PCC2021',
    img: 'xshd/PCC2021',
    type: '学术活动',
  },
  {
    name: '博士创新论坛',
    img: 'xshd/博士创新论坛',
    type: '学术活动',
  },
  {
    name: '博士后开题',
    img: 'xshd/博士后开题',
    type: '学术活动',
  },
  {
    name: '成员学术报告1',
    img: 'xshd/成员学术报告1',
    type: '学术活动',
  },
  {
    name: '成员学术报告2',
    img: 'xshd/成员学术报告2',
    type: '学术活动',
  },
  {
    name: '成员学术报告3',
    img: 'xshd/成员学术报告3',
    type: '学术活动',
  },
  {
    name: '三下乡',
    img: 'xshd/三下乡',
    type: '学术活动',
  },
  {
    name: '翻译年会_陈飞',
    img: 'xshd/翻译年会_陈飞',
    type: '学术活动',
  },
  {
    name: '实验招募海报1',
    img: 'xshd/实验招募海报1',
    type: '学术活动',
  },
  {
    name: '实验招募海报2',
    img: 'xshd/实验招募海报2',
    type: '学术活动',
  },
  {
    name: '实验招募海报3',
    img: 'xshd/实验招募海报3',
    type: '学术活动',
  },
  {
    name: '主办会议-R workshop1',
    img: 'xshd/主办会议-R workshop1',
    type: '学术活动',
  },

  {
    name: '主办会议-R workshop2',
    img: 'xshd/主办会议-R workshop2',
    type: '学术活动',
  },

  {
    name: '主办会议-博士论坛',
    img: 'xshd/主办会议-博士论坛',
    type: '学术活动',
  },
  {
    name: '爬山1',
    img: 'syshd/爬山1',
    type: '实验室活动',
  },
  {
    name: '爬山2',
    img: 'syshd/爬山2',
    type: '实验室活动',
  },
  {
    name: '田野调查',
    img: 'syshd/田野调查',
    type: '实验室活动',
  },
  {
    name: '湘雅访问',
    img: 'syshd/湘雅访问',
    type: '实验室活动',
  },
  {
    name: '语音学课堂',
    img: 'syshd/语音学课堂',
    type: '实验室活动',
  },
  {
    name: '组会1',
    img: 'syshd/组会1',
    type: '实验室活动',
  },
];

const options = [
  {
    label: '组内合影',
    value: '组内合影',
  },
  {
    label: '实验室设备',
    value: '实验室设备',
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
