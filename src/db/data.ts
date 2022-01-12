import {
  getDataByColumn,
  getRandom,
  STORY_TABLE,
  SPECIAL_TABLE,
  MYSTERY_TABLE
} from './index.js';

const ROLER = [
  '23333',
  '后端大佬', '前端', '产品经理', '测试小弟',
  '吃瓜群众',
  '打工人', '大伙', '大家', '大佬',
  '干饭人', '工具人', '瓜娃子',
  '韭菜',
  '某同学', '年轻人',
  '气氛组',
  '我滴乖乖', '小可爱', '兄弟们',
  '一起爬山？', '绝绝子'
];

const getRole = (): string => {
  return ROLER[Math.floor(Math.random() * ROLER.length)];
};

const getRandomCommand = () => {
  let tabName = '';
  const percent = Math.floor(Math.random() * 100);
  if (percent < 30) {
    tabName = STORY_TABLE;
  } else if (percent < 70) {
    tabName = MYSTERY_TABLE;
  } else {
    return {special: true};
  }

  const {title, text: _randomText} = getRandom(tabName);

  const text = getRole();
  return {
    command: title,
    text: _randomText || text,
    special: false
  };
};

const getRandomImage = (): Record<string, string | number | boolean> => {
  const {command, text, special} = getRandomCommand();
  
  if (special) {
    const {image} = getRandom(SPECIAL_TABLE, 'image');
    return {
      special,
      image
    };
  }

  const story = getDataByColumn(command || '', 'title');
  delete story.id;
  delete story.mid;
  delete story.tid;

  return {
    special,
    text: text || '',
    ...story // title, image, x, y, max, font, color, align, direction, blur
  };
};

export {
  getRandomImage
};
