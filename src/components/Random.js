import verbs from './verb.json';

const len = verbs.length;

export const getRandomVerb = () => {
    const i = Math.floor(Math.random() * len)
    return verbs[i];
}
