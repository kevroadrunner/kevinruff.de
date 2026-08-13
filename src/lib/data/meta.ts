export type MetaType = {
  name: string;
  contact: {
    email: string;
  };
  social: {
    github: string;
    linkedIn: string;
    xing: string;
    cv: string;
  };
};

const meta: MetaType = {
  name: 'Kevin Ruff',
  contact: {
    email: 'hello@kevinruff.de',
  },
  social: {
    github: 'https://www.github.com/kevroadrunner/',
    linkedIn: 'https://www.linkedin.com/in/kevin-ruff-sh/',
    xing: 'https://www.xing.com/profile/Kevin_Ruff2/',
    cv: 'https://cv.kevinruff.de/',
  },
};

export default meta;
