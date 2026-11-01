export type BusinessStatistic = {
  label: string
  value: number
  suffix: string
}

// TEMPORARY DEMO DATA: these examples are not verified business claims.
// Replace each value with an accurate, approved figure before production launch.
export const businessStatistics: BusinessStatistic[] = [
  { label: 'Projects Completed', value: 5000, suffix: '+' },
  { label: 'Happy Customers', value: 4700, suffix: '+' },
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Localities', value: 95, suffix: '+' },
]
