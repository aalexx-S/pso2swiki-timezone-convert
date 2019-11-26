# Pso2 swiki timezone converter

Slightly modifiy emergency mission table in pso2.swiki and pso2m.swiki.

## Local Timezone Header

Add an extra line above the emergency event table in pso2.swiki and pso2m.swiki.
It depends on local time, so make sure your local time is correct.

It will also show local timezone as UTC +/- N in the first cell and japan time in the last cell.
Please double check the time after installation.
Only tested in U.S. CA, but it should also work in any other timezone.

If current timezone is jp, it should skip adding extra header and add a refresh button at the first cell of the original header.

Use the refresh button to update current japan time.

## Highlight Next Event

The next event will be highlighted with a thick red border.
It depends on locale time, so please make sure locale time is correct.

Use the refresh button to update highlighted cell.

## Bug

Please add new issue to this github repo.
