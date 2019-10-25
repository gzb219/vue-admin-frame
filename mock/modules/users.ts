import faker from 'faker';
import { Request, Response } from 'express';
import { IResponses } from '../response';
import { IStateUser } from '@/store/modules/user';

export const userList: IStateUser[] = [];
const count = 20;
const roles: number[] = [0, 1, 2, 3, 4, 5, 6];
const passwordPreset = 'a12345678';

function generateUser(index: number) {
  const phone = faker.phone.phoneNumber();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const avatar = index < roles.length ? `./assets/img/avatars/${index}.gif` : undefined;

  return {
    id: index,
    username: firstName,
    password: passwordPreset,
    token: 'Token-' + firstName,
    roles: index < roles.length ? [roles[index]] : [7],
    nickname: firstName + ' ' + lastName,
    phone,
    email: faker.internet.email(),
    qq: faker.random.number({ min: 100000000, max: 20000000000 }),
    avatar,
    sex: faker.random.arrayElement([0, 1]), // 0: female, 1: male
    intro: faker.lorem.sentence(6, 10)
  };
}

for (let i = 0; i < roles.length; i++) {
  userList.push(generateUser(i));
}

for (let i = roles.length; i < count; i++) {
  userList.push(generateUser(i));
}

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = userList.find(u => u.username === username);

  if (!user || password !== passwordPreset) {
    const obj = IResponses.STATUS_WRONG_USER;
    return res.status(obj.status).json(obj);
  }

  const _res = IResponses.STATUS_SUCCESS;
  _res.data = {
    accessToken: user.token
  };
  return res.json(_res);
};

export const logout = (req: Request, res: Response) => {
  return res.json(IResponses.STATUS_SUCCESS);
};

export const getUsers = (req: Request, res: Response) => {
  let { phone, nickname } = req.query;
  if (nickname) {
    nickname = nickname.toLowerCase();
  }
  const list = userList.filter(u => {
    let is = true;
    if (nickname) {
      is = u.nickname!.toLowerCase().includes(nickname);
    }
    if (phone) {
      is = phone === u.phone;
    }
    return is;
  });

  const _res = IResponses.STATUS_SUCCESS;
  _res.data = list;
  return res.json(_res);
};

export const getMeInfo = (req: Request, res: Response) => {
  const token = req.header('X-Access-Token');
  const info = userList.find(u => u.token === token);

  const _res = IResponses.STATUS_SUCCESS;
  _res.data = info;

  return res.json(_res);
};

export const updateUser = (req: Request, res: Response) => {
  return res.json(IResponses.STATUS_SUCCESS);
};

export const deleteUser = (req: Request, res: Response) => {
  return res.json(IResponses.STATUS_SUCCESS);
};
