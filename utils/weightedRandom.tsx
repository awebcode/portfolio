// utils/weightedRandom.ts
type WeightedOption = {
  option: string;
  weight: number;
};

export const weightedRandom = (options: WeightedOption[]): string => {
  const totalWeight = options.reduce((acc, { weight }) => acc + weight, 0);
  let random = Math.random() * totalWeight;

  for (const { option, weight } of options) {
    if (random < weight) return option;
    random -= weight;
  }
  return options[options.length - 1].option;
};
