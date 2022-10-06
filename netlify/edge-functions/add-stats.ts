import type { Context } from 'https://edge.netlify.com'
import type { Element } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts'
import { HTMLRewriter } from 'https://ghuc.cc/worker-tools/html-rewriter/index.ts'

export default async function (_request: Request, context: Context) {
  const response = await context.next()
  console.log('EDGE BB')

  return new HTMLRewriter().transform(response)
  // TODO figure out how to get URL from env
  //const stats = await fetch(
  //  'http://localhost:8888/.netlify/functions/get-twitch-stats'
  //)

  //const twitch = await stats.json()
  //
  //console.log(twitch)
  //
  //const formatted = new Intl.NumberFormat('en-US', {
  //  notation: 'compact',
  //  minimumFractionDigits: 0,
  //  maximumFractionDigits: 1,
  //}).format(twitch.stats.followers)
  //console.log(formatted)
  //return new HTMLRewriter()
  //  .on('[data-site="twitch"]', {
  //    element(element: Element) {
  //      element.append(
  //        `
  //        <span class="stats">${formatted} followers</span>
  //      `,
  //        {
  //          html: true,
  //        }
  //      )
  //    },
  //  })
  //  .transform(response)
}
