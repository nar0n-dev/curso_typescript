type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Natan', password: '@@123abc' };
const sentUser = { username: 'Natan', password: '@@123abc' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
