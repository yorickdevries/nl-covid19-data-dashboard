/**
 * The RelativeDate provides a relative date in a context in which it can be interpreted
 * - as human readable relative date, if possible
 * - a full date in a tooltip
 * - machine readable iso dates
 */

import { formatDateFromSeconds } from '~/utils/formatDate';
import { replaceVariablesInText } from '~/utils/replaceVariablesInText';
import { useIsMounted } from '~/utils/use-is-mounted';

interface RelativeDateProps {
  dateInSeconds: number;
  isCapitalized?: boolean;

  /**
   * Template used is used server-side to fix the sentence structure.
   * Replaceable variable is `{{date}}`.
   *
   * e.g.:
   *
   * input:
   *
   *     dateInSeconds = 1615852800 // (march 16th)
   *     absoluteDateTemplate = `Op {{date}}`
   *
   * output:
   *
   *     server-side: `Op 16 maart`
   *     client-side: `Gisteren (16 maart)`
   * )
   */
  absoluteDateTemplate?: string;
}

export function RelativeDate({
  dateInSeconds,
  isCapitalized,
  absoluteDateTemplate,
}: RelativeDateProps) {
  const isMounted = useIsMounted();
  const isoDate = formatDateFromSeconds(dateInSeconds, 'iso');
  const dayMonthDate = formatDateFromSeconds(dateInSeconds, 'day-month');

  if (!isMounted) {
    const formattedDate = absoluteDateTemplate
      ? replaceVariablesInText(absoluteDateTemplate, { date: dayMonthDate })
      : dayMonthDate;

    return (
      <time dateTime={isoDate}>
        {isCapitalized ? capitalize(formattedDate) : formattedDate}
      </time>
    );
  }

  const relativeDate = formatDateFromSeconds(dateInSeconds, 'relative');
  const dayMonthYearDate = formatDateFromSeconds(dateInSeconds, 'medium');

  return (
    <time dateTime={isoDate} title={dayMonthYearDate}>
      {isCapitalized ? capitalize(relativeDate) : relativeDate} ({dayMonthDate})
    </time>
  );
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.substr(1);
}
