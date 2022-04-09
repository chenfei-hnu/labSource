import React from 'react';
import styles from './index.less';
import { connect } from 'react-redux';

import yjfx1Pic from '../../asset/yjfx1.jpg';
import yjfx2Pic from '../../asset/yjfx2.jpg';
import yjfx3Pic from '../../asset/yjfx3.jpg';
import yjfx4Pic from '../../asset/yjfx4.jpg';
import yjfx5Pic from '../../asset/yjfx5.jpg';

function ResearchDirection() {
  return (
    <div className={styles.researchDirectionWrap}>
      <div className={styles.mainTitle}>研究方向</div>
      <div className={styles.list}>
        <div className={styles.partWapper}>
          <span className={styles.partTitle}>研究方向概述</span>
          <p>
            陈飞课题组的研究领域主要围绕着人与人交往过程中的“言语链”来展开研究，具体的研究方向多样化，在如下的多个研究方向均有相关论文发表：
            <div>(1) 一语习得</div>
            <div>(2) 二语习得</div>
            <div>(3) 言语感知的心理机制</div>
            <div>(4) 言语处理的脑神经机制</div>
            <div>(5) 计算机辅助发音教学系统</div>
            <div>(6) 病理语言学之机制研究（认知心理机制、神经生理机制）</div>
            <div>(7) 病理语言学之康复训练</div>
          </p>
          <p>
            陈飞课题组近些年来主要从事言语加工及大脑神经机制的研究，尤其在自闭症人群言语与认知障碍研究方面积累了丰富的经验，熟练掌握行为学实验及脑成像实验的范式与技术。该领域研究成果已发表在Autism
            Research（2021），Journal of Autism and Developmental Disorders（2021），Journal of
            Speech Language and Hearing Research（2021a, 2021b, 2021c），Frontiers in
            Psychology（2020,2021），Language, Cognition and Neuroscience（2020）， PLoS
            ONE（2019），The Journal of the Acoustical Society of America（2018），IEEE-ACM
            Transactions on Audio, Speech, and Language Processing（2017），Journal of Child
            Language（2017）等国际知名期刊。
          </p>
        </div>
        <div className={styles.partWapper}>
          <span className={styles.partTitle}>1）基于汉语背景言语感知研究</span>
          <span className={styles.partSubTitle}>A．健康成人言语感知的心理与神经机制</span>
          <p>
            在言语感知方面，我们在语音范畴化加工研究领域开展了一系列的研究，熟练掌握了范畴化感知的行为学实验范式，且对感知背后的心理与认知机制进行考察与探讨（Chen
            & Peng，2018. The Journal of the Acoustical Society of America；Chen & Peng，2016.
            Journal of Signal Processing
            Systems；陈飞等，2019.《语言科学》）。另外，我们课题组还研究了以普通话母语为背景的健康成年人和失乐症患者在进行声调范畴化感知时的脑电波ERP反映（Chen
            & Peng，2020. Frontiers in
            Psychology），通过行为学感知实验，鉴别连续统中的标准刺激、范畴内靶刺激、范畴间靶刺激，进而使用oddball经典范式，成功实现了描述声调范畴化感知程度高低的电生理量化指标（图1）。
          </p>
          <p className={styles.imgWapper}>
            <img alt="" src={yjfx1Pic} />
            <p>
              图1.标准刺激、范畴内靶刺激、范畴间靶刺激引发的脑电波变化及脑地形图（Chen & Peng，2020.
              Frontiers in Psychology）
            </p>
          </p>
        </div>
        <div className={styles.partWapper}>
          <span className={styles.partSubTitle}>B．健康儿童言语发展性研究</span>
          <p>
            我们团队利用范畴化感知的经典行为学范式，研究四岁~七岁的普通话健康儿童完成相关的声调辨认和区分任务，通过边界位置、边界宽度和区分正确率等参数来量化观察普通话儿童在声调感知上的发展（Chen等，2017.
            Journal of Child
            Language）。普通话健康儿童对于声调感知的发展是一个逐步达到成熟和稳定的过程，虽然他们在四岁前对于普通话阴平和阳平之间的感知已经呈现范畴化，然而在六岁时对于普通话阴平和阳平辨认能力才达到了成人水平。
          </p>
        </div>
        <div className={styles.partWapper}>
          <span className={styles.partSubTitle}>C．自闭症人群言语加工的心理及神经机制</span>
          <p>
            陈飞课题组曾在研究中采用了范畴感知的行为学实验范式，探究了高功能自闭症青少年对于VOT的范畴化感知（Chen
            & Peng，2021. Journal of Speech, Language, and Hearing
            Research）。结果表明高功能的自闭症青少年对于VOT的感知结果范畴化程度较低（图2）；且同年龄的高功能的自闭症青少年对于声调的感知比辅音嗓音起始时间感知的范畴化感知程度要高，该研究支持了前人研究，即自闭症者在音高维度上的声学加工存在优势、而在时间维度上的声学加工存在缺陷。
          </p>
          <p className={styles.imgWapper}>
            <img alt="" src={yjfx2Pic} />
            <p>
              图2. 普通话高功能自闭症青少年对于VOT范畴化感知结果（Chen & Peng，2021. Journal of
              Speech, Language, and Hearing Research）
            </p>
          </p>
          <p>
            我们课题组最近的一项研究，也运用了事件相关电位以及时频分析技术（图3），探讨了普通话自闭症和健康儿童在感知“婴儿导向式语言（Infant-directed
            Speech）”时，对于元音三角面积扩大的脑生理反应，论证了自闭症儿童在处理“婴儿导向式语言”这种具有社交性质以及语言学意义的言语信息时存在加工缺陷的脑神经基础。
          </p>
          <p className={styles.imgWapper}>
            <img alt="" src={yjfx3Pic} />
            <p>
              图3. 汉语自闭症儿童对于言语和非言语领域内共振峰信息加工的时频分析结果（Chen等，2021.
              Autism Research）
            </p>
          </p>
        </div>
        <div className={styles.partWapper}>
          <span className={styles.partTitle}>2）基于汉语背景言语产出研究</span>
          <span className={styles.partSubTitle}>A．汉语自闭症人群言语产出研究</span>
          <p>
            陈飞课题组采用了行为学模仿任务，考察了普通话背景和粤语背景的自闭症儿童模仿粤语声调及非言语（纯音）时的表现（Chen等，2021.
            Journal of Autism and Developmental
            Disorders）。通过声学分析发现，和典型发展儿童相比，自闭症儿童在模仿粤语声调时的音高变化幅度更大。而在模仿非言语时，自闭症者与典型发展儿童无异（图4）。此外，研究也发现声调背景的自闭症儿童无法利用母语音段中的音系知识来提高非母语声调产出的准确性，以上结果都表明：自闭症儿童音高声学加工的非典型性仅存在于言语加工层面。
          </p>
          <p className={styles.imgWapper}>
            <img alt="" src={yjfx4Pic} />
            <p>
              图4.自闭症儿童对于言语和非言语音高的模仿产出表现（Chen等，2021. Journal of Autism and
              Developmental Disorders）
            </p>
          </p>
        </div>
        <div className={styles.partWapper}>
          <span className={styles.partSubTitle}>B．自闭症儿童言语康复训练系统</span>
          <p>
            我们团队开发了计算机辅助3D虚拟发音人（Chen 等，2019. PLoS
            One），用来帮助普通话自闭症儿童的发音教学。通过眼动技术观察自闭症儿童在学习时的注意力分配，并开展了康复训练的实证研究，论证了该3D虚拟发音人训练系统的有效性。另外，我们团队也开展了言语康复训练研究，证实了听觉-运动整合训练对于言语能力较低的自闭症儿童语音和词汇习得方面的促进作用，同时在延时后测中对于未训练的词汇学习仍然有效（图5）。这项研究表明，听觉-运动匹配的训练方法相较于传统的单一听觉重复性训练，可以更有效地提高自闭症儿童的声调、声母和韵母产出能力（Yan，Chen
            等，2021. Journal of Speech, Language, and Hearing Research）。
          </p>
          <p className={styles.imgWapper}>
            <img alt="" src={yjfx5Pic} />
            <p>
              图5.
              听觉-运动匹配的训练方法(MMLI)和单一听觉重复性训练(SRT)对于自闭症儿童在语音和词汇习得上的准确率（Yan，Chen
              等，2021. Journal of Speech, Language, and Hearing Research）
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ common }: any) => ({ common });
export default connect(mapStateToProps)(ResearchDirection);
