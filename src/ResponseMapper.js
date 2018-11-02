import {owner, repo, githubFileUrl, branch, publicDir} from './properties';

export function buildGithubUrl(path) {
    return `${githubFileUrl}/${owner}/${repo}/${branch}/${publicDir}/${path}`;
}
