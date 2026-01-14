export function checkPassword(input: string) {
  return input === process.env.NEXT_PUBLIC_TROOP_PASSWORD;
}