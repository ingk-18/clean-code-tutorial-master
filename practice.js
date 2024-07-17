Emails = {

  1 : '千代田',
  2 : '中央',
  3 : '港'
};


console.log(Emails[1]);

function getUserName(user) {
  if (user === undefined) return '名無し';
  return user.name ?? 'なし';
}

console.log(getUserName('hoge'));

function isPrimeNumber(n) {
  if (n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

for (let i = 1; i <= 30; i++) {
  console.log(i, isPrimeNumber(i));
}

function isCorrectInput(member) {
  if (member.id === undefined) {
    console.error("idがありません");
    return false;
  }

  if (member.name === undefined) {
    console.error("名前が入力されていません");
    return false;
  }

  if (member.age) {
    if (member.email) {
      return true;
    } else {
      console.error("メールアドレスが入力されていません");
      return false;
    }
  } else {
    console.error("年齢が入力されていません");
    return false;
  }
}