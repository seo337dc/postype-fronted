import { atom } from 'recoil';
import { TUser } from '@Type/user';

export const userAtom = atom<TUser | null>({
  key: `userAtom/`,
  default: null,
});

export const responsiveAtom = atom<boolean>({
  key: `isPc/`,
  default: true,
});
