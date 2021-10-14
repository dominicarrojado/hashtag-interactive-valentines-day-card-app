import { Screen } from '@testing-library/dom';
import faker from 'faker';
import { Nullish } from './types';
import { COVERS } from './constants';

type GetFakeNumber = {
  (max?: number): number;
  (options?: { min?: number; max?: number; precision?: number }): number;
};

export function setReadOnlyProperty<
  O extends Record<string, any>,
  K extends keyof O,
  V extends any
>(object: O, property: K, value: V) {
  Object.defineProperty(object, property, {
    value,
    configurable: true,
  });
}

export function queryByTextIgnoreHTML(screen: Screen, text: string) {
  return screen.getByText((_: string, node: Nullish<Element>) => {
    const hasText = (node: Nullish<Element>) => node?.textContent === text;
    const nodeHasText = hasText(node);
    let childrenDontHaveText = true;

    if (node) {
      childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
    }

    return nodeHasText && childrenDontHaveText;
  });
}

export function getFakeSentence() {
  return faker.lorem.sentence();
}

export function getFakeSentences() {
  return faker.lorem.sentences();
}

export function getFakeBoolean() {
  return faker.datatype.boolean();
}

export function getFakeNumber<T = GetFakeNumber>(data?: T) {
  return faker.datatype.number(data);
}

export function getFakeString() {
  return faker.datatype.string();
}

export function getFakeWord() {
  return faker.lorem.word();
}

export function getFakeArrayElements() {
  return faker.random.arrayElements();
}

export function getFakeFirstName() {
  return faker.name.firstName();
}

export function getFakeDirectoryPath() {
  return faker.system.directoryPath();
}

export function getFakeUrl() {
  return faker.internet.url();
}

export function getFakeDomainWord() {
  return faker.internet.domainWord();
}

export function getFakeImageUrl() {
  return faker.image.imageUrl();
}

export function getNonObjectValues() {
  return [
    undefined,
    null,
    getFakeBoolean(),
    getFakeNumber(),
    getFakeWord(),
    getFakeArrayElements(),
  ];
}

export function getNonStringValues() {
  return [
    undefined,
    null,
    {},
    getFakeBoolean(),
    getFakeNumber(),
    getFakeArrayElements(),
  ];
}

export function getNonDateValues() {
  return [
    undefined,
    null,
    {},
    getFakeBoolean(),
    getFakeWord(),
    getFakeArrayElements(),
    '',
  ];
}

export function getFakeDate() {
  const datePast = faker.date.past();
  const year = datePast.getFullYear();
  let month: string | number = datePast.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let day: string | number = datePast.getDate();
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
}

export function getRandomCover() {
  const randomIdx = getFakeNumber({ min: 0, max: COVERS.length - 1 });

  return COVERS[randomIdx];
}
