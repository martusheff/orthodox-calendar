import * as Haptics from 'expo-haptics';
import { loadHapticSetting } from './OCPreferencesHelper'; // ensure the path is correct

// Function that checks setting and runs haptic feedback
const runHaptic = async (impactStyle) => {
  const isHapticEnabled = await loadHapticSetting();
  if (isHapticEnabled) {
    Haptics.impactAsync(impactStyle);
  }
};

// Exporting modified functions
export const OCLightImpact = async () => {
  await runHaptic(Haptics.ImpactFeedbackStyle.Light);
};

export const OCMediumImpact = async () => {
  await runHaptic(Haptics.ImpactFeedbackStyle.Medium);
};

export const OCHeavyImpact = async () => {
  await runHaptic(Haptics.ImpactFeedbackStyle.Heavy);
};
