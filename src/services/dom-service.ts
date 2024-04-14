import { JSDOM } from 'jsdom';

export default function (html: string) {
    return new JSDOM(html)
}