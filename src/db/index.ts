import initSqlJs from 'sql.js';

export const STORY_TABLE = 'STORY';
export const TEXT_TABLE = 'TEXT';
export const SPECIAL_TABLE = 'SPECIAL';
export const MYSTERY_TABLE = 'MYSTERY';

const DB_PATH = './public/db/popular.db';

const SQL = await initSqlJs({
  locateFile: (file: string) => `./public/db/${file}`
});
const buffer: any = await fetch(DB_PATH).then(res => res.arrayBuffer());
const db = new SQL.Database(new Uint8Array(buffer));

const getDB = () => {
  return db;
};

const getDataByColumn = (value: string, column = 'title'): Record<string, string | number> => {
  const stmt = getDB().prepare(`SELECT * FROM ${STORY_TABLE} INNER JOIN ${TEXT_TABLE} USING(mid) WHERE ${column} = :val`);
  const result = stmt.getAsObject({':val': value});
  stmt.free();
  return result;
};

const getRandom = (tableName = MYSTERY_TABLE, columns = '*'): Record<string, string> => {
  const sql = `SELECT ${columns} FROM ${tableName} ORDER BY RANDOM() limit 1`;
  const stmt = getDB().prepare(sql);
  const result = stmt.getAsObject({});
  stmt.free();
  return result;
};

export {
  getDataByColumn,
  getRandom
};