export default function token(len: number = 20) {
  let chars = "abcdefghijklmnopqrstuvwxyz1234567890.-";
  let ret = "";

  for (let i = 0; i < len; i++) {
    ret += chars.at(Math.floor(Math.random() * chars.length));
  }

  return ret;
}

export function code(len: number = 6) {
  let chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ret = "";

  for (let i = 0; i < len; i++) {
    ret += chars.at(Math.floor(Math.random() * chars.length));
  }

  return ret;
}
