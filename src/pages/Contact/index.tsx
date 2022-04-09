import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

import contact1Img from '../../asset/contact1.jpg';
import contact2Img from '../../asset/contact2.jpg';
import positionImg from '../../asset/position.png';

function Contact() {
  return (
    <div className={styles.contactWrap}>
      <div className={styles.mainTitle}>联系我们</div>
      <div className={styles.desc}>
        <span className={styles.bold}>陈飞</span>
        <span>湖南大学外国语学院</span>
        <span>湖南省长沙市岳麓区麓山南路2号湖南大学，410082</span>
        <span>电话：+86-17788926788</span>
        <span>E-mail：chenfeianthony@gmail.com</span>
      </div>
      <div className={styles.position}>
        <img alt="" src={positionImg} />
      </div>
      <div className={styles.imgs}>
        <img alt="" src={contact1Img} />
        <img alt="" src={contact2Img} />
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(Contact);
