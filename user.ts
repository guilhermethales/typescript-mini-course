// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
}

const account: AccountInfo = {
  id: 123,
  name: 'Guilherme',
  email: 'teste@teste.com'
}

type CharInfo = {
  nickname: string;
  level: number;
}

const char: CharInfo = {
  nickname: 'guilhermethales',
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: 'Guilherme',
  nickname: 'guilhermethales',
  level: 100
}