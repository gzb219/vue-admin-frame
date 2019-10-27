import faker from 'faker';
import { Request, Response } from 'express';
import { IResponses } from '../response';
import { ITypePaintedFace } from '@/apis/types';
import Dictionary from './dictionaries';

const editors = Dictionary.username;
const now = new Date();
now.setDate(now.getDate() - 1);

const origin: { [key: string]: string } = {
  0: `<p style="text-indent: 2em; margin-bottom: 15px;">重庆日报讯 （记者 周松松）9月14日，2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行，市委常委、宣传部部长张鸣出席启动仪式。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">阿斯顿发斯蒂芬很快就拉丝的好浪费就开始电话费拉水电费红包卡设计动画发生大幅，时间将持续到9月22日。宣传周期间，市级相关部门将举办“网络安全体验展”“网络安全高峰论坛”，以及校园日、电信日、法治日、金融日、青少年日、个人信息保护日等系列活动；各区县将深入学校、商圈、街道、社区，开展网络安全宣传教育，普及网络安全知识，发动全民广泛参与网络安全宣传教育活动，进一步提升广大市民的网络安全意识和防护技能，努力推动形成全社会高度重视网络安全、积极维护网络安全的良好氛围。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">市级相关部门、各区县党委网信办、璧山区有关单位负责人，以及网络安全行业和企业代表等近1000人参加了启动仪式。</p>`,

  1: `<p style="text-indent: 2em; margin-bottom: 15px;">重庆日报讯 （记者 周松）9月16日，2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行，市委常委、宣传部部长张鸣出席启动仪式。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">据了解，按照中央网信办的统一安排，今年网络安全宣传周的主题是“网络安全为人民，网络安全靠人民”，时间将持续到9月22日。宣传周期间，市级相关部门将举办“网络安全体验展”“网络安全高峰论坛”，以及校园日、电信日、法治日、金融日、青少年日、个人信息保护日等系列活动；各区县将深入学校、商圈、街道、社区，开展网络安全宣传教育，普及网络安全知识，发动全民广泛参与网络安全宣传教育活动，进一步提升广大市民的网络安全意识和防护技能，努力推动形成全社会高度重视网络安全、积极维护网络安全的良好氛围。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">市级相关部门、各区县党委网信办、璧山区有关单位负责人，以及网络安全行业和企业代表等近1000人参加了启动仪式。</p>`,

  2: `<p style="text-indent: 2em; margin-bottom: 15px;">重庆日报讯 （记者 周松）9月16日，ccccc2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行，市委常委、宣传部部长张鸣出席启动仪式。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">据了解，按照中央网信办的统一安排，今年网络安全宣传周的主题是“网络安全为人民，网络安全靠人民”，时间将持续到9月22日。宣传周期间，市级相关部门将举办“网络安全体验展”“网络安全高峰论坛”，以及校园日、ffff电信日、法治日、金融日、青少年日、个人信息保护日等系列活动aaaaa；各区县将深入学校、商圈、街道、社区，开展网络安全宣传教育，普及网络安全知识，发动全民广泛参与网络安全宣传教育活动，进一步提升广大市民的网络安全意识和防护技能，努力推动形成全社会高度重视网络安全、积极维护网络安全的良好氛围!</p>
<p style="text-indent: 2em; margin-bottom: 15px;">市级相关部门bbbb、各区县党委网信办、ddddd璧山区有关单位负责人e，以及网络安全行业和企业代表等近1000人参加了启动仪式。</p>`,

  3: `<p style="text-indent: 2em; margin-bottom: 15px;">重庆日报讯 （记者 周松）9月16日，2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行，市委常委、宣传部部长张鸣出席启动仪式。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">据了解，按照中央网信办的统一安排，这次网络安全宣传周的主题是“网络安全为人民，网络安全靠人民”，时间将持续到9月22日。宣传周期间，市级相关部门将举办“网络安全体验展”“网络安全高峰论坛”，以及校园日、ffff电信日、法治日、金融日、青少年日、个人信息保护日等系列活动aaaaa；各区县将深入学校、商圈、街道、社区，开展网络安全宣传教育，普及网络安全知识，发动全民广泛参与网络安全宣传教育活动，进一步提升广大市民的网络安全意识和防护技能，努力推动形成全社会高度重视网络安全、积极维护网络安全的良好氛围!</p>
<p style="text-indent: 2em; margin-bottom: 15px;">市级相关部门bbbb、各区县党委网信办、ddddd璧山区有关单位负责人e，以及网络安全行业和企业代表等近1000人参加了启动仪式。</p>`,

  4: `<p style="text-indent: 2em; margin-bottom: 15px;">重庆日报讯 （记者 周松）9月16日，2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行，市委常委、宣传部部长张鸣出席启动仪式。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">据了解，按照中央网信办的统一安排，这次网络安全宣传周的主题是“网络安全为人民，网络安全靠人民”，时间将持续到9月22日。宣传周期间，市级相关部门将举办“网络安全体验展”“网络安全高峰论坛”，以及校园日、电信日、法治日、金融日、青少年日、个人信息保护日等系列活动aaaaa；各区县将深入学校、商圈、街道、社区，开展网络安全宣传教育，普及网络安全知识，发动全民广泛参与网络安全宣传教育活动，进一步提升广大市民的网络安全意识和防护技能，努力推动形成全社会高度重视网络安全、积极维护网络安全的良好氛围!</p>
<p style="text-indent: 2em; margin-bottom: 15px;">市级相关部门bbbb、各区县党委网信办、ddddd璧山区有关单位负责人e，以及网络安全行业和企业代表等近1000人参加了启动仪式。</p>`,

  5: `<p style="text-indent: 2em; margin-bottom: 15px;">重庆日报讯 （记者 周松）9月16日，2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行，市委常委、宣传部部长张鸣出席启动仪式。</p>
<p style="text-indent: 2em; margin-bottom: 15px;">据了解，按照中央网信办的统一安排，今年网络安全宣传周的主题是“网络安全为人民，网络安全靠人民”，时间将持续到10月22日。宣传周期间，市级相关部门将举办“网络安全体验展”“网络安全高峰论坛”，以及校园日、电信日、法治日、金融日、青少年日、个人信息保护日等系列活动；各区县将深入学校、商圈、街道、社区，开展网络安全宣传教育，普及网络安全知识，发动全民广泛参与网络安全宣传教育活动，进一步提升广大市民的网络安全意识和防护技能，努力推动形成全社会高度重视网络安全、积极维护网络安全的良好氛围!</p>
<p style="text-indent: 2em; margin-bottom: 15px;">市级相关部门、各区县党委网信办、璧山区有关单位负责人e，以及网络安全行业和企业代表等近1000人参加了启动仪式。</p>`
};
const title: string = '2019年重庆市网络安全宣传周启动仪式在璧山区人民广场举行';

function generateHistory(version: number) {
  const mtime = version === 0 ? now : new Date(now.getTime() + 1000 * 60 * 60 * version);

  return {
    id: 1,
    version,
    timestamp: mtime.getTime(),
    author: faker.random.arrayElement(editors),
    title,
    content: origin[version],
    status: 0
  };
}

const histories: ITypePaintedFace[] = [];

Object.keys(origin).forEach(key => {
  histories.push(generateHistory(parseInt(key)));
});

export const getArticleHistories = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = histories.filter(v => v.id === parseInt(id));
  const _res = IResponses.STATUS_SUCCESS;
  _res.data = data;
  _res.page = undefined;
  return res.json(_res);
};
