import regularVerbs from '../../data/regularVerbs.json';
import iregularVerbs from '../../data/iregularVerbs.json'
import pharasalVerbs from '../../data/phrasalVerbs.json';

const verbs = [
    ...regularVerbs,
    ...iregularVerbs,
    ...pharasalVerbs
];

const len = verbs.length;

export const getRandomVerb = () => {
    const i = Math.floor(Math.random() * len)
    return verbs[i];
}
