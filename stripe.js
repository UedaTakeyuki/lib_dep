import {loadStripe} from '@stripe/stripe-js'

async function stripefunc() {
  stripe = await loadStripe()
}

export { stripefunc }
