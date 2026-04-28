import type { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { useCourseTheme } from '../theme';

type Props = {
  title: string;
  children: ReactNode;
};

/**
 * Homework callout — uses `useCourseTheme()` so panel + copy follow course tokens.
 */
export function HomeworkPanel({ title, children }: Props) {
  const theme = useCourseTheme();

  return (
    <View style={theme.layout.panel}>
      <Text style={theme.text.panelTitle}>{title}</Text>
      <View style={theme.layout.panelBody}>{children}</View>
    </View>
  );
}
