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
      'Individuals with Congenital Amusia Show Degraded Speech Perception but Preserved Statistical Learning for Tone Languages',
    author: 'Jiaqiang ZHU, Xiaoxiang CHEN*, Fei CHEN*, & Seth Wiener',
    journal: 'Journal of Speech, Language, and Hearing Research. 65 (1), 53-69',
    time: '2022',
    img: '2022-1',
    link: 'https://doi.org/10.1044/2021_JSLHR-21-00383',
  },
  {
    title:
      'Auditory-Motor Mapping Training Facilitates Speech and Word Learning in Tone-Language-Speaking Children with Autism: An Early Efficacy Study',
    author: 'Jinting YAN#, Fei CHEN#*, Xiaotian GAO, & Gang PENG',
    journal: 'Journal of Speech, Language, and Hearing Research. 64(12): 4664-4681',
    time: '2021',
    img: '2021-1',
    link: ' https://doi.org/10.1044/2021_JSLHR-21-00029',
  },
  {
    title:
      'Categorical Perception of Pitch Contours and Voice Onset Time in Mandarin-Speaking Adolescents with Autism Spectrum Disorders',
    author: 'Fei CHEN*, Gang PENG*.',
    journal: 'Journal of Speech, Language, and Hearing Research. 64(11): 4468-4484',
    time: '2021',
    img: '2021-2',
    link: 'https://doi.org/10.1044/2021_JSLHR-20-00725',
  },
  {
    title:
      'Linguistic tone and non-linguistic pitch imitation in children with autism spectrum disorders: A cross-linguistic investigation',
    author: 'Fei CHEN*, Candice Chi-Hang CHEUNG, & Gang PENG*',
    journal: 'Journal of Autism and Developmental Disorders. 1-19',
    time: '2021',
    img: '2021-3',
    link: 'https://doi.org/10.1007/s10803-021-05123-4',
  },
  {
    title:
      'Neural coding of formant-exaggerated speech and nonspeech in children with and without autism spectrum disorders',
    author: 'Fei CHEN, Hao ZHANG, Hongwei DING, Suiping WANG, Gang PENG, & Yang ZHANG*',
    journal: 'Autism Research. 14(7): 1357-1374',
    time: '2021',
    img: '2021-4',
    link: 'https://doi.org/10.1002/aur.2509',
  },
  {
    title:
      'The Development of Categorical Perception of Segments and Suprasegments in Mandarin-speaking Preschoolers',
    author: 'Junzhou MA*, Jiaqiang ZHU, Yuxiao YANG, Fei CHEN*',
    journal: 'Frontiers in Psychology.12:693366',
    time: '2021',
    img: '2021-5',
    link: 'https://doi.org/10.3389/fpsyg.2021.693366',
  },
  {
    title:
      'Reduced sensitivity to between-category information but preserved categorical perception of lexical tones in tone language speakers with congenital amusia',
    author: 'Fei CHEN, Gang PENG',
    journal: 'Frontiers in Psychology. 11:581410.',
    time: '2020',
    img: '',
    link: 'https://www.frontiersin.org/articles/10.3389/fpsyg.2020.581410/full',
  },
  {
    title: 'Speech Development in Mandarin-Speaking Children',
    author: 'Gang PENG, & Fei CHEN',
    journal:
      'In H.-M. Liu, F.-M. Tsao, & P. Li (Eds.), Speech perception, production and acquisition (pp. 219-242). Singapore: Springer.',
    time: '2020',
    img: '',
    link: 'https://link.springer.com/chapter/10.1007/978-981-15-7606-5_12',
  },
  {
    title:
      'The time course of orthographic and semantic activation in Chinese character recognition: evidence from an ERP study',
    author: 'Hao ZHANG, I-Fan SU, Fei CHEN, Lawrence NG, Lan WANG, and Nan YAN',
    journal: 'Language, Cognition and Neuroscience. 35(3): 292-309.',
    time: '2020',
    img: '',
    link: 'https://www.tandfonline.com/doi/abs/10.1080/23273798.2019.1652762',
  },
  {
    title:
      'Comprehension of literal statements and similes in Cantonese-speaking children with and without autism spectrum disorders',
    author:
      'Candice Chi-Hang CHEUNG, Yicheng RONG, Fei CHEN, Man Tak LEUNG, Tempo Po Yi TANG, & Gang PENG',
    journal: 'Clinical Linguistics & Phonetics. 34(4): 312-326. ',
    time: '2020',
    img: '',
    link: 'https://www.tandfonline.com/doi/full/10.1080/02699206.2019.1634765?casa_token=5DOgZNgX25gAAAAA%3AszTLDalRaZACt1dpS_IeIfmvoEt9xdh5FqWS5cAYPZ5Bxmnf1igIp2UQ8kmppRKeK8o4X7LGdCsr',
  },
  {
    title:
      'Comprehension of presupposition triggers in Cantonese-speaking children with and without autism spectrum disorders',
    author: 'Candice Chi-Hang CHEUNG, Yicheng RONG, Fei CHEN, Man Tak LEUNG, & Tempo Po Yi TANG',
    journal: 'Clinical Linguistics & Phonetics. 34(4): 388-406. ',
    time: '2020',
    img: '',
    link: 'https://www.tandfonline.com/doi/full/10.1080/02699206.2019.1673486?casa_token=83hOUDtdZ6cAAAAA%3A5fTl-KPObWCCiHVQWPIryhjZqIG7kfBZGSJuhfXXuN74gglhlMHmu1eOcZtfIcsjJTatpZjcWGYf',
  },
  {
    title: '多人谈话言语噪声对成人和青少年普通话声调与VOT感知的影响',
    author: '孟亚茹, 陈飞, 冯燕, 李含菲, 彭刚',
    journal: '中国语音学报. 11: 175-183.',
    time: '2020',
    img: '',
    link: '',
  },
  {
    title:
      'Research on feature extraction algorithm for plantar pressure image and gait analysis in stroke patients',
    author: 'Mo WANG, Xinan WANG, Zhuochen FAN, Fei CHEN, Sixu ZHANG, Chen PENG',
    journal: 'Journal of Visual Communication and Image Representation, 58, 525-531. ',
    time: '2019',
    img: '',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S1047320318303419',
  },
  {
    title:
      'Development and evaluation of a 3-D virtual pronunciation tutor for children with autism spectrum disorders',
    author: 'Fei CHEN, Lan WANG, Gang PENG, Nan YAN, Xiaojie PAN',
    journal: ' PLOS ONE. 14(1):e0210858. (SCI 二区，IF: 3.24)',
    time: '2019',
    img: '',
    link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0210858',
  },
  {
    title: '内部因素与元音范畴化感知',
    author: '陈飞, 张昊, 王士元, 彭刚. ',
    journal: '语言科学. 18(4): 410-425.',
    time: '2019',
    img: '',
    link: 'https://wenku.baidu.com/view/a09c13849c3143323968011ca300a6c30d22f10e?fr=xueshu_top',
  },
  {
    title:
      'Lower-level acoustics underlie higher-level phonological categories in lexical tone perception',
    author: 'Fei CHEN, Gang PENG.',
    journal: 'The Journal of the Acoustical Society of America, 144(3): EL158-EL164. ',
    time: '2018',
    img: '',
    link: 'https://asa.scitation.org/doi/full/10.1121/1.5052205',
  },
  {
    title:
      'The Development of Categorical Perception of Mandarin Tones in Four- to Seven-year-old Children',
    author: 'Fei CHEN, Gang PENG, Nan YAN, Lan WANG.',
    journal: 'Journal of Child Language, 44(6):1413-1434.',
    time: '2017',
    img: '',
    link: 'https://www.cambridge.org/core/journals/journal-of-child-language/article/abs/development-of-categorical-perception-of-mandarin-tones-in-four-to-sevenyearold-children/768E0CD74B86CA4EDF88B8DDA934F6F7',
  },
  {
    title: 'Investigations on Mandarin Aspiratory Animations Using an Airflow Model',
    author: 'Fei CHEN, Lan WANG, Hui CHEN, Gang PENG.',
    journal: 'IEEE-ACM Transactions on Audio, Speech, and Language Processing, 25(12):2399-2409.',
    time: '2017',
    img: '',
    link: 'https://ieeexplore.ieee.org/abstract/document/8114353',
  },
  {
    title: 'Context Effect in the Categorical Perception of Mandarin Tones',
    author: 'Fei CHEN, and Gang PENG.',
    journal: 'Journal of Signal Processing Systems, 82(2):253–261. ',
    time: '2016',
    img: '',
    link: 'https://link.springer.com/article/10.1007/s11265-015-1008-2',
  },
  {
    title: 'Report of the 7th International Conference in Evolutionary Linguistics',
    author: 'Fei CHEN, and Gang PENG.',
    journal: 'Journal of Chinese Linguistics, 44(1), 253-264. ',
    time: '2016',
    img: '',
    link: 'https://muse.jhu.edu/article/609607/summary',
  },
  {
    title: '湖南沅江话响音的鼻化度研究初探',
    author: '陈飞, 张昊, 时秀娟, 石锋, 彭刚',
    journal: '实验语言学, 4: 88-92.',
    time: '2015',
    img: '',
    link: '',
  },
];

const options = [
  {
    label: '2022',
    value: '2022',
  },
  {
    label: '2021',
    value: '2021',
  },
  {
    label: '2020',
    value: '2020',
  },
  {
    label: '2019年及以前',
    value: '2019',
  },
];

function AcademicPaper() {
  const [list, setList] = useState<IList[]>([]);
  const [curOpt, setCurOpt] = useState<string>('2022');

  useEffect(() => {
    setList(
      total.filter((item: IList) => {
        let show = curOpt === item.time;
        if (curOpt === '2019') show = item.time <= '2019';
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
            if (curOpt === '2019') isSelect = option.value <= '2019';
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
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Full text
                    </a>
                  ) : null}
                </div>
                {item.img ? <img src={require(`@/asset/xslw/${item.img}.jpg`)}></img> : null}
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
