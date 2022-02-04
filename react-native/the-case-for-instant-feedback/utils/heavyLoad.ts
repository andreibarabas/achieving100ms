/**
 * Function that takes roughly 1-2 seconds to finish
 *
 * This is obviously an overexageration
 * as you wouldn't block the entire JS thread for 1-2 seconds in production
 * but in production apps that have a lot of network traffic
 * it can happen sometimes that you have a 200ms workload split across multiple screens
 * and that gives the user a sluggish experience
 */
export async function workForASecond() {
  const limit = 20000;
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      i + j;
    }
  }

  //we use this to simulate waiting for a network request to complete
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
