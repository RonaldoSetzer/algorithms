export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const count: { [key: string]: number } = {}

  for (let char of s) {
    count[char] = count[char] + 1 || 1
  }

  for (let char of t) {
    if (!count[char]) return false
    count[char]--
  }

  return true
}
