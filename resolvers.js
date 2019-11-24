const BORN = "United Kingdom";
const EMAIL = "me@william-lee.com";
const FAVOURITE_TECH = ['JS/Typescript', 'Angular', 'Ruby/On rails'];
const GITHUB = "https://github.com/wlee88";
const HOBBIES = [
  'Playing fast things on guitar', 
  'Prog instrumentals', 
  'Video games (JRPGs.. anything with pretty graphics and story)', 
  'Making stupid things', 
  'Cycling/Gym'
];
const LINKED_IN = "https://www.linkedin.com/in/wlee88/";
const NAME = "William Lee";
const RESUME = 'https://www.dropbox.com/s/3ljjz4217zsncaf/William-Lee-CV.pdf?dl=0';
const SECRET_WEBSITES = [
  'http://iam.william-lee.com',
  'http://iam.alexplescan.com', 
  'http://malepimp.com'
];
const SOUNDCLOUD = "https://soundcloud.com/wlee88";

module.exports = {
    Query: {
      name: () => NAME,
      born: () => BORN,
      email: () => EMAIL,
      favouriteTech: () => FAVOURITE_TECH,
      resume: () => RESUME,
      hobbies: () => HOBBIES,
      linkedIn: () => LINKED_IN,
      github: () => GITHUB,
      soundcloud: () => SOUNDCLOUD,
      secretWebsites: () => SECRET_WEBSITES
    }
  };