import regularVerbs from '../../data/regularVerbs.json';
import iregularVerbs from '../../data/iregularVerbs.json'

const verbs = [...regularVerbs, ...iregularVerbs];

const len = verbs.length;

export const getRandomVerb = () => {
    const i = Math.floor(Math.random() * len)
    return verbs[i];
}
