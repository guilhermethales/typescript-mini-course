abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  readonly level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  get getNickname() {
    console.log('-------GET--------');
    return this.nickname;
  }

  set setNickname(nickname: string) {
    this.nickname = nickname;
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
  }
}

// const gui = new UserAccount('Guilherme', 23);
// console.log(gui);
// gui.logDetails();

const john = new CharAccount('John', 45, 'johnmaster', 80);
console.log(john);
console.log(john.level);
john.logDetails();
john.logCharDetails();
john.setNickname = 'Nick';

console.log(john.getNickname);